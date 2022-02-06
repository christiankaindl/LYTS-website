import styles from './index.module.css'
import { StackIcon, RowIcon, ClampIcon, ColumnsIcon, GridIcon, iconMappings } from '@/components/Icons/Icons'
import Button from '@/components/Button'
import { Stack, Row, Clamp } from '@christiankaindl/lyts'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ChevronsDown } from 'lucide-react'
import Page from '@/components/Page/Page'
import Logo from '@/components/Logo/Logo'
import { Tooltip } from '@/components/Tooltip/Tooltip'
import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { mauve } from '@radix-ui/colors'
import StackDoc from '../docs/components/stack/Component.mdx'
import RowDoc from '../docs/components/row/Component.mdx'
import ClampDoc from '../docs/components/clamp/Component.mdx'
import ColumnsDoc from '../docs/components/columns/Component.mdx'
import GridDoc from '../docs/components/grid/Component.mdx'
import { link } from 'styles/index.css'
import CodeEditor from '@/components/CodeEditor'
import Footer from '@/components/Footer/Footer'

function App() {
  return (
    <Page
      className={styles.App}
      title='LYTS—Layout primitives for React'
      description='Build any layout quickly with well-designed composable components'
      ogDescription='Layout primitives for React'
      ogTitle='LYTS'
      titleSuffix=''
    >
      <div>
        <Stack asChild>
          <header className={styles['App-header']}>
            <Logo size='large' accentColor='#0090ff' />
            <div />
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
                <span>Documentation</span>
              </Button>
              <Button href='https://github.com/christiankaindl/LYTS'>
                GitHub
              </Button>
            </Row>
            <ArrowDown size={32} style={{ position: 'relative', bottom: -90, opacity: 0.8 }} />
          </header>
        </Stack>
      </div>

      <Clamp clamp='65ch' gap={1.5} xAlign='center' style={{ textAlign: 'center', backgroundColor: mauve.mauve2, padding: "90px 30px" }}>
        <p style={{ fontSize: '1.5em', color: 'rgb(0 0 0 / 0.6)' }}>Build any layout quickly with well-designed composable components and convenient props.</p>
        <pre>
          <code>
            npm install @christiankaindl/lyts
          </code>
        </pre>
        <Button href='/get-started'>
          <span>Get started</span>
          <ArrowRight size={20} />
        </Button>
      </Clamp>

      <Clamp clamp='750px' asChild gap={3}>
        <main>
          <ComponentShowcase title='Stack' description='Vertically stacked elements, taking up the full width by default. Best nested within other Stacks.'>
            {/* @ts-expect-error */}
            <StackDoc components={{ CodeEditor }} />
          </ComponentShowcase>
          <hr />
          <ComponentShowcase title='Row' description='Horizontally stacked components, with convenience `wrap` and `expand` props. By default, all children are vertically centered and horizontally start-aligned.'>
            {/* @ts-expect-error */}
            <RowDoc components={{ CodeEditor }} />
          </ComponentShowcase>
          <hr />
          <ComponentShowcase title='Clamp' description='Center-constrained component, supporting both horizontal and vertical clamping. Individual children can "opt out" of the clamping with the `<Breakout>` component.'>
            {/* @ts-expect-error */}
            <ClampDoc components={{ CodeEditor }} />
          </ComponentShowcase>
          <hr />
          <ComponentShowcase title='Columns' description='Extrinsicly sized columns, filling the whole available space and wrapping all-at-once when the `collapseAt` value is reached. Space distribution can be customized with the `ratio` prop.'>
            {/* @ts-expect-error */}
            <ColumnsDoc components={{ CodeEditor }} />
          </ComponentShowcase>
          <hr />
          <ComponentShowcase title='Grid' description='Grid layout with with responsive defaults, but also fully customizable with standard CSS grid properties.'>
            {/* @ts-expect-error */}
            <GridDoc components={{ CodeEditor }} />
          </ComponentShowcase>
        </main>
      </Clamp>

      <div style={{ padding: '90px 30px', backgroundColor: mauve.mauve2 }}>
        <Footer />
      </div>
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

const ComponentShowcase: FunctionComponent<{title: string, description: string}> = function ({ title, description, children }) {
  // @ts-expect-error
  const Icon = iconMappings[title.toLowerCase()]
  return (
    <Stack gap={1.5}>
      <Row>
        {Icon !== undefined && <Icon />}
        <h1>{title}</h1>
      </Row>
      {description && (
        <ReactMarkdown
          components={{
            p: ({ children }) => <p style={{ fontSize: '1.2em', color: mauve.mauve11, fontWeight: 300 }}>{children}</p>
          }}
        >
          {description}
        </ReactMarkdown>
      )}
      {children}
      <div>
        <Link href={`/components/${title.toLowerCase()}`} passHref>
          <Row asChild gap={0.5} className={link} style={{ fontSize: '1.2em' }}>
            <a><span>Explore {title}</span><ArrowRight size={20} /></a>
          </Row>
        </Link>
      </div>
    </Stack>
  )
}