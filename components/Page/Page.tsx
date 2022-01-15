import Sidebar from 'components/Sidebar/Sidebar'
import { FunctionComponent, PropsWithChildren } from 'react'
import { Columns, Box } from '@christiankaindl/lyts'

const Page: FunctionComponent = function ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

export default Page

export function withDocsLayout (Component: FunctionComponent<any>) {
  return (props: PropsWithChildren<{}>) => {
    return (
      <Page>
        <Columns ratio='1/3'>
          <Sidebar />
          <main>
            <Component {...props} />
          </main>
        </Columns>
      </Page>
    )
  }
}
