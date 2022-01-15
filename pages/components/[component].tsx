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
      ...(await getComponentPage(params.component))
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  const pages = fs.readdirSync(path.join(process.cwd(), 'examples'))
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => `/components/${fileName.slice(0, -4)}`)
  return {
    paths: pages,
    fallback: 'blocking'
  }
}

const Component: FunctionComponent = function ({ code, meta }) {
  const Content = useMemo(() => getMDXComponent(code), [code])
  const router = useRouter()
  const Icon = iconMappings[router.query.component]
  return (
    <Clamp clamp='750px' style={{ padding: 30 }}>
      <Stack gap={1.5}>
        <Row>
          {Icon !== undefined && <Icon />}
          <h1>{meta.title}</h1>
        </Row>
        <p style={{ fontSize: '1.4em', color: 'rgb(0 0 0 / 0.6)' }}>{meta.description}</p>

        <DebugProvider>
          <Content />
        </DebugProvider>
      </Stack>
    </Clamp>
  )
}

export default withSidebarLayout(Component)
