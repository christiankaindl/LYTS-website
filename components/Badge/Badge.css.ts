import { style } from "@vanilla-extract/css";

export const badge = style({
  padding: '3px 12px',
  borderRadius: 99,
  backgroundColor: 'rgb(0 0 0 / 0.08)',
  fontSize: 13.5,
  textDecoration: 'none',
  fontWeight: 500,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgb(0 0 0 / 0.12)'
  }
})
