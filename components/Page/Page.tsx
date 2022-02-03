import { FunctionComponent } from 'react'
import { Box, BoxProps } from '@christiankaindl/lyts'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { domain } from 'utils'

interface PageProps {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  robots?: 'noindex'
  titleSuffix?: string
}

const Page: FunctionComponent<PageProps & BoxProps> = function ({
  children,
  title,
  description,
  ogTitle = title,
  ogDescription = description,
  robots,
  titleSuffix = ' | LYTS',
  ...props
}) {
  const router = useRouter()

  title = `${title}${titleSuffix}`
  const image = `${domain}/api/og-image?title=${encodeURIComponent(title)}${description ? `&description=${encodeURIComponent(description)}` : ''}${router.pathname === '/' ? `&home=1` : ''}`
  const url = `${domain}${router.asPath}`

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name='description' content={description} />}

        <meta property='og:type' content='website' />
        <meta property="og:url" content={url}/>
        {ogTitle && <meta property='og:title' content={ogTitle} />}
        {ogDescription && <meta property='og:description' content={ogDescription} />}
        <meta property="og:image" content={image} />

        {ogTitle && <meta itemProp='name' content={ogTitle} />}
        {ogDescription && <meta itemProp='description' content={ogDescription} />}
        {image && <meta itemProp='image' content={image} />}

        {robots && <meta name='robots' content={robots} />}

        <meta property='twitter:site' content='@christiankaindl' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        {ogTitle && <meta property='twitter:title' content={ogTitle} />}
        {ogDescription && <meta property='twitter:description' content={ogDescription} />}
        {image && <meta property='twitter:image' content={image} />}
      </Head>
      <Box {...props} orientation='column'>
        {children}
      </Box>
    </>
  )
}

export default Page
