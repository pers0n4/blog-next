import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Helmet } from "react-helmet";

import { createTheme } from "./theme";

import type { PaletteMode } from "@mui/material";

export const ColorModeContext = React.createContext<() => void>(() => ({}));

export default function TopLayout({ children }: React.PropsWithChildren) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light",
  );

  const theme = React.useMemo(() => createTheme(mode), [mode]);
  const toggleColorMode = React.useCallback(
    () =>
      setMode((previousMode) => (previousMode === "light" ? "dark" : "light")),
    [],
  );

  return (
    <>
      <Helmet defer={false}>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Helmet>
      <ColorModeContext.Provider value={toggleColorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
