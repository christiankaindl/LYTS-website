import DebugProvider from '@/components/DebugProvider/DebugProvider'
import { Stack, Row, Grid } from '@christiankaindl/lyts'
import { mauve } from '@radix-ui/colors'
import { withSidebarLayout } from 'components/SidebarLayout/SidebarLayout'
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client'
import { GetStaticProps } from "next"
import Link from 'next/link'
import { FunctionComponent, useState } from "react"
import { lyts } from 'utils'
import { getFilteredExamples } from 'utils/getFilteredExamples'

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      examples: await getFilteredExamples()
    }
  }
}

const Examples: FunctionComponent<any> = function ({ examples }) {
  const [_examples] = useState(() => {
    return examples.map(({ code, meta }: any) => {
      return {
        Component: getMDXComponent(code, { lyts }),
        ...meta
      }
    })
  })

  return (
    <Stack gap={1.5}>
      <h1>Examples</h1>
      <p style={{ fontSize: '1.3em', color: mauve.mauve11 }}>Copy/paste-able snippets for common layouts.</p>
      <p>All components come unstyled and only add CSS necessary for layout. Examples focus on how to achieve different layouts by composing the available components. Also, <a href='https://github.com/christiankaindl/LYTS-website/'>check out the source code for this very site</a>, which makes extensive use of all the components.</p>

      <div />

      <Stack>
        {_examples.map(({ Component, title, description, id }: any) => {
          return (
            <Link href={`/examples/${id}`} passHref key={id}>
              <Stack asChild style={{ padding: 30, boxShadow: '0px 4px 25px -10px rgb(0 0 0 / 0.2)', borderRadius: 30, textDecoration: 'none', color: 'black' }}>
                <a>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <DebugProvider>
                    <Component />
                  </DebugProvider>
                </a>
              </Stack>
            </Link>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default withSidebarLayout(Examples)

/**
 * Renders toggle-buttons to filter examples for each component type
 */
const Filters: FunctionComponent = function () {
  return (
    <Row>
      Filters
    </Row>
  )
}
