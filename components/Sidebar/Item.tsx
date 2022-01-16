import { Row } from "@christiankaindl/lyts";
import { motion } from "framer-motion";
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
      <Row className={`${styles.item} ${isActive ? styles.active : ''}`} bleedLeft='18px' asChild>
        <a>
          {icon !== undefined && (
            <motion.div layoutId={`icon-${index}`} style={{ zIndex: 2, position: 'relative' }} transition={{ delay: (index ?? 0) * 0.04, type: 'spring', bounce: 0.1, duration: 0.4 }}>
              {icon}
            </motion.div>
          )}
          <span>{title}</span>
        </a>
      </Row>
    </Link>
  )
}

export default Item
