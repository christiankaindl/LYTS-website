import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import navigationData from '../navigation-data.json'

/**
 * Get data about the current, next and previous pages, based on the sidebar order.
 */
export function useNav () {
  const router = useRouter()
  const [{ current, next, previous }, setData] = useState(() => getNav(router.asPath))
  useEffect(() => {
    setData(getNav(router.asPath))
  }, [router.asPath])
  return {
    current,
    next,
    previous
  }
}

interface NavObject {
  title?: string
  id?: string
  href?: string
  sectionName?: string
  content?: NavObject[]
}

function getNav (path: string): { current: NavObject, next: NavObject, previous: NavObject } {
  const flatList = navigationData.sections
    .map((item) => {
      const sectionIndex = item.id
      ? {
        title: item.title,
        href: `/${item.id}`
      }
      : null

      if (!item.content) return
      return [
        sectionIndex ?? [],
        item.content.map((content) => {
          return {
            ...content,
            href: `/${content.fullId}`,
            sectionName: item.title
          }
        })
      ]
    })
    .flat(2)

  const currentIndex = flatList.findIndex((item) => item?.href === path)
  return {
    current: flatList[currentIndex] || {},
    next: flatList?.[currentIndex + 1] || {},
    previous: flatList?.[currentIndex - 1] || {}
  }
}
