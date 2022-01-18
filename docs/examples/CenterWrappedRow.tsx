import { FunctionComponent } from "react";
import { Row, Clamp } from '@christiankaindl/lyts'

const CenterWrappedRow: FunctionComponent = function () {
  return (
    <Clamp clamp='380px'>
      <Row wrap>
        <Pill>Published 01.01.1970</Pill>
        <Pill>Christian Kaindl</Pill>
        <Pill>JavaScript</Pill>
        <Pill>CSS</Pill>
        <Pill>React</Pill>
        <Pill>package</Pill>
        <Pill>layout</Pill>
        <button>Share</button>
      </Row>
    </Clamp>
  )
}

export default CenterWrappedRow

const Pill: FunctionComponent = ({ children }) => {
  return (
    <span style={{ borderRadius: 99, backgroundColor: 'rgb(0, 0, 0, .08)', padding: '4px 9px' }}>
      {children}
    </span>
  )
}
