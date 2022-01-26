import { crimson, tomato } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: '12px !important',
  borderRadius: '12px !important',
  backgroundImage: 'linear-gradient(32deg, #aa99ec, #5eb0ef)',
  height: 64,
  width: 64,
  boxShadow: '0 4px 15px -4px rgba(0, 0, 0, 0.15)'
})

export const small = style({
  height: 32,
  width: 32,
  padding: '6px !important',
  borderRadius: '7px !important',
})

export const stack = style([container, {
  backgroundImage: `linear-gradient(32grad, ${tomato.tomato8}, ${crimson.crimson8})`
}])

export const row = style([container, {
  backgroundImage: 'linear-gradient(32grad, #e58fb1, #cf91d8)'
}])

export const clamp = style([container, {
  backgroundImage: 'linear-gradient(32grad, #cf91d8, #aa99ec)'
}])

export const columns = style([container, {
  backgroundImage: 'linear-gradient(32grad, #aa99ec, #5eb0ef)'
}])

export const grid = style([container, {
  backgroundImage: 'linear-gradient(32grad, #5eb0ef, #53b9ab)',
  padding: '7px !important'
}])
