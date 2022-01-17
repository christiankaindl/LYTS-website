import { Clamp, Columns, Row, Stack } from "@christiankaindl/lyts"
import Page from "components/Page/Page"
import Sidebar from "components/Sidebar/Sidebar"
import { useRouter } from "next/router"
import { FunctionComponent } from "react"
import { iconMappings } from "../Icons/Icons"

interface Props {
  meta: {
    title: string
    description: string
    category?: string
  }
}
const SidebarLayout: FunctionComponent<Props> = function ({ children, meta }) {
  const router = useRouter()
  const Icon = iconMappings[router.query.component as keyof typeof iconMappings]

  return (
    <Page asChild>
      <Columns gap={0} ratio='1/3' style={{ minHeight: '100%' }}>
        <Sidebar />
        <Clamp clamp='750px' style={{ padding: 30, alignSelf: 'start' }} asChild>
          <main>
            <Stack gap={1.5}>
              <Row>
                Docs {meta?.category ? `> ${meta?.category}` : ''}&gt; {meta?.title} 
              </Row>
              <Row>
                {Icon !== undefined && <Icon />}
                <h1>{meta?.title}</h1>
              </Row>
              <p style={{ fontSize: '1.4em', color: 'rgb(0 0 0 / 0.6)' }}>{meta?.description}</p>
              {children}
            </Stack>
          </main>
        </Clamp>
      </Columns>
    </Page>
  )
}

export default SidebarLayout

export function withSidebarLayout (Component: FunctionComponent<any>) {
  return function WithChildren (props: Props) {
    return (
      <SidebarLayout {...props}>
        <Component {...props} />
      </SidebarLayout>
    )
  }
}