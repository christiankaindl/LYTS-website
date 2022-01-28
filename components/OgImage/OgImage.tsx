import { Clamp } from "@christiankaindl/lyts";
import { blue } from "@radix-ui/colors";
import { FunctionComponent } from "react";

interface Props {
  title: string
  description?: string
}
const OgImage: FunctionComponent<Props> = function ({
  title,
  description
}) {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      
        <Clamp
          clamp='600px'
          asChild
          yAlign='center'
          style={{
            backgroundColor: blue.blue9,
            height: '100%',
            width: '100%',
            margin: 0,
            fontFamily: 'Inter, sans-serif',
            fontSize: '3em',
            padding: '2em 3em',
            color: 'white',
            boxSizing: 'border-box'
          }}
        >
          <body>
            <span>LYTS</span>
            <h1>{title}</h1>
            {description && (
              <p
                style={{
                  // fontSize: '1.3em',
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
          </body>
        </Clamp>
    </>
  )
}

export default OgImage
