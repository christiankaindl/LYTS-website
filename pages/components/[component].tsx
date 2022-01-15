import { withDocsLayout } from "components/Page/Page"
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
    <Clamp clamp='750px'>
      <Stack gap={1.5}>
        <Row>
          <Icon />
          <Stack gap={0.25}>
            <h1>{meta.title}</h1>
            <p>{meta.description}</p>
          </Stack>
        </Row>

        <DebugProvider>
          <Content />
        </DebugProvider>
      </Stack>
    </Clamp>
  )
}

export default withDocsLayout(Component)
