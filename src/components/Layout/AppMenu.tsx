import * as React from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CategoryIcon from "@mui/icons-material/Category";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LabelIcon from "@mui/icons-material/Label";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
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
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
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
