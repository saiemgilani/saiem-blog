// Next 16 removed `next lint`; this is the flat ESLint config. `nextPlugin.configs["core-web-vitals"]`
// is a bare object with no `files`/parser, so ESLint 9 silently skipped every .ts/.tsx ("File
// ignored because no matching configuration was supplied", exit 0) — `eslint-config-next`'s own
// flat exports (already installed) carry the TS parser + `files` globs that were missing.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  { rules: { "@next/next/no-img-element": "off" } },
  globalIgnores([".next/**", "out/**", "public/**", "next-env.d.ts"]),
]);

export default eslintConfig;
