import { Row, Stack } from "@christiankaindl/lyts";
import { mauve } from "@radix-ui/colors";
import Link from "next/link";
import { FunctionComponent } from "react";
import Logo from "../Logo/Logo";

const Footer: FunctionComponent = function () {
  return (
    <Stack asChild gap={2} xAlign='center'>
      <footer>
        <Logo />
        <Row xAlign='center' wrap>
          <Link href='https://github.com/christiankaindl/LYTS'>
            <a>Source code</a>
          </Link>
          <Link href='https://github.com/christiankaindl/LYTS/issues'>
            <a>Report issue</a>
          </Link>
          <Link href='https://github.com/christiankaindl/LYTS/discussions'>
            <a>Ask question</a>
          </Link>
        </Row>
        <p style={{ textAlign: 'center', color: mauve.mauve11 }}>
          Made with ❤️ by <Link href='https://twitter.com/christiankaindl'><a>Christian Kaindl</a></Link>
        </p>
      </footer>
    </Stack>
  )
}

export default Footer
