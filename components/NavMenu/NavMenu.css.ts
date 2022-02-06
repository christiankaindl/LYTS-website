import { blue, mauve, mauveA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const navMenu = style({
  padding: 30,
  position: 'relative',
  paddingBottom: 0,
  // Use a pseudo-element here so the gradient can extend beyond the actual size of the navbar
  '::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    backgroundImage: 'linear-gradient(to bottom, rgb(255 255 255 / 0.9) 50%, rgb(255 255 255 / 0) 100%)',
    height: 130,
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    pointerEvents: 'none'
  }
}, 'nav-menu')

export const trigger = style({
  borderRadius: 9,
  backgroundColor: 'transparent',
  color: mauve.mauve11,
  padding: '9px 15px',
  marginTop: -5,
  marginRight: -15,
  height: 45,
  border: 'none',
  fontSize: 15,
  fontWeight: 500,
  fontFamily: 'Inter',
})

export const smallButton = style({
  borderRadius: 99,
  backgroundColor: mauveA.mauveA4,
  color: mauve.mauve12,
  height: 36,
  width: 36,
  border: 'none',
  backdropFilter: 'blur(10px)',
  fontSize: 15,
  fontWeight: 500,
  fontFamily: 'Inter',
  zIndex: 2,
  '@supports': {
    'not (backdrop-filter: blur(1px))': {
      backgroundColor: mauve.mauve4
    }
  }
})
