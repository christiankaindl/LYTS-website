import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { FunctionComponent, useMemo, useState } from "react"
import { getMDXComponent } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"
import DebugProvider from "components/DebugProvider/DebugProvider"
import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"
import { Stack } from "@christiankaindl/lyts"
import { getFilteredExamples } from "utils/getFilteredExamples"
import Link from "next/link"
import { lyts } from "utils"

export const getStaticProps: GetStaticProps = async function ({ params }) {
  if (params?.component === undefined) {
    return {
      props: {},
      notFound: true
    }
  }

  const bundled = await getComponentPage(`components/${params.component as string}`)
  return {
    // revalidate: 60,
    props: {
      ...bundled,
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
}

const Component: FunctionComponent<Props> = function ({ code, meta, examples }) {
  const Content = useMemo(() => getMDXComponent(code, { lyts }), [code])
  const [_examples] = useState(() => {
    return examples.map(({ code, meta }: any) => {
      return {
        Component: getMDXComponent(code, { lyts }),
        ...meta
      }
    })
  })

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
