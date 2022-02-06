import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { FunctionComponent, useMemo } from "react"
import { getMDXComponent } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"
import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"
import Link from "next/link"
import { mdxBundlerGlobals } from "utils"
import CodeEditor from "@/components/CodeEditor"

export const getStaticProps: GetStaticProps = async function ({ params }) {
  if (params?.guide === undefined) {
    const page = await getComponentPage(`guides/index`)
    return {
      props: {
        ...page
      }
    }
  }

  const story = await getComponentPage(`guides/${params.guide as string}`)

  return {
    props: {
      ...story
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  const pages = fs.readdirSync(path.join(process.cwd(), 'docs/guides'))
    .filter((fileName) => fileName !== 'index.mdx')
    .map((dirName) => `/guides/${dirName.split('.')[0]}`)
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

const Component: FunctionComponent<Props> = function ({ code, meta }) {
  const Story = useMemo(() => getMDXComponent(code, mdxBundlerGlobals), [code])

  return (
    <>
      {/* @ts-expect-error */}
      <Story components={{ CodeEditor, Link }} />
    </>
  )
}

export default withSidebarLayout(Component)
