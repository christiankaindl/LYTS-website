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
    <Stack gap={2.25} asChild className={styles.sidebar}>
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

        <Stack gap={1.5}>
          {navigationData.sections.map((item) => {
            if (item.content === undefined) return null

            return (
              <Stack gap='1px' key={item.id}>
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
                {item.content.map(({ title, id }) => {
                  return (
                    <Item
                      key={id}
                      title={title}
                      href={`/${item.id ? `${item.id}/` : ''}${id}`}
                      id={id}
                    />
                  )
                })}
              </Stack>
            )
          })}
        </Stack>
      </nav>
    </Stack>
  )
}

export default Sidebar
