import { FunctionComponent } from "react";
import { debug } from '../../styles/index.css'

/**
 * Render all children LYTS components with extra visual cues
 */
const DebugProvider: FunctionComponent<{ className?: string }> = function DebugProvider ({ children, className, ...props }) {
  return (
    <div {...props} className={`${debug} ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default DebugProvider
