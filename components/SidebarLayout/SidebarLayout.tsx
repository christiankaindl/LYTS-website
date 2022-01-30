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
import { Media } from "@/components/MediaQuery/MediaQuery"
import NavMenu from "../NavMenu/NavMenu"
import * as styles from './SidebarLayout.css'
import ReactMarkdown from 'react-markdown'
import Footer from "../Footer/Footer"
import { useNav } from "hooks/useNav"
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

  const title = docs?.displayName || meta?.title
  const description = docs?.description || meta?.description

  const nav = useNav()

  return (
    <Page asChild title={title} description={description}>
      <Columns gap={0} ratio='1/2' collapseAt="48em" style={{ minHeight: '100%' }}>
        <div className={styles.sidebarWrapper}>
          <Media greaterThanOrEqual="mobile">
            <Sidebar />
          </Media>
          <Media lessThan="mobile">
            <NavMenu />
          </Media>
        </div>
        <Clamp gap={2.5} clamp='750px' style={{ padding: 30, alignSelf: 'start', backgroundColor: mauve.mauve1 }} asChild>
          <main>
            <Stack gap={1.5}>
              <Row gap={0.75}>
                <Link href='/'>Docs</Link>
                <ChevronRight size={20} />
                {nav.current.sectionName && (
                  <>
                    <span>{nav.current.sectionName}</span>
                    <ChevronRight size={20} />
                  </>
                )}
              </Row>
              {title && (
                <Row>
                  {Icon !== undefined && <Icon />}
                  <h1>{title}</h1>
                </Row>
              )}
              {description && (
                <div style={{ fontSize: '1.2em', color: mauve.mauve11, fontWeight: 300 }}>
                  <ReactMarkdown>
                    {description}
                  </ReactMarkdown>
                </div>
              )}
              {children}
            </Stack>
            <hr />
            <Footer />
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
