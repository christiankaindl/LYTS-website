import styles from './index.module.css'
import { StackIcon, RowIcon, ClampIcon, ColumnsIcon, GridIcon } from '@/components/Icons/Icons'
import Button from '../components/Button'
import { Stack, Row } from '@christiankaindl/lyts'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
              {icons.map((element, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    layoutId={`icon-${index}`}
                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                  >
                    {element}
                  </motion.div>
                )
              })}
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
        </main>
      </Stack>
    </div>
  )
}

export default App

const icons = [
  <Link href='/components/stack'>
    <a><StackIcon /></a>
  </Link>,
  <Link href='/components/row'>
    <a><RowIcon /></a>
  </Link>,
  <Link href='/components/clamp'>
    <a><ClampIcon /></a>
  </Link>,
  <Link href='/components/columns'>
    <a><ColumnsIcon /></a>
  </Link>,
  <Link href='/components/grid'>
    <a><GridIcon /></a>
  </Link>
]