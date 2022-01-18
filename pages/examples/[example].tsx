import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { FunctionComponent, useMemo } from "react"
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"
import DebugProvider from "components/DebugProvider/DebugProvider"
import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"
import { lyts } from "utils"

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
      ...getMDXExport<{ frontmatter: object }, typeof lyts>(bundled.code, { lyts }).frontmatter
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
    .filter((fileName) => !fileName.endsWith('.mdx') && fileName.toLowerCase() !== 'template')
    .map((fileName) => `/examples/${fileName}`)
  console.log('static example pages: ', pages)
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

  return (
    <>
      <DebugProvider>
        <Content />
      </DebugProvider>
    </>
  )
}

export default withSidebarLayout(Component)
