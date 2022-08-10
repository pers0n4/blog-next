import * as React from "react";

import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Category as CategoryIcon,
  GitHub as GitHubIcon,
  Home as HomeIcon,
  Label as LabelIcon,
} from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
  Tooltip,
} from "@mui/material";

import { ColorModeContext } from "plugins/gatsby-plugin-top-layout/src/TopLayout";

export function AppBarMenu() {
  const {
    palette: { mode },
  } = useTheme();
  const changeColorMode = React.useContext(ColorModeContext);

  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="GitHub profile">
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Toggle color mode">
        <IconButton color="inherit" onClick={changeColorMode}>
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export function AppDrawerMenu() {
  return (
    <List component="nav">
      <ListItemButton href="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton href="/categories">
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItemButton>
      <ListItemButton href="/labels">
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="Labels" />
      </ListItemButton>
    </List>
  );
}
