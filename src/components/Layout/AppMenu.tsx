import * as React from "react";

import {
  Article as ArticleIcon,
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
import { Link } from "gatsby";

import { ColorModeContext } from "plugins/gatsby-plugin-top-layout/src/TopLayout";

export function AppBarMenu() {
  const {
    palette: { mode },
  } = useTheme();
  const changeColorMode = React.useContext(ColorModeContext);

  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="GitHub profile">
        <IconButton
          color="inherit"
          href="https://github.com/pers0n4"
          target="_blank"
        >
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
    <List component="nav" sx={{ paddingTop: 0 }}>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to="/articles">
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Articles" />
      </ListItemButton>
      <ListItemButton component={Link} to="/categories">
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItemButton>
      <ListItemButton component={Link} to="/labels">
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="Labels" />
      </ListItemButton>
    </List>
  );
}
