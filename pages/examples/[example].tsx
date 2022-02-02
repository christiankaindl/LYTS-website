import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { FunctionComponent, useMemo } from "react"
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"
import DebugProvider from "components/DebugProvider/DebugProvider"
import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"
import { mdxBundlerGlobals } from "utils"
import CodeEditor from "@/components/CodeEditor"

export const getStaticProps: GetStaticProps = async function ({ params }) {
  if (params?.example === undefined) {
    return {
      props: {},
      notFound: true
    }
  }

  const bundled = await getComponentPage(`examples/${params.example as string}/story`)
  if (!bundled.meta.title) {
    bundled.meta = {
      ...bundled.meta,
      ...getMDXExport<{ frontmatter: object }, typeof mdxBundlerGlobals>(bundled.code, mdxBundlerGlobals).frontmatter
    }
  }

  return {
    // revalidate: 60,
    props: {
      ...bundled
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  const pages = fs.readdirSync(path.join(process.cwd(), 'docs/examples'))
    .filter((fileName) => !fileName.endsWith('.mdx') && fileName.toLowerCase() !== 'template' && fileName !== '.DS_Store')
    .map((fileName) => `/examples/${fileName}`)
  return {
    paths: pages,
    fallback: false
  }
}

interface Props {
  code: string
  meta: { [key: string]: any }
  examples: any
}

const Component: FunctionComponent<Props> = function ({ code, meta, examples }) {
  const Content = useMemo(() => getMDXComponent(code, mdxBundlerGlobals), [code])

  return (
    <>
      <DebugProvider>
        {/* @ts-expect-error */}
        <Content components={{ CodeEditor }} />
      </DebugProvider>
    </>
  )
}

export default withSidebarLayout(Component)
