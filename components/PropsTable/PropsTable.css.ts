import { mauve } from "@radix-ui/colors";
import { globalStyle, style } from "@vanilla-extract/css";

export const propsTable = style({
  border: `1px solid ${mauve.mauve4}`,
  borderRadius: 12,
  borderSpacing: 0
})

globalStyle(`${propsTable} th`, {
  textAlign: 'left',
  padding: '9px 15px',
  fontSize: '0.8em',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 'normal',
  color: mauve.mauve11,
  borderBottom: `1px solid ${mauve.mauve4}`
})

globalStyle(`${propsTable} td, ${propsTable} th`, {
  textAlign: 'left',
  padding: 9,
  borderRight: `1px solid ${mauve.mauve4}`,
  verticalAlign: 'top'
})
globalStyle(`${propsTable} th`, {
  verticalAlign: 'top'
})

globalStyle(`${propsTable} tr:nth-child(odd)`, {
  backgroundColor: mauve.mauve2,
  // borderBottom: `1px solid ${mauve.mauve4}`
})
