import { Row } from "@christiankaindl/lyts";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import * as styles from './Item.css'

const Item: FunctionComponent<{ title: string, icon?: React.ReactElement, href: string }> = function ({ icon, title, href }) {
  return (
    <Link href={href} passHref>
      <Row className={styles.item} bleedLeft='18px' asChild>
        <a>
          {icon !== undefined && icon}
          <span>{title}</span>
        </a>
      </Row>
    </Link>
  )
}

export default Item
