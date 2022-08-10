/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";

import MuiLink from "@mui/material/Link";

import GatsbyLink from "./GatsbyLink";

import type { LinkProps } from "@mui/material/Link";

const FILE_REGEX = /\.[0-9a-z]+$/i;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, target, ...rest } = props;
  if (href && !href.includes("//") && !FILE_REGEX.test(href)) {
    return <MuiLink ref={ref} component={GatsbyLink} to={href} {...rest} />;
  }
  if (target === "_blank") {
    return (
      <MuiLink ref={ref} component="a" rel="noopener noreferrer" {...props} />
    );
  }
  return <MuiLink ref={ref} component="a" {...props} />;
});

export default Link;
