import { Row } from "@christiankaindl/lyts";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import * as styles from './Item.css'

interface ItemProps {
  title: string
  icon?: React.ReactElement
  href: string
  index?: number
}

const Item: FunctionComponent<ItemProps> = function ({ icon, title, href, index }) {
  const router = useRouter()
  const isActive = router.asPath === href
  return (
    <Link href={href} passHref>
      <Row className={`${styles.item} ${isActive ? styles.active : ''}`} bleed='0 18px' asChild>
        <a>
          {icon !== undefined && icon}
          <span>{title}</span>
        </a>
      </Row>
    </Link>
  )
}

export default Item
