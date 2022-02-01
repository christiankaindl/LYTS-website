import { style } from "@vanilla-extract/css";

export const logo = style({
  letterSpacing: '0.1em',
  fontWeight: 'bold'
})

export const small = style({
  height: '2rem'
})
export const large = style({
  height: '4.5rem'
})
export const xlarge = style({
  height: '8rem'
})

export const why = style({
  transform: 'translateY(-6px) translateX(-3px) rotate(-10deg)',
  display: 'inline-block',
  padding: '3px 8px 2px',
  letterSpacing: 0,
  lineHeight: 1.2,
  borderRadius: '7px',
  fontSize: '0.8em',
  backgroundColor: "currentcolor"
})
