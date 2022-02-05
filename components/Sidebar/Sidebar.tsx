import { Row, Stack } from "@christiankaindl/lyts";
import { mauve } from "@radix-ui/colors";
import Link from "next/link";
import { FunctionComponent } from "react";
import { libraryVersion } from "utils/data";
import Item from "./Item";
import * as styles from './Sidebar.css'
import navigationData from '../../navigation-data.json'
import Logo from "../Logo/Logo";
import { link } from "styles/index.css";

const Sidebar: FunctionComponent = function () {
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

        <Stack gap={2.25}>
          {navigationData.sections.map((item) => {
            if (item.content === undefined) return null

            return (
              <Stack key={item.id}>
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
                <Stack gap='1px' style={item.id ? { borderLeft: `1.5px dashed ${mauve.mauve8}`, paddingLeft: 21 } : undefined}>
                  {item.id && (
                    // @ts-expect-error
                    <Item
                      key={item.id}
                      title="Overview"
                      href={`/${item.id}`}
                      id={item.id}
                      bleedTop={9}
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
