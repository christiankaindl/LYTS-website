import { boxStyles, stackStyles, rowStyles, clampStyles, columnsStyles, gridStyles, splitStyles } from "@christiankaindl/lyts"
import { blue, blueA, crimsonA, mauve, mauveA, plumA, redA, sand, tealA, tomatoA, violetA } from "@radix-ui/colors";
import { globalStyle, style } from "@vanilla-extract/css";
import { toClassName } from "utils/toClassName";

globalStyle('html, body', {
  margin: 0,
  fontFamily: 'Inter, Roboto, sans-serif'
})

globalStyle('code', {
  backgroundColor: mauveA.mauveA4
})
globalStyle('pre > code', {
  backgroundColor: mauveA.mauveA3
})

export const article = style({})
globalStyle(`${article} h2`, {
  marginTop: '1.5em'
})

const boxClassName = toClassName(boxStyles.box)
globalStyle(`a:not(${boxClassName})`, {
  color: blue.blue11,
  borderRadius: 4,
  padding: '1px 3px',
  marginLeft: -3,
  marginRight: -3,
  // Get rid of the the "strange image gap": https://dev.to/christiankaindl/the-strange-img-gap-in-html
  display: 'inline-flex'
})

globalStyle(`a:hover:not(${boxClassName})`, {
  backgroundColor: blueA.blueA3
})

globalStyle(`a:active:not(${boxClassName})`, {
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
  outline: `1.5px solid ${mauveA.mauveA6}`,
  padding: 18,
  borderRadius: 15,
  backgroundColor: mauveA.mauveA2
})
globalStyle(`${debug} ${toClassName(boxStyles.box)} > ${toClassName(boxStyles.box)}`, {
  borderRadius: 9
})

globalStyle(`${debug} ${toClassName(stackStyles.stack)}`, {
  // outline: '2px solid #f9c6c6', // Red 6
  outline: `1.5px solid ${redA.redA6}`,
  backgroundImage: `linear-gradient(160deg, ${tomatoA.tomatoA1}, ${crimsonA.crimsonA1})`
})

globalStyle(`${debug} ${toClassName(rowStyles.row)}`, {
  outline: '1.5px solid #f3c6e2',
  backgroundImage: `linear-gradient(160deg, ${crimsonA.crimsonA1}, ${plumA.plumA1})`
})

globalStyle(`${debug} ${toClassName(clampStyles.clamp)}`, {
  outline: '1.5px solid #e3ccf4',
  backgroundImage: `linear-gradient(160deg, ${plumA.plumA1}, ${violetA.violetA1})`
})

globalStyle(`${debug} ${toClassName(columnsStyles.columns)}`, {
  outline: '1.5px solid #c6d4f9',
  backgroundImage: `linear-gradient(160deg, ${violetA.violetA1}, ${blueA.blueA1})`
})

globalStyle(`${debug} ${toClassName(gridStyles.grid)}`, {
  outline: '1.5px solid #aadee6',
  backgroundImage: `linear-gradient(160deg, ${blueA.blueA1}, ${tealA.tealA1})`
})
globalStyle(`${debug} ${toClassName(splitStyles.split)}`, {
  outline: `1px solid ${mauve.mauve8}`,
  padding: 0,
  height: 0,
  position: 'relative'
})
globalStyle(`${debug} ${toClassName(splitStyles.split)}::before, ${debug} ${toClassName(splitStyles.split)}::after`, {
  content: '',
  display: 'block',
  height: 12,
  width: 2,
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
