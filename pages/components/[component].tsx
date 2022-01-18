import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs'
import { FunctionComponent, useMemo } from "react"
import { getMDXComponent } from 'mdx-bundler/client'
import { getComponentPage } from "utils/getComponentPage"
import { iconMappings } from "components/Icons/Icons"
import { useRouter } from "next/router"
import { Clamp, Row, Stack } from "@christiankaindl/lyts"
import DebugProvider from "components/DebugProvider/DebugProvider"
import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"

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
      ...(await getComponentPage(params.component as string))
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
}

const Component: FunctionComponent<Props> = function ({ code, meta }) {
  const Content = useMemo(() => getMDXComponent(code), [code])

  return (
    <DebugProvider>
      <Content />
    </DebugProvider>
  )
}

export default withSidebarLayout(Component)
