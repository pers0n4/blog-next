import * as React from "react";

import { Box } from "@mui/material";

import AppBarDrawer from "./AppBarDrawer";
import AppContainer from "./AppContainer";

type LayoutProps = React.PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBarDrawer />
      <AppContainer>{children}</AppContainer>
    </Box>
  );
}
