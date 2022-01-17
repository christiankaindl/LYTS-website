import { Clamp, Columns, Row, Stack } from "@christiankaindl/lyts"
import Page from "components/Page/Page"
import Sidebar from "components/Sidebar/Sidebar"
import { FunctionComponent } from "react"


interface Props {
  title: string
  description: string
}
const SidebarLayout: FunctionComponent<Props> = function ({ children, title, description }) {
  return (
    <Page asChild>
      <Columns gap={0} ratio='1/3' style={{ minHeight: '100%' }}>
        <Sidebar />
        <Clamp clamp='750px' style={{ padding: 30, alignSelf: 'start' }} asChild>
          <main>
            <Stack gap={1.5}>
              <Row>
                {/* {Icon !== undefined && <Icon />} */}
                <h1>{title}</h1>
              </Row>
              <p style={{ fontSize: '1.4em', color: 'rgb(0 0 0 / 0.6)' }}>{description}</p>
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