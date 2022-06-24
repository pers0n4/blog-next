import * as React from "react";

import { CacheProvider } from "@emotion/react";

import getEmotionCache from "./getEmotionCache";

import type { GatsbyBrowser } from "gatsby";

const cache = getEmotionCache();

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <CacheProvider value={cache}>{element}</CacheProvider>;
