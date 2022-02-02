import { FunctionComponent } from "react";
import { debug } from '../../styles/index.css'

const debugClass = !debug.startsWith('styles_debug_') ? `styles_debug_${debug}` : debug

/**
 * Render all children LYTS components with extra visual cues
 */
const DebugProvider: FunctionComponent<{ className?: string } & React.HTMLAttributes<HTMLElement>> = function DebugProvider ({ children, className, ...props }) {
  return (
    <div {...props} className={`${debugClass} ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default DebugProvider
