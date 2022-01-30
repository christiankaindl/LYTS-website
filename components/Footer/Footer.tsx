import { Columns, Row, Stack } from "@christiankaindl/lyts";
import { blue, mauve } from "@radix-ui/colors";
import { useNav } from "hooks/useNav";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import * as styles from './Footer.css'

const Footer: FunctionComponent = function () {
  const nav = useNav()

  return (
    <footer>
      <Columns collapseAt="40em" gap={0} bleedLeft='18px' bleedRight='18px'>
        {!nav.previous.href && <div />}
        {nav.previous.href && (
          <Link href={nav.previous.href} passHref>
            <Row asChild className={styles.navLink}>
              <a>
                <ChevronLeft size={24} color={mauve.mauve11} />
                <Stack gap={0.5}>
                  <span
                    style={{
                      color: mauve.mauve11,
                      fontSize: '0.8em',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 'normal',
                    }}
                  >
                    Previous
                  </span>
                  <b style={{ color: blue.blue10 }}>{nav.previous.title}</b>
                </Stack>
              </a>
            </Row>
          </Link>
        )}

        {nav.next.href && (
          <Link href={nav.next.href} passHref>
            <Row xAlign='end' asChild className={styles.navLink}>
              <a>
                <Stack gap={0.5}>
                  <span
                    style={{
                      color: mauve.mauve11,
                      fontSize: '0.8em',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 'normal',
                    }}
                  >
                    Next
                  </span>
                  <b style={{ color: blue.blue10 }}>{nav.next.title}</b>
                </Stack>
                <ChevronRight size={24} color={mauve.mauve11} />
              </a>
            </Row>
          </Link>
        )}
      </Columns>
    </footer>
  )
}

export default Footer
