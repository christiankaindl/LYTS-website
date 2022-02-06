import { Stack, Row } from '@christiankaindl/lyts'
import { mauve } from '@radix-ui/colors'
import { withSidebarLayout } from 'components/SidebarLayout/SidebarLayout'
import { ArrowRight } from 'lucide-react'
import { GetStaticProps } from "next"
import Link from 'next/link'
import { FunctionComponent } from "react"
import { link } from 'styles/index.css'
import { getFilteredExamples } from 'utils/getFilteredExamples'

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      examples: await getFilteredExamples()
    }
  }
}

const Examples: FunctionComponent<any> = function ({ examples }) {
  return (
    <Stack gap={1.5}>
      <h1>Examples</h1>
      <p style={{ fontSize: '1.3em', color: mauve.mauve11 }}>Copy/paste-able snippets for common layouts.</p>

      <div />

      <Stack gap={2.5} bleedLeft={30} bleedRight={30} style={{ padding: 30, backgroundColor: mauve.mauve3, borderRadius: 30 }}>
        {examples.map(({ meta: { title, description, id } }: any, index: number) => {
          return (
            <>
              {index > 0 && <hr />}
              <Link href={`/examples/${id}`} passHref key={id}>
                <Stack asChild style={{ textDecoration: 'none', color: 'black' }}>
                  <a>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Row gap={0.5} className={link} style={{ display: 'inline-flex', alignSelf: 'start' }}>
                      <span>View example</span><ArrowRight size={20} />
                    </Row>
                  </a>
                </Stack>
              </Link>
            </>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default withSidebarLayout(Examples)

/**
 * Renders toggle-buttons to filter examples for each component type
 */
const Filters: FunctionComponent = function () {
  return (
    <Row>
      Filters
    </Row>
  )
}
