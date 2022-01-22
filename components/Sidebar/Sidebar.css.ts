import { mauve } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const sidebar = style({
  padding: 30,
  backgroundColor: mauve.mauve3,
  minWidth: '19em',
  overflowY: 'auto',
  maxHeight: '100vh',
  position: 'sticky',
  top: 0
})
