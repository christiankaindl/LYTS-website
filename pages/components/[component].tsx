import { withDocsLayout } from "components/Page/Page"
import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { FunctionComponent, useMemo } from "react"
import { getMDXComponent } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"

export const getStaticProps: GetStaticProps = async function ({ params }) {
  if (params?.component === undefined) {
    return {
      props: {},
      notFound: true
    }
  }
  
  return {
    // revalidate: 60,
    props: {
      ...(await getComponentPage(params.component))
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  const pages = fs.readdirSync(path.join(process.cwd(), 'examples'))
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => `/components/${fileName.slice(0, -4)}`)
  console.log('pages', pages)
  return {
    paths: pages,
    fallback: 'blocking'
  }
}

const Component: FunctionComponent = function ({ code, meta }) {
  const Content = useMemo(() => getMDXComponent(code), [code])
  return (
    <div>
      Component placeholder
      {meta.title}
      <Content />

    </div>
  )
}

export default withDocsLayout(Component)
