import { Row, Stack } from "@christiankaindl/lyts";
import { mauve } from "@radix-ui/colors";
import Link from "next/link";
import { FunctionComponent, useEffect } from "react";
import { libraryVersion } from "utils/data";
import Item from "./Item";
import * as styles from './Sidebar.css'
import navigationData from '../../navigation-data.json'
import Logo from "../Logo/Logo";
import { link } from "styles/index.css";
import create from 'zustand'
import { useRouter } from "next/router";

/**
 * Store the active sidebar element in a separate store.
 * 
 * With the previous approach, where the active item was determined in Item.ts, the scroll-handling from Next.js interfered with the measuring of framer-motion, leading to wrong layout animations of the active-item indicator.
 * With this aproach the item is updated lazily (in a useEffect) so it doesn't the layout measuring from framer-motion doesn't interfere with the scroll-handling of Next.js
 */
export const activeStore = create<{ id: string | null }>(() => ({
  id: null
}))

const Sidebar: FunctionComponent = function () {
  const router = useRouter()
  useEffect(() => {
    activeStore.setState({ id: router.asPath })
  }, [router.asPath])

  return (
    <Stack asChild className={styles.sidebar}>
      <nav>
        <Row yAlign='end'>
          <Link href='/' passHref>
            <Stack gap={0} asChild className={link}>
              <a>
                <Logo />
              </a>
            </Stack>
          </Link>
          <Link href='https://github.com/christiankaindl/LYTS'>
            <a style={{ color: mauve.mauve11, fontSize: 14 }}>{libraryVersion}</a>
          </Link>
        </Row>

        <Stack gap={2.5}>
          {navigationData.sections.map((item) => {
            if (item.content === undefined) return null

            return (
              <Stack gap='9px' key={item.id}>
                {item.title && (
                  <span
                    style={{
                      color: mauve.mauve11,
                      fontSize: '0.8em',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 'normal',
                    }}
                  >
                    {item.title}
                  </span>
                )}
                <Stack gap='1px' style={item.id ? { borderLeft: `1px dashed ${mauve.mauve8}`, paddingLeft: 21 } : undefined}>
                  {item.id && (
                    // @ts-expect-error
                    <Item
                      key={item.id}
                      title="Overview"
                      href={`/${item.id}`}
                      id={item.id}
                      bleedTop={3}
                    />
                  )}
                  {item.content.map(({ title, id, fullId }, index) => {
                    return (
                      // @ts-expect-error
                      <Item
                        key={id}
                        title={title}
                        href={`/${fullId}`}
                        id={id}
                        bleedBottom={index + 1 === item.content.length ? '9px' : undefined}
                      />
                    )
                  })}
                </Stack>
              </Stack>
            )
          })}

          <Stack gap='1px'>
            {/* @ts-expect-error */}
            <Item
              title="Browser support"
              href={`/browser-support`}
            />
            {/* @ts-expect-error */}
            <Item
              title="Acknowledgements"
              href={`/acknowledgements`}
            />
          </Stack>
        </Stack>
      </nav>
    </Stack>
  )
}

export default Sidebar
