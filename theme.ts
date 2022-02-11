import { extendTheme, theme as DEFAULT_THEME } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bgGradient: "",
      },
    },
  },
  colors: {
    gray: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
  components: {
    Avatar: {
      baseStyle: {
        container: {
          bgGradient: "linear(to-r, purple.300, pink.300)",
          // border: "2px solid var(--chakra-colors-purple-300)"
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "pink.200",
      },
    },
    Spinner: {
      baseStyle: {
        color: "pink.200",
      },
    },
  },
  shadows: {
    outline: "0 0 0 3px var(--chakra-colors-pink-200) !important",
  },
});

export default theme;
