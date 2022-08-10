/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";

import { Link } from "gatsby";

import type { GatsbyLinkProps } from "gatsby";

const GatsbyLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<GatsbyLinkProps<unknown>, "ref">
>((props, ref) => <Link innerRef={ref} {...props} />);

export default GatsbyLink;
