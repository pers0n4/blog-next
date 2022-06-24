import * as React from "react";

import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { renderToString } from "react-dom/server";

import getEmotionCache from "./getEmotionCache";

import type { GatsbySSR } from "gatsby";

// Inject MUI styles first to match with the prepend: true configuration.
export const onPreRenderHTML: GatsbySSR["onPreRenderHTML"] = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents() as React.ReactElement[];
  headComponents.sort((x, y) => {
    if (x.key === "emotion-css-global" || x.key === "emotion-css") {
      return -1;
    }
    if (y.key === "style") {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};

export const replaceRenderer: GatsbySSR["replaceRenderer"] = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const cache = getEmotionCache();
  const server = createEmotionServer(cache);

  const emotionStyles = server.extractCriticalToChunks(
    renderToString(
      <CacheProvider value={cache}>{bodyComponent}</CacheProvider>,
    ),
  );

  setHeadComponents(
    emotionStyles.styles.map((style) => (
      <style
        key={`emotion-${style.key}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
      />
    )),
  );

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html);
};
