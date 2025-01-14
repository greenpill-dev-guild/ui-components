const { build } = require("esbuild");

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: "dist",
  // loader: {
  //   ".stories.tsx": "ignore",
  //   ".stories.js": "ignore",
  // },
  external: ["react", "react-dom"], // Exclude peer dependencies
}).catch((e) => {
  console.log("Builde Error", e);
  process.exit(1);
});
