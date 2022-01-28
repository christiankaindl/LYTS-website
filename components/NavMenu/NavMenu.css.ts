import { mauve, mauveA } from "@radix-ui/colors";
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
    backgroundImage: 'linear-gradient(to bottom, rgb(255 255 255 / 0.85) 50%, transparent 100%)',
    height: 150,
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1
  }
}, 'nav-menu')

export const trigger = style({
  borderRadius: 9,
  backgroundColor: mauveA.mauveA4,
  padding: '9px 15px',
  height: 45,
  border: 'none',
  backdropFilter: 'blur(10px)',
  fontSize: 15,
  fontWeight: 500,
  fontFamily: 'Inter',
  '@supports': {
    'not (backdrop-filter: blur(1px))': {
      backgroundColor: mauve.mauve4
    }
  }
})
