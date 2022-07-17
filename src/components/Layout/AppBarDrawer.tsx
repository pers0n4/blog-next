import * as React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useStaticQuery, graphql } from "gatsby";

import { AppBarMenu, AppDrawerMenu } from "./AppMenu";

import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import type { IconButtonProps } from "@mui/material/IconButton";

const drawerWidth = 240;
const iconSize = 24;
const listItemPadding = 16;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface DrawerToggleIconButtonProps extends IconButtonProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up("md")]: {
        width: theme.typography.pxToRem(iconSize + listItemPadding * 2),
      },
    }),
  },
}));

const DrawerToggleIconButton = styled(IconButton, {
  shouldForwardProp: (property) => property !== "open",
})<DrawerToggleIconButtonProps>(({ theme, open }) => ({
  marginRight: 36,
  transition: theme.transitions.create("margin", {
    duration: theme.transitions.duration.leavingScreen,
    easing: theme.transitions.easing.sharp,
  }),
  ...(open && {
    marginRight: 0,
    transition: theme.transitions.create("margin", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    visibility: "hidden",
  }),
}));

export default function AppBarDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { site }: Queries.SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <AppBar open={open} position="absolute">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <DrawerToggleIconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            open={open}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </DrawerToggleIconButton>
          <Typography
            noWrap
            color="inherit"
            component="h1"
            sx={{ flexGrow: 1 }}
            variant="h6"
          >
            {site?.siteMetadata?.title}
          </Typography>
          <AppBarMenu />
        </Toolbar>
      </AppBar>
      <Drawer open={open} variant="permanent">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <AppDrawerMenu />
      </Drawer>
    </>
  );
}
