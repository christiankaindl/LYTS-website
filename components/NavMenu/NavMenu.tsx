import { FunctionComponent, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import Sidebar from "../Sidebar/Sidebar";
import { ChevronsUpDown, X } from "lucide-react";
import { Box, Row } from "@christiankaindl/lyts";
import * as styles from './NavMenu.css'
import Logo from "../Logo/Logo";
import Link from "next/link";

const NavMenu: FunctionComponent = function () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Row className={styles.navMenu} gap={0.5} xAlign='space-between' yAlign='start'>
      <Link href='/'>
        <a><Logo /></a>
      </Link>
      <Dialog.Root open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
        <Row xAlign='space-between' asChild bleedLeft='6px' bleedRight='6px'>
          <Dialog.Trigger className={styles.trigger}>
            <span>Menu</span>
            <Box xAlign='center' yAlign='center' className={styles.smallButton}>
              <ChevronsUpDown />
            </Box>
          </Dialog.Trigger>
        </Row>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content onClick={() => setIsOpen(false)} style={{ position: 'fixed', top: 0, width: '100%', maxHeight: '100vh', overflow: 'auto', overscrollBehavior: 'contain' }} aria-label='LYTS main navigation'>
            <Dialog.Close style={{ position: 'fixed', left: 'unset', right: 30, top: 30 }} asChild>
              <Box xAlign='center' yAlign='center' className={styles.smallButton}>
                <X />
              </Box>
            </Dialog.Close>
            <Sidebar />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Row>
  )
}

export default NavMenu
