import { FunctionComponent } from "react"
import { Row } from "@christiankaindl/lyts"
import * as styles from './Button.css'

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
