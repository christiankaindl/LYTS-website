import { mauve } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const item = style({
  borderRadius: 9,
  padding: '3px 15px',
  minHeight: 42,
  color: mauve.mauve12,
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'background-color 80ms linear',
  ':hover': {
    backgroundColor: 'rgb(0 0 0 / 0.08)',
    transition: 'none'
  }
})

export const active = style({
  backgroundColor: 'rgb(0 0 0 / 0.08)',
  fontWeight: 700,
  ':hover': {
    backgroundColor: 'rgb(0 0 0 / 0.12)'
  }
})