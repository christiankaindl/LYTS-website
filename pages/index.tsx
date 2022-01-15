// import * as otherStyles from '../styles/index.css'
import styles from './index.module.css'
// import Stack from '../../src/Stack/Stack'
// import StackDocs from '../../src/Stack/Stack.docs.mdx'
// import RowDocs from '../../src/Row/Row.docs.mdx'
// import ClampDocs from '../../src/Clamp/Clamp.docs.mdx'
// import ColumnsDocs from '../../src/Columns/Columns.docs.mdx'
// import GridDocs from '../../src/Grid/Grid.docs.mdx'
// import BoxDocs from '@lib/Box/Box.docs.mdx'
// import SplitDocs from '../../src/Split/Split.docs.mdx'
// import LayoutFundamentals from './layout-fundamentals.mdx'
// import GetStarted from './get-started.mdx'
// import Overview from './overview.mdx'
// import Examples from './examples.mdx'
// import Row from '@lib/Row/Row'
import { StackIcon, RowIcon, ClampIcon, ColumnsIcon, GridIcon } from '@/components/Icons/Icons'
// import Grid from '@lib/Grid/Grid'
import Button from '../components/Button'
import { Box, Stack, Row, Split } from '@christiankaindl/lyts'

const otherStyles = { nav: '' }
function App() {
  return (
    <div className={styles.App}>
      <div>
        <Stack asChild>
          <header className={styles['App-header']}>
            <h1>L<span className={styles.why}>Y</span>TS</h1>
            {/* Make it more wide here with visible labels */}
            {/* Slide in a similar variant for the navbar after initial scroll (with only tooltips) */}
            <Row className={otherStyles.nav}>
              <StackIcon />
              <RowIcon />
              <ClampIcon />
              <ColumnsIcon />
              <GridIcon />
            </Row>
            <p>
              Layout primitives for React
            </p>
            <Row>
              <Button>
                Get started &gt;
              </Button>
              <Button>GitHub</Button>
            </Row>
          </header>
        </Stack>
      </div>
      <Stack asChild>
        <main>
          <p style={{ fontSize: '1.7em', color: 'rgb(0 0 0 / 0.6)' }}>Build any layout quickly with well-designed composable components.</p>
          <p style={{ fontSize: '1.7em', color: 'rgb(0 0 0 / 0.6)' }}>Each component has a minimal API surface, is well documented and has plenty of examples (copy-pasta compatible!).</p>


          {/* <GetStarted /> */}

          {/* Components */}
          {/* <Grid asChild gap={3} gridItemMinWidth='25em'>
            <div className={otherStyles.debug}> */}
              {/* <Stack gap={1.5}>
                <BoxDocs />
              </Stack> */}
              {/* <Stack gap={1.5}>
                <StackDocs />
              </Stack>
              <Stack gap={1.5}>
                <RowDocs />
              </Stack>
              <Stack gap={1.5}>
                <ClampDocs />
              </Stack>
              <Stack gap={1.5}>
                <ColumnsDocs />
              </Stack>
              <Stack gap={1.5}>
                <GridDocs />
              </Stack>
              <Stack gap={1.5}>
                <BoxDocs />
              </Stack>
              <Stack gap={1.5}>
                <SplitDocs />
              </Stack> */}
            {/* </div>
          </Grid> */}
          {/* <Overview />
          <Examples />
          <LayoutFundamentals /> */}
        </main>
      </Stack>

    </div>
  )
}

export default App
