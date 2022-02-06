import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { Component as ReactComponent, FunctionComponent, useEffect, useMemo, useState } from "react"
import { getMDXComponent } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"
import DebugProvider from "components/DebugProvider/DebugProvider"
import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"
import { Row, Stack } from "@christiankaindl/lyts"
import { getFilteredExamples } from "utils/getFilteredExamples"
import Link from "next/link"
import { lyts, mdxBundlerGlobals } from "utils"
import { withCustomConfig, PropItem } from 'react-docgen-typescript'
import PropsTable from "@/components/PropsTable"
import { mauve } from '@radix-ui/colors'
import { ArrowRight } from "lucide-react"
import { link } from "styles/index.css"
// Import the CodeEditor styles here instead of in CodeEditor.tsx,
// because when only used in MDX files bundled with mdx-bundler the styles are missing from the page
import CodeEditor from "@/components/CodeEditor"
// import '@/components/CodeEditor/CodeEditor.css'

export const getStaticProps: GetStaticProps = async function ({ params }) {
  if (params?.component === undefined) {
    const page = await getComponentPage(`components/index`)
    // console.log('page', page)
    return {
      props: {
        ...page
      },
      // notFound: true
    }
  }

  const [
    story,
    component
  ] = await Promise.all([
    getComponentPage(`components/${params.component as string}/${params.component as string}`),
    getComponentPage(`components/${params.component as string}/Component`)
  ])

  const customParser = withCustomConfig(path.join(process.cwd(), 'node_modules/@christiankaindl/lyts/tsconfig.json'), {
    // @ts-expect-error
    propFilter: (prop: PropItem, component: ReactComponent) => {
      return !prop.parent?.fileName.endsWith('react/index.d.ts')
    },
    savePropValueAsString: true,
    shouldRemoveUndefinedFromOptional: true
  })
  const [componentInfo] = customParser.parse(path.join(process.cwd(), `node_modules/@christiankaindl/lyts/src/${story.meta.title}/${story.meta.title}.tsx`))
  const examples = await getFilteredExamples([story.meta.title])

  return {
    props: {
      ...story,
      component,
      docs: componentInfo,
      examples
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  const pages = fs.readdirSync(path.join(process.cwd(), 'docs/components'))
    .filter((fileName) => fileName !== 'index.mdx')
    .map((dirName) => `/components/${dirName}`)
  return {
    paths: pages,
    fallback: false
  }
}

interface Props {
  code: string
  meta: { [key: string]: any }
  component: any
  examples: any
  docs: any
}

const Component: FunctionComponent<Props> = function ({ code, meta, examples = [], docs, component }) {
  const Story = useMemo(() => getMDXComponent(code, mdxBundlerGlobals), [code])
  const Component = useMemo(() => component?.code && getMDXComponent(component.code, mdxBundlerGlobals), [component?.code])
  const [_examples, setExamples] = useState<[]>(() => {
    return examples.map(({ code, meta }: any) => {
      return {
        Component: getMDXComponent(code, mdxBundlerGlobals),
        ...meta
      }
    })
  })
  useEffect(() => {
    setExamples(examples.map(({ code, meta }: any) => {
      return {
        Component: getMDXComponent(code, mdxBundlerGlobals),
        ...meta
      }
    }))
  }, [examples])

  return (
    <>
      {Component && <Component components={{ CodeEditor }} />}
      {docs && <PropsTable {...docs} />}
      {/* @ts-expect-error */}
      <Story components={{ CodeEditor, Link }} />
      {_examples && _examples?.length > 0 && (
        <>
          <div />
          <h2>Examples using <code>{meta.title}</code></h2>
          <Stack
            gap={2.5}
            style={{ backgroundColor: mauve.mauve2, padding: '30px 30px', borderRadius: 30 }}
            bleedLeft='30px'
            bleedRight='30px'
          >
            {_examples.map(({ Component, title, description, id }: any, index) => {
              return (
                <>
                  {index > 0 && <hr />}
                  <Link href={`/examples/${id}`} passHref key={id}>
                    <Stack asChild style={{ textDecoration: 'none', color: 'black' }}>
                      <a>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Row gap={0.5} className={link} style={{ display: 'inline-flex', alignSelf: 'start' }}>
                          <span>View full example</span><ArrowRight size={20} />
                        </Row>
                      </a>
                    </Stack>
                  </Link>
                </>
              )
            })}
          </Stack>
      </>
      )}
    </>
  )
}

export default withSidebarLayout(Component)
