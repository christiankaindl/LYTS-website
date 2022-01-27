import { Row, Split, Stack } from "@christiankaindl/lyts";
import { mauve } from "@radix-ui/colors";
import Badge from "components/Badge/Badge";
import { ClampIcon, ColumnsIcon, GridIcon, RowIcon, StackIcon } from "components/Icons/Icons";
import { Github } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import Item from "./Item";
import * as styles from './Sidebar.css'

const Sidebar: FunctionComponent = function () {
  return (
    <Stack asChild className={styles.sidebar}>
      <nav>
        <Stack gap={0.5}>
          <Row xAlign='space-between'>
            <Link href='/' passHref>
              <Stack gap={0} asChild>
                <a style={{ textDecoration: 'none', color: 'black' }}>
                  <h2>LYTS</h2>
                </a>
              </Stack>
            </Link>
            <Link href='https://github.com/christiankaindl/LYTS'>
              <a target='_blank' aria-label='GitHub' rel='noopener'><Github size={24} /></a>
            </Link>
          </Row>
          <Stack gap={0}>
            <Item title='Get started' href='/get-started' />
            <Item title='Overview' href='/overview' />
            {/* <Item title='Layout fundamentals' href='/layout-fundamentals' /> */}
          </Stack>
        </Stack>
        <Stack gap={0}>
          <span
            style={{
              color: mauve.mauve11,
              fontSize: '0.8em',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 'normal',
            }}
          >
            Components
          </span>
          <Item title="Stack" icon={<StackIcon small />} href="/components/stack" index={0} />
          <Item title="Row" icon={<RowIcon small />} href="/components/row" index={1} />
          <Item title="Clamp" icon={<ClampIcon small />} href="/components/clamp" index={2} />
          <Item title="Columns" icon={<ColumnsIcon small />} href="/components/columns" index={3} />
          <Item title="Grid" icon={<GridIcon small />} href="/components/grid" index={4} />
          <Item title="Box" href="/components/box" index={5} />
          <Item title="Split" href="/components/split" index={6} />
          <Item title="Breakout" href="/components/breakout" index={7} />
        </Stack>
        <Stack gap={0}>
          {/* <span
            style={{
              color: mauve.mauve11,
              fontSize: '0.85em',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 'normal',
            }}
          >
            Examples
          </span> */}
          <Item title='Examples' href='/examples' />
          {/* {examples.map(() => {

          })} */}
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
