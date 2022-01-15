import { withSidebarLayout } from "components/SidebarLayout/SidebarLayout"
import { GetStaticPaths, GetStaticProps } from "next"
import { FunctionComponent } from "react"

export const getStaticProps: GetStaticProps = async function ({ params }) {
  // TODO: Get static paths based on components in /example dir
  return {
    notFound: response === undefined,
    // revalidate: 60,
    props: {
      data: response
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  // TODO: Get static paths based on components in /example dir
  return {
    paths: [],
    fallback: 'blocking'
  }
}

const Example: FunctionComponent = function () {
  return (
    
  )
}

export default withSidebarLayout(Example)
