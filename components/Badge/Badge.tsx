import { FunctionComponent } from "react";
import { Row } from '@christiankaindl/lyts'
import * as styles from './Badge.css'
import Link from "next/link";

const Badge: FunctionComponent<{ href: string }> = function ({ children, href }) {
  return (
    <Link href={href} passHref>
      <Row className={styles.badge} asChild>
        <a>{children}</a>
      </Row>
    </Link>
  )
}

export default Badge
