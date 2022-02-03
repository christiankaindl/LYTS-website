import { Stack, Row, Clamp, Columns, Grid, Split, Box, Breakout } from "@christiankaindl/lyts";

// Global imports passed to mdx-bundler
export const lyts = { Stack, Row, Box, Clamp, Columns, Grid, Split, Breakout }
export const mdxBundlerGlobals = { lyts }

export const domain = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://lyts.christiankaindl.com'

export const isDev = process.env.NODE_ENV === 'development'
