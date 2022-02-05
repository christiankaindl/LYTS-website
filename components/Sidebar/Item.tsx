import { Row, RowProps } from "@christiankaindl/lyts";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { iconMappings } from "../Icons/Icons";
import * as styles from './Item.css'

interface ItemProps {
  title: string
  icon?: React.ReactElement
  href: string
  id?: string
}

const Item: FunctionComponent<ItemProps & RowProps> = function ({ icon, title, href, id, ...props }) {
  const router = useRouter()
  const isActive = router.asPath === href
  // @ts-expect-error
  const Icon = iconMappings[id]
  return (
    <Link href={href} passHref>
      <Row {...props} bleedLeft='15px' bleedRight='15px' asChild className={`${styles.item} ${isActive ? styles.active : ''}`} xAlign='space-between'>
        <a>
          <span>{title}</span>
          {Icon && <Icon small />}
        </a>
      </Row>
    </Link>
  )
}

export default Item
