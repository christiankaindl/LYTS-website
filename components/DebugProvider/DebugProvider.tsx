import { FunctionComponent } from "react";
import { debug } from '../../styles/index.css'

/**
 * Render all children LYTS components with extra visual cues
 */
const DebugProvider: FunctionComponent = function DebugProvider ({ children }) {
  return (
    <div className={debug}>
      {children}
    </div>
  )
}

export default DebugProvider
