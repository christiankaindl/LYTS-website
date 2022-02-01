import { keyframes, style } from "@vanilla-extract/css";

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(3px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const content = style({
  padding: '6px 9px',
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow: 'rgb(0 0 0 / 0.2) 0px 4px 20px -4px, rgb(0 0 0 / 0.2) 0px 0px 4px 0px',
  fontSize: '0.85em',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  selectors: {
    '&[data-state="delayed-open"]': {
      animationName: slideUpAndFade
    }
  }
})
