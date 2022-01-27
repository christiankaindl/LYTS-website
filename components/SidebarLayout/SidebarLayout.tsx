import { Clamp, Columns, Row, Stack } from "@christiankaindl/lyts"
import Page from "components/Page/Page"
import Sidebar from "components/Sidebar/Sidebar"
import { useRouter } from "next/router"
import { FunctionComponent } from "react"
import { iconMappings } from "../Icons/Icons"
import { ComponentDoc } from 'react-docgen-typescript'
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { mauve } from "@radix-ui/colors"

interface Props {
  meta: {
    title: string
    description: string
    category?: string
  }
  docs?: ComponentDoc
}
const SidebarLayout: FunctionComponent<Props> = function ({ children, meta, docs }) {
  const router = useRouter()
  const Icon = iconMappings[router.query.component as keyof typeof iconMappings]

  return (
    <Page asChild>
      <Columns gap={0} ratio='1/3' style={{ minHeight: '100%' }}>
        <Sidebar />
        <Clamp clamp='750px' style={{ padding: 30, alignSelf: 'start' }} asChild>
          <main>
            <Stack gap={1.5}>
              <Row gap={0.75}>
                <Link href='/'>LYTS</Link>
                <ChevronRight size={20} />
                {/* {meta?.category ? `> ${meta?.category}` : ''}&gt;   */}
                {/* <ChevronRight size={20} /> */}
                <span style={{ color: mauve.mauve11 }}>{meta?.title}</span>
              </Row>
              {(docs?.displayName || meta?.title) && (
                <Row>
                  {Icon !== undefined && <Icon />}
                  <h1>{docs?.displayName || meta?.title}</h1>
                </Row>
              )}
              {(docs?.description || meta?.description) && (
                <p style={{ fontSize: '1.3em', color: mauve.mauve11, fontWeight: 300 }}>
                  {docs?.description || meta?.description}
                </p>
              )}
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