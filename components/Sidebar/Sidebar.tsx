import { Row, Split, Stack } from "@christiankaindl/lyts";
import { ClampIcon, ColumnsIcon, GridIcon, RowIcon, StackIcon } from "components/Icons/Icons";
import Link from "next/link";
import { FunctionComponent } from "react";
import Item from "./Item";
import * as styles from './Sidebar.css'

const Sidebar: FunctionComponent = function () {
  return (
    <Stack gap={1.5} asChild padding={16} className={styles.sidebar}>
      <nav>
        <Link href='/' passHref>
          <Stack gap={0} asChild>
            <a>
              <h2>LYTS <span style={{ fontWeight: 'normal',  }}>Docs</span></h2>
              <p>Layout primitives for React.</p>
            </a>
          </Stack>
        </Link>
        <Stack gap={0}>
          <Item title="Stack" icon={<StackIcon small />} href="/components/stack" index={0} />
          <Item title="Row" icon={<RowIcon small />} href="/components/row" index={1} />
          <Item title="Clamp" icon={<ClampIcon small />} href="/components/clamp" index={2} />
          <Item title="Columns" icon={<ColumnsIcon small />} href="/components/columns" index={3} />
          <Item title="Grid" icon={<GridIcon small />} href="/components/grid" index={4} />
        </Stack>
        <Stack gap={0}>
          <Item title='Get started' href='/get-started' />
          <Item title='Overview' href='/overview' />
          <Item title='Examples' href='/examples' />
          <Item title='Layout fundamentals' href='/layout-fundamentals' />
        </Stack>
        <Split />
        <Stack>
          <Row>
            <Link href='https://github.com/christiankaindl/LYTS/issues'>
              <a>Report issue</a>
            </Link>
            <Link href='https://github.com/christiankaindl/LYTS'>
              <a>Star on GitHub</a>
            </Link>
            {/* <Split />
            <Link href='https://twitter.com/christiankaindl'>
              <a>Twitter</a>
            </Link>
            <Link href='https://twitter.com/christiankaindl'>
              <a>GitHub</a>
            </Link> */}
          </Row>
          <p>Made with ❤️ by Christian Kaindl</p>
        </Stack>
      </nav>
    </Stack>
  )
}

export default Sidebar
