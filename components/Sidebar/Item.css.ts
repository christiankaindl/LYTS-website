import { mauve } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const item = style({
  borderRadius: 9,
  padding: '3px 15px',
  minHeight: 40,
  color: mauve.mauve12,
  fontSize: '0.95em',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'background-color 80ms linear',
  position: 'relative',
  ':hover': {
    backgroundColor: 'rgb(0 0 0 / 0.08)',
    transition: 'none'
  }
})

export const activeHighlight = style({
  backgroundColor: 'rgb(0 0 0 / 0.08)',
  borderRadius: 9,
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%'
})