import { boxStyles, stackStyles, rowStyles, clampStyles, columnsStyles, gridStyles, splitStyles } from "@christiankaindl/lyts"
import { blue, blueA, crimsonA, cyanA, indigoA, mauve, mauveA, pinkA, plumA, purpleA, redA, sand, tealA, tomatoA, violetA } from "@radix-ui/colors";
import { globalStyle, style } from "@vanilla-extract/css";
import { toClassName } from "utils/toClassName";

globalStyle('html, body', {
  margin: 0,
  fontFamily: 'Inter, Roboto, sans-serif'
})

globalStyle('code', {
  backgroundColor: mauveA.mauveA3,
  fontWeight: 400
})
globalStyle('pre > code', {
  backgroundColor: mauveA.mauveA2,
  marginLeft: -18,
  marginRight: -18
})

globalStyle('hr', {
  border: 'none',
  height: '1px !important',
  backgroundColor: mauveA.mauveA4,
  width: '100%'
})

globalStyle(`main h2`, {
  marginTop: '1.5em !important',
  fontWeight: 500
})

export const link = style({})
const boxClassName = toClassName(boxStyles.box)
// Add default link styles, but only for links which are not a LYTS component (they are typically styled separately and don't need the default link styling)
globalStyle(`a:not(${boxClassName}), ${link}`, {
  color: blue.blue11,
  borderRadius: 4,
  padding: '1px 3px',
  marginLeft: -3,
  marginRight: -3,
  // Get rid of the the "strange image gap": https://dev.to/christiankaindl/the-strange-img-gap-in-html
  display: 'inline-flex'
})

globalStyle(`a:hover:not(${boxClassName}), ${link}:hover`, {
  backgroundColor: blueA.blueA3
})

globalStyle(`a:active:not(${boxClassName}), ${link}:active`, {
  backgroundColor: blueA.blueA4
})

globalStyle('p', {
  lineHeight: 1.5,
  maxWidth: '65ch',
  color: mauve.mauve12
})

export const debug = style({
  display: 'contents'
})
globalStyle(`${debug} ${toClassName(boxStyles.box)}`, {
  border: `1.5px solid transparent`,
  padding: 18,
  minHeight: 48,
  borderRadius: 15,
  backgroundImage: `linear-gradient(rgb(255 255 255 / 1), rgb(255 255 255 / 1))`
})
globalStyle(`${debug} ${toClassName(boxStyles.box)}:not(${toClassName(stackStyles.stack)}):not(${toClassName(rowStyles.row)}):not(${toClassName(clampStyles.clamp)}):not(${toClassName(columnsStyles.columns)}):not(${toClassName(gridStyles.grid)})`, {
  boxShadow: 'rgb(0 0 0 / 0.15) 0 3px 15px -5px, rgb(0 0 0 / 0.04) 0 0 0 1px',
})
globalStyle(`${debug} ${toClassName(boxStyles.box)} > ${toClassName(boxStyles.box)}`, {
  borderRadius: 12
})

globalStyle(`${debug} ${toClassName(stackStyles.stack)}`, {
  borderColor: redA.redA4,
  backgroundImage: `linear-gradient(160deg, ${tomatoA.tomatoA2}, ${crimsonA.crimsonA2})`
})

globalStyle(`${debug} ${toClassName(rowStyles.row)}`, {
  borderColor: pinkA.pinkA4,
  backgroundImage: `linear-gradient(160deg, ${crimsonA.crimsonA2}, ${plumA.plumA2})`
})

globalStyle(`${debug} ${toClassName(clampStyles.clamp)}`, {
  borderColor: purpleA.purpleA4,
  backgroundImage: `linear-gradient(160deg, ${plumA.plumA2}, ${violetA.violetA2})`
})

globalStyle(`${debug} ${toClassName(columnsStyles.columns)}`, {
  borderColor: indigoA.indigoA4,
  backgroundImage: `linear-gradient(160deg, ${violetA.violetA2}, ${blueA.blueA2})`
})

globalStyle(`${debug} ${toClassName(gridStyles.grid)}`, {
  borderColor: cyanA.cyanA4,
  backgroundImage: `linear-gradient(160deg, ${blueA.blueA2}, ${tealA.tealA2})`
})
globalStyle(`${debug} ${toClassName(splitStyles.split)}`, {
  border: `1px solid ${mauve.mauve8}`,
  padding: 0,
  height: 0,
  position: 'relative'
})
globalStyle(`${debug} ${toClassName(splitStyles.split)}::before, ${debug} ${toClassName(splitStyles.split)}::after`, {
  content: '',
  display: 'block',
  height: 12,
  width: 1,
  backgroundColor: mauve.mauve8,
  left: -1,
  top: -6,
  position: 'absolute'
})
globalStyle(`${debug} ${toClassName(splitStyles.split)}::after`, {
  left: 'initial',
  right: -1
})

export const nav = style([debug, {
  borderRadius: 24,
  justifyContent: 'center',
  backgroundColor: 'rgb(255, 255, 255, 0.25)',
  // backdropFilter: 'blur(10px)',
  boxShadow: '0 5px 24px -7px rgb(0 0 0 / 0.1)',
  padding: 18
}])

globalStyle('table', {
  border: 'none',
  width: 'calc(100% + 60px)',
  borderSpacing: 0,
  display: 'block',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  borderCollapse: 'collapse'
})

globalStyle(`table th`, {
  fontSize: '0.8em',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 'normal',
  color: mauve.mauve11,
})

globalStyle(`table td, table th`, {
  textAlign: 'left',
  padding: '12px 18px 12px 0px',
  verticalAlign: 'top',
  whiteSpace: 'initial',
  borderBottom: `1px solid ${mauve.mauve4}`
})
globalStyle(`table th`, {
  verticalAlign: 'top'
})
