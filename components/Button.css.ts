import { style } from "@vanilla-extract/css";

export const button = style({
  height: 51,
  fontSize: 15,
  padding: '0px 27px',
  borderRadius: 99,
  border: 'none',
  backgroundColor: 'rgb(255, 255, 255, 0.8)',
  fontWeight: 'bold',
  color: 'black',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: 'rgb(255, 255, 255, 0.95)'
  }
})
