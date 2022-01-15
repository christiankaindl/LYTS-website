import Sidebar from 'components/Sidebar/Sidebar'
import { FunctionComponent, PropsWithChildren } from 'react'
import { Columns, Box, BoxProps } from '@christiankaindl/lyts'

const Page: FunctionComponent<BoxProps> = function ({ children, ...props }) {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default Page

export function withDocsLayout (Component: FunctionComponent<any>) {
  return (props: PropsWithChildren<{}>) => {
    return (
      <Page asChild>
        <Columns ratio='1/3' style={{ minHeight: '100%' }}>
          <Sidebar />
          <main>
            <Component {...props} />
          </main>
        </Columns>
      </Page>
    )
  }
}
