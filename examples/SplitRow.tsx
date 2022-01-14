import { FunctionComponent } from "react";
import { Row, Split } from '@christiankaindl/lyts'

const SplitRow: FunctionComponent = function () {
  return (
    <Row gap={1.5}>
      <b>
        Awesome toolbar
      </b>
      <button>
        button 1
      </button>
      <button>
        button 2
      </button>
      {/* <Split /> */}
      <button>A button</button>
    </Row>
  )
}

export default SplitRow
