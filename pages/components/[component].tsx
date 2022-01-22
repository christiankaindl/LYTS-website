import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { Component as ReactComponent, FunctionComponent, useEffect, useMemo, useState } from "react"
import { getMDXComponent } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"
import DebugProvider from "components/DebugProvider/DebugProvider"
import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"
import { Stack } from "@christiankaindl/lyts"
import { getFilteredExamples } from "utils/getFilteredExamples"
import Link from "next/link"
import { lyts } from "utils"
import { withCustomConfig, PropItem } from 'react-docgen-typescript'

export const getStaticProps: GetStaticProps = async function ({ params }) {
  if (params?.component === undefined) {
    return {
      props: {},
      notFound: true
    }
  }

  const bundled = await getComponentPage(`components/${params.component as string}`)
  // console.log('bundled.meta.title', bundled.meta.title)

  const customParser = withCustomConfig(path.join(process.cwd(), 'node_modules/@christiankaindl/lyts/tsconfig.json'), {
    // @ts-expect-error
    propFilter: (prop: PropItem, component: ReactComponent) => {
      return !prop.parent?.fileName.endsWith('react/index.d.ts')
    },
    savePropValueAsString: true
  })
  const [componentInfo] = customParser.parse(path.join(process.cwd(), `node_modules/@christiankaindl/lyts/src/${bundled.meta.title}/${bundled.meta.title}.tsx`))
  // console.log('Component info: ', JSON.stringify(componentInfo, null, 2))

  return {
    // revalidate: 60,
    props: {
      ...bundled,
      docs: componentInfo,
      examples: await getFilteredExamples([bundled.meta.title])
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  const pages = fs.readdirSync(path.join(process.cwd(), 'docs/components'))
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => `/components/${fileName.slice(0, -4)}`)
  return {
    paths: pages,
    fallback: 'blocking'
  }
}

interface Props {
  code: string
  meta: { [key: string]: any }
  examples: any
  docs: any
}

const Component: FunctionComponent<Props> = function ({ code, meta, examples, docs }) {
  const Content = useMemo(() => getMDXComponent(code, { lyts }), [code])
  const [_examples, setExamples] = useState(() => {
    return examples.map(({ code, meta }: any) => {
      return {
        Component: getMDXComponent(code, { lyts }),
        ...meta
      }
    })
  })
  useEffect(() => {
    setExamples(examples.map(({ code, meta }: any) => {
      return {
        Component: getMDXComponent(code, { lyts }),
        ...meta
      }
    }))
  }, [examples])

  return (
    <>
      <DebugProvider>
        <Content />
      </DebugProvider>
      <div />
      <Stack
        gap={1.5}
        style={{ backgroundColor: 'rgb(0 0 0 / 0.03)', padding: '42px 30px', borderRadius: 36 }}
        bleedLeft='30px'
        bleedRight='30px'
      >
        <h2>Examples using <code>{meta.title}</code></h2>
        {_examples.map(({ Component, title, description, id }: any) => {
          return (
            <Link href={`/examples/${id}`} passHref key={id}>
              <Stack asChild style={{ padding: 30, boxShadow: '0px 4px 25px -10px rgb(0 0 0 / 0.2)', borderRadius: 24, textDecoration: 'none', color: 'black', backgroundColor: 'white' }}>
                <a>
                  <h3>{title}</h3>
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
    </>
  )
}

export default withSidebarLayout(Component)
