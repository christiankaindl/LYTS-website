import { FunctionComponent } from "react";
import { Row, Box } from '@christiankaindl/lyts'

const RowColumns: FunctionComponent = function () {
  return (
    <Row gap={1.5} expandChildren='1/3/0/0'>
      <Box>Column 1</Box>
      <Box>Column 2</Box>
      <Box>Column 3</Box>
      <Box>Column 4</Box>
    </Row>
  )
}

export default RowColumns
