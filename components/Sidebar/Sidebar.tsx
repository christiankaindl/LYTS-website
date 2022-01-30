import { Row, Split, Stack } from "@christiankaindl/lyts";
import { mauve } from "@radix-ui/colors";
import Badge from "components/Badge/Badge";
import { ClampIcon, ColumnsIcon, GridIcon, RowIcon, StackIcon } from "components/Icons/Icons";
import Link from "next/link";
import { FunctionComponent } from "react";
import { libraryVersion } from "utils/data";
import Item from "./Item";
import * as styles from './Sidebar.css'
import navigationData from '../../navigation-data.json'

const Sidebar: FunctionComponent = function () {
  return (
    <Stack gap={1.5} asChild className={styles.sidebar}>
      <nav>
      <Row yAlign='baseline'>
        <Link href='/' passHref>
          <Stack gap={0} asChild>
            <a style={{ textDecoration: 'none', color: 'black' }}>
              <h2>LYTS</h2>
            </a>
          </Stack>
        </Link>
        <span style={{ color: mauve.mauve11, fontSize: 14 }}>{libraryVersion}</span>
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
        <Split />
        <Stack>
          <Row bleedLeft='4px' gap={0.5} wrap>
            <Badge href='https://github.com/christiankaindl/LYTS/issues'>
              Report issue
            </Badge>
            <Badge href='https://github.com/christiankaindl/LYTS'>
              Star on GitHub
            </Badge>
          </Row>
          <p>Made with ❤️ by Christian Kaindl</p>
        </Stack>
      </nav>
    </Stack>
  )
}

export default Sidebar
