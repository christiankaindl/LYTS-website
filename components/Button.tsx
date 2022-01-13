import { FunctionComponent } from "react"
import { Row } from "@christiankaindl/lyts"
import * as styles from './Button.css'
// Add this in your component file
require('react-dom');
if (typeof window !== 'undefined') {
  // @ts-expect-error
  window.React2 = require('react');
  // @ts-expect-error
  console.log('react2', window.React2)
  // @ts-expect-error
  console.log('react1', window.React1)
  // @ts-expect-error
  console.log(window.React1 === window.React2);

}
console.log('styles', styles)
console.log('Row', Row)

const Button: FunctionComponent = function Button ({ children }) {
  return (
    <Row asChild gap={0.75}>
      <button className={styles.button}>
        {children}
      </button>
    </Row>
  )
}

export default Button
