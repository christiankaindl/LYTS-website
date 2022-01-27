import { createMedia } from "@artsy/fresnel"

const MediaQuery = createMedia({
  breakpoints: {
    xs: 0,
    mobile: 768
  },
})

// Make styles for injection into the header of the page
export const mediaStyles = MediaQuery.createMediaStyle()

export const { Media, MediaContextProvider } = MediaQuery
