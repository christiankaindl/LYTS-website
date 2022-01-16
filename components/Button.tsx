import { FunctionComponent } from "react"
import { Row } from "@christiankaindl/lyts"
import * as styles from './Button.css'
import Link from "next/link"

const Button: FunctionComponent<{ href: string }> = function Button ({ children, href, ...props }) {
  return (
    <Link href={href} passHref {...props}>
      <Row asChild gap={0.75}>
        <a className={styles.button}>
          {children}
        </a>
      </Row>
    </Link>
  )
}

export default Button
