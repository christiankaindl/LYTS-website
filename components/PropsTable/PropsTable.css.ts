import { mauve } from "@radix-ui/colors";
import { globalStyle, style } from "@vanilla-extract/css";

export const propsTable = style({
  border: 'none',
  width: 'calc(100% + 60px)',
  borderRadius: 12,
  marginLeft: -30,
  marginRight: -30,
  padding: '0 30px',
  borderSpacing: 0,
  display: 'block',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  borderCollapse: 'collapse'
})

globalStyle(`${propsTable} th`, {
  fontSize: '0.8em',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 'normal',
  color: mauve.mauve11,
})

globalStyle(`${propsTable} td, ${propsTable} th`, {
  textAlign: 'left',
  padding: '12px 18px 12px 0px',
  // borderRight: `1px solid ${mauve.mauve4}`,
  verticalAlign: 'top',
  whiteSpace: 'initial',
  borderBottom: `1px solid ${mauve.mauve4}`
})
globalStyle(`${propsTable} th`, {
  verticalAlign: 'top'
})

globalStyle(`${propsTable} tr:not(:last-child)`, {
  // backgroundColor: mauve.mauve2,
  // borderBottom: `1px solid ${mauve.mauve4}`
})
