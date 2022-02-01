import { iconMappings } from "@/components/Icons/Icons";
import Logo from "@/components/Logo/Logo";
import { Clamp, Row, Stack } from "@christiankaindl/lyts";
import { blue } from "@radix-ui/colors";
import { GetServerSideProps } from "next";
import { icons } from "pages";
import { FunctionComponent } from "react";

interface Props {
  title: string
  description?: string
  home?: boolean
}

export const getServerSideProps: GetServerSideProps = async function ({ query }) {
  const { title, description, home } = query
  return {
    props: {
      title,
      description,
      home: Boolean(home)
    }
  }
}

const OgImage: FunctionComponent<Props> = function ({
  title,
  description,
  home
}) {
  // @ts-expect-error
  const Icon = iconMappings?.[title?.toLowerCase()]

  return (
    // TODO: Set robot='noindex
    <Clamp
      clamp='900px'
      yAlign='center'
      style={{
        backgroundColor: blue.blue9,
        height: '100%',
        width: '100%',
        margin: 0,
        fontFamily: 'Inter, sans-serif',
        fontSize: '2.5em',
        // padding: '2em 3em',
        color: 'white',
        boxSizing: 'border-box'
      }}
    >
      <Stack gap={home ? 1.65 : 0.8} xAlign={home ? 'center' : undefined} style={{ textAlign: home ? 'center' : undefined }}>
        <Logo size={home ? 'xlarge' : 'large'} accentColor='#0090ff' />
        {!home && (
          <Row gap={2}>
            <h1 style={{ fontSize: '3em' }}>{title}</h1>
            {Icon && <div style={{ transform: 'scale(2)' }}><Icon /></div>}
          </Row>
        )}
        {home && (
          <Row gap={0.5} style={{ transform: 'scale(2)' }}>
            {icons.map(({ icon }) => {
              return icon
            })}
          </Row>
        )}
        {description && (
          <p
            style={{
              fontSize: home ? '1.7em' : '1.2em',
              color: 'white',
              opacity: 0.8,
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              display: '-webkit-box'
            }}
          >
            {description}
          </p>
        )}
      </Stack>
    </Clamp>
  )
}

export default OgImage
