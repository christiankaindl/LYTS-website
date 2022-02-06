import { Row, RowProps } from "@christiankaindl/lyts";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FunctionComponent, memo } from "react";
import { iconMappings } from "../Icons/Icons";
import * as styles from './Item.css'
import { activeStore } from "./Sidebar";

interface ItemProps {
  title: string
  icon?: React.ReactElement
  href: string
  id?: string
}

const Item: FunctionComponent<ItemProps & RowProps> = memo(function Item ({ icon, title, href, id, ...props }) {
  const isActive = activeStore((obj) => obj.id === href)

  // @ts-expect-error
  const Icon = iconMappings[id]
  return (
    <Link href={href} passHref>
      <Row {...props} bleedLeft='15px' bleedRight='15px' asChild className={styles.item} xAlign='space-between'>
        <a>
          {isActive && (
            <motion.div
              layoutId="sidebar-active-item"
              className={styles.activeHighlight}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3
              }}
            />
          )}
          <span>{title}</span>
          {Icon && <Icon small />}
        </a>
      </Row>
    </Link>
  )
})

export default Item
