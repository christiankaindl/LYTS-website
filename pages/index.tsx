import styles from './index.module.css'
import { StackIcon, RowIcon, ClampIcon, ColumnsIcon, GridIcon } from '@/components/Icons/Icons'
import Button from '@/components/Button'
import { Stack, Row, Clamp } from '@christiankaindl/lyts'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Page from '@/components/Page/Page'
import Logo from '@/components/Logo/Logo'
import { Tooltip } from '@/components/Tooltip/Tooltip'

function App() {
  return (
    <Page className={styles.App} title='LYTS' description='Layout primitives for React.'>
      <div>
        <Stack asChild>
          <header className={styles['App-header']}>
            <h1>
              <Logo size='large' accentColor='#0090ff' />
            </h1>
            <Row style={{ padding: '0 2em' }} wrap xAlign='center'>
              {icons.map(({ name, icon, href }) => {
                return (
                  <Tooltip delayDuration={0} key={name}>
                      <Link href={href} passHref>
                        <Tooltip.Trigger asChild>
                          <a aria-label={name}>{icon}</a>
                        </Tooltip.Trigger>
                      </Link>
                    <Tooltip.Content>
                      {name}
                    </Tooltip.Content>
                  </Tooltip>
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
      <Clamp clamp='65ch' asChild gap={1.5} xAlign='center' style={{ textAlign: 'center' }}>
        <main>
          <p style={{ fontSize: '1.7em', color: 'rgb(0 0 0 / 0.6)' }}>Build any layout quickly with well-designed composable components and convenient props.</p>
          <pre>
            <code>
              npm install @christiankaindl/lyts
            </code>
          </pre>
          <Button href='/get-started'>
            <span>Get started</span>
            <ArrowRight size={20} />
          </Button>
        </main>
      </Clamp>
    </Page>
  )
}

export default App

export const icons = [
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