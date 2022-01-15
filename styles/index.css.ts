import { boxStyles, stackStyles, rowStyles, clampStyles, columnsStyles, gridStyles } from "@christiankaindl/lyts"
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle('html, body', {
  margin: 0,
  fontFamily: 'sans-serif'
})

export const debug = style({
  display: 'contents'
})
globalStyle(`${debug} ${toClassName(boxStyles.box)}`, {
  outline: '2px solid rgba(0, 0, 0, .2)',
  padding: 18,
  borderRadius: 12,
  backgroundColor: 'rgb(0 0 0 / 0.01)'
})

globalStyle(`${debug} ${toClassName(stackStyles.stack)}`, {
  outline: '2px solid #f9c6c6'
})

globalStyle(`${debug} ${toClassName(rowStyles.row)}`, {
  outline: '2px solid #f3c6e2'
})

globalStyle(`${debug} ${toClassName(clampStyles.clamp)}`, {
  outline: '2px solid #e3ccf4'
})

globalStyle(`${debug} ${toClassName(columnsStyles.columns)}`, {
  outline: '2px solid #c6d4f9'
})

globalStyle(`${debug} ${toClassName(gridStyles.grid)}`, {
  outline: '2px solid #aadee6'
})

export const nav = style([debug, {
  borderRadius: 24,
  justifyContent: 'center',
  backgroundColor: 'rgb(255, 255, 255, 0.25)',
  // backdropFilter: 'blur(10px)',
  boxShadow: '0 5px 24px -7px rgb(0 0 0 / 0.1)',
  padding: 18
}])

// Convert class name string as used in HTML's `class` attribute (separated by a space " ") to the CSS dot-notation so that they can be composed with vanilla extract more easily
function toClassName (htmlClassNames: string) {
  return `.${htmlClassNames.split(' ').join('.')}`
}
