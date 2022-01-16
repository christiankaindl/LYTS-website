import { Row, Split, Stack } from "@christiankaindl/lyts";
import Badge from "components/Badge/Badge";
import { ClampIcon, ColumnsIcon, GridIcon, RowIcon, StackIcon } from "components/Icons/Icons";
import Link from "next/link";
import { FunctionComponent } from "react";
import Item from "./Item";
import * as styles from './Sidebar.css'

const Sidebar: FunctionComponent = function () {
  return (
    <Stack asChild className={styles.sidebar}>
      <nav>
        <Link href='/' passHref>
          <Stack gap={0} asChild>
            <a style={{ textDecoration: 'none', color: 'black' }}>
              <h2>LYTS <span style={{ fontWeight: 'normal',  }}>Docs</span></h2>
              <p style={{ opacity: 0.6 }}>Layout primitives for React.</p>
            </a>
          </Stack>
        </Link>
        <Stack gap={0}>
          <Item title='Get started' href='/get-started' />
        </Stack>
        <Stack gap={0}>
          <Item title="Stack" icon={<StackIcon small />} href="/components/stack" index={0} />
          <Item title="Row" icon={<RowIcon small />} href="/components/row" index={1} />
          <Item title="Clamp" icon={<ClampIcon small />} href="/components/clamp" index={2} />
          <Item title="Columns" icon={<ColumnsIcon small />} href="/components/columns" index={3} />
          <Item title="Grid" icon={<GridIcon small />} href="/components/grid" index={4} />
        </Stack>
        <Stack gap={0}>
          <Item title='Overview' href='/overview' />
          <Item title='Examples' href='/examples' />
          <Item title='Layout fundamentals' href='/layout-fundamentals' />
        </Stack>
        <Split />
        <Stack>
          <Row gap={0.5}>
            <Badge href='https://github.com/christiankaindl/LYTS/issues'>
              <a>Report issue</a>
            </Badge>
            <Badge href='https://github.com/christiankaindl/LYTS'>
              <a>Star on GitHub</a>
            </Badge>
          </Row>
          <p>Made with ❤️ by Christian Kaindl</p>
        </Stack>
      </nav>
    </Stack>
  )
}

export default Sidebar
