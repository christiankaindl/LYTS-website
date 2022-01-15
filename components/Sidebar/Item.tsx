import { Row } from "@christiankaindl/lyts";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import * as styles from './Item.css'

const Item: FunctionComponent<{ title: string, icon?: React.ReactElement, href: string }> = function ({ icon, title, href }) {
  const router = useRouter()
  const isActive = router.asPath === href
  return (
    <Link href={href} passHref>
      <Row className={`${styles.item} ${isActive ? styles.active : ''}`} bleedLeft='18px' asChild>
        <a>
          {icon !== undefined && icon}
          <span>{title}</span>
        </a>
      </Row>
    </Link>
  )
}

export default Item
