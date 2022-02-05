import { mauve } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const navigation = style({

})

export const navLink = style({
  padding: '18px 15px',
  borderRadius: 15,
  textDecoration: 'none',
  ":hover": {
    backgroundColor: mauve.mauve3
  }
})
