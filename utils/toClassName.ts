// Convert class name string as used in HTML's `class` attribute (separated by a space " ") to the CSS dot-notation so that they can be composed with vanilla extract more easily
// TODO: Rename to `toSelectorString()`
export function toClassName (htmlClassNames: string) {
  return `.${htmlClassNames.split(' ').join('.')}`
}
