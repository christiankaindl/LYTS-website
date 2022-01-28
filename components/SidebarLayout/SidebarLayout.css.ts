import { style } from "@vanilla-extract/css";

export const sidebarWrapper = style({
  minWidth: '18.5em',
  maxWidth: '21.5em',
  overflowY: 'auto',
  maxHeight: '100vh',
  position: 'sticky',
  top: 0,
  '@media': {
    '(max-width: 768px)': {
      maxWidth: 'unset',
      minWidth: 'unset',
      overflow: 'visible'
    }
  }
})