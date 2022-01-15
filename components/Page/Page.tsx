import { FunctionComponent } from 'react'
import { Box, BoxProps } from '@christiankaindl/lyts'

const Page: FunctionComponent<BoxProps> = function ({ children, ...props }) {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default Page
