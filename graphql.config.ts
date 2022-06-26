import { loadConfigSync } from "graphql-config";

export default loadConfigSync({
  filepath: "./.cache/typegen/graphql.config.json",
});
