import styles from './index.module.css'
import { StackIcon, RowIcon, ClampIcon, ColumnsIcon, GridIcon } from '@/components/Icons/Icons'
import Button from '@/components/Button'
import { Stack, Row } from '@christiankaindl/lyts'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
              {icons.map(({ name, icon, href }, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    layoutId={`icon-${index}`}
                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                  >
                    <Link href={href}>
                      <a aria-label={name}>{icon}</a>
                    </Link>
                  </motion.div>
                )
              })}
            </Row>
            <p style={{ color: 'rgb(255 255 255 / 0.685' }}>
              Layout primitives for React.
            </p>
            <div />
            <Row>
              <Button href='/get-started'>
                <span>Get started</span>
                <ArrowRight size={20} />
              </Button>
              <Button href='https://github.com/christiankaindl/LYTS'>
                GitHub
              </Button>
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
  {
    name: 'Stack',
    href: '/components/stack',
    icon: <StackIcon />
  },
  {
    name: 'Row',
    href: '/components/row',
    icon: <RowIcon />
  },
  {
    name: 'Clamp',
    href: '/components/clamp',
    icon: <ClampIcon />
  },
  {
    name: 'Columns',
    href: '/components/columns',
    icon: <ColumnsIcon />
  },
  {
    name: 'Grid',
    href: '/components/grid',
    icon: <GridIcon />
  }
]