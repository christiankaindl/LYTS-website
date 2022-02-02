import { mauve } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '0.85em',
  borderRadius: 6,
  height: 24,
  padding: '0 6px',
  color: mauve.mauve11,
  ':hover': {
    backgroundColor: mauve.mauve3
  },
  ':active': {
    backgroundColor: mauve.mauve4
  }
})
