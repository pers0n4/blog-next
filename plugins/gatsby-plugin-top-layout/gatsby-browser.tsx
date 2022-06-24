import * as React from "react";

import TopLayout from "./src/TopLayout";

import type { GatsbyBrowser } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <TopLayout>{element}</TopLayout>;
