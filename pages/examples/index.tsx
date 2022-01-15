import { Stack, Row, Grid } from '@christiankaindl/lyts'
import { withSidebarLayout } from 'components/SidebarLayout/SidebarLayout'
import { GetStaticProps } from "next"
import { FunctionComponent } from "react"

export const getStaticProps: GetStaticProps = async function () {
  // TODO: Get components from /example dir
  return {
    props: {

    }
  }
}

const Examples = function () {
  return (
    <Stack>
      <h1>Examples &amp; Recipes</h1>
      <p>Copy/pasteable snippets for common layouts.</p>
      <Filters />
      <Grid>
        Some stuff
      </Grid>
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
