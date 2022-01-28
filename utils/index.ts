import { Stack, Row, Clamp, Columns, Grid, Split, Box, Breakout } from "@christiankaindl/lyts";

export const lyts = { Stack, Row, Box, Clamp, Columns, Grid, Split, Breakout }

export const domain = process.env.NODE_ENV === 'development'
  ? 'localhost:3000'
  : 'lyts-website.vercel.app'
