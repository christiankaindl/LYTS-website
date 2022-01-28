import { FunctionComponent } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import Sidebar from "../Sidebar/Sidebar";
import { ChevronsUpDown, X } from "lucide-react";
import { Row } from "@christiankaindl/lyts";
import * as styles from './NavMenu.css'

const NavMenu: FunctionComponent<{ currentTitle: string }> = function ({ currentTitle  }) {
  return (
    <Row className={styles.navMenu} gap={0.5} xAlign='space-between' yAlign='start'>
      <h2>LYTS</h2>
      <Dialog.Root>
        <Row xAlign='space-between' asChild bleedLeft='6px' bleedRight='6px'>
          <Dialog.Trigger className={styles.trigger}>
            <span>Menu</span>
            <ChevronsUpDown />
          </Dialog.Trigger>
        </Row>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content style={{ position: 'fixed', top: 0, width: '100%', maxHeight: '100vh', overflow: 'auto', overscrollBehavior: 'contain' }} aria-label='LYTS main navigation'>
            <Dialog.Close style={{ position: 'fixed', left: 'unset', right: 30, top: 30 }}>
              <X />  
            </Dialog.Close>
            <Sidebar />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Row>
  )
}

export default NavMenu
