import { mauve, mauveA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const navMenu = style({
  padding: 30,
  paddingBottom: 0,
  backgroundImage: 'linear-gradient(to bottom, rgb(255 255 255 / 0.95) 35%, rgb(255 255 255 / 0.7) 100%)'
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
