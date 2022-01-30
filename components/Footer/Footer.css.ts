import { mauve } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const footer = style({

})

export const navLink = style({
  padding: 18,
  borderRadius: 15,
  textDecoration: 'none',
  ":hover": {
    backgroundColor: mauve.mauve3
  }
})
