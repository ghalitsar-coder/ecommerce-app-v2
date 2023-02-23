import { mode } from "@chakra-ui/theme-tools"; // 1. import `extendTheme` function
import {
  Menu,
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      color: mode("primary.600", "primary.900")(props),
      // bg: mode("primary.600", "primary.700")(props),
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("primary.400", "primary.400")(props),
    },
    ".sidebar__comp": {
      bg: mode("primary.700", "primary.600")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("primary.300", "primary.300")(props),
      // wordWrap: "break-word",
    },
  }),
};

const colors = {
  glue: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#111821", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;
