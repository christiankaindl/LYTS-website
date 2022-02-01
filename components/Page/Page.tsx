import { FunctionComponent } from 'react'
import { Box, BoxProps } from '@christiankaindl/lyts'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { domain } from 'utils'

interface PageProps {
  title: string
  description?: string
}

const Page: FunctionComponent<PageProps & BoxProps> = function ({
  children,
  title,
  description,
  ...props
}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta property="og:type" content="website"/>
        {title && <meta property="og:title" content={title}/>}
        {description && <meta property="og:description" content={description}/>}
        <meta property="og:url" content={`${domain}/${router.asPath}`}/>
        <meta property="og:image" content={`${domain}/api/og-image?title=${encodeURIComponent(title)}${description ? `&description=${encodeURIComponent(description)}` : ''}`} />
      </Head>
      <Box {...props} orientation='column'>
        {children}
      </Box>
    </>
  )
}

export default Page
