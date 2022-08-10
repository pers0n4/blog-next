import { createTheme as createMuiTheme } from "@mui/material";

import Link from "./Link";

import type { PaletteMode, PaletteOptions, LinkProps } from "@mui/material";

const dark: PaletteOptions = {
  primary: {
    main: "#00abc0",
  },
  secondary: {
    main: "#f0eee9",
  },
};

const light: PaletteOptions = {
  primary: {
    main: "#5f4b8b",
  },
  secondary: {
    main: "#3178C6",
  },
};

export const palette = {
  dark,
  light,
};

export const createTheme = (mode: PaletteMode) =>
  createMuiTheme({
    palette: {
      mode,
      ...palette[mode],
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: Link,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: Link,
        },
      },
    },
  });
