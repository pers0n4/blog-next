import path from "path";

import type { GatsbyNode } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        plugins: path.resolve(__dirname, "plugins"),
      },
    },
  });
};
