import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  // base: "/demo-astro-solid-signals-bug",
  integrations: [solidJs()],
});
