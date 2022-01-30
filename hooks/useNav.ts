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
  // Fun way of getting the last element (array.at(-1) would be nicer, but isn't supported yet)
  // See https://github.com/tc39/proposal-relative-indexing-method#existing-methods
  const id = path.split('/').slice(-1)[0]
  const flatList = navigationData.sections
    .map((item) => {
      if (item.content) return item.content.map((content) => {
        return {
          ...content,
          href: `/${item.id ? `${item.id}/` : ''}${content.id}`,
          sectionName: item.title
        }
      })
      return {
        ...item,
        href: `/${item.id}`
      }
    })
    .flat()
  
  const currentIndex = flatList.findIndex((item) => item.id === id)
  return {
    current: flatList[currentIndex] || {},
    next: flatList?.[currentIndex + 1] || {},
    previous: flatList?.[currentIndex - 1] || {}
  }
}
