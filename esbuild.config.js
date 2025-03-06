const path = require("path");
const esbuild = require("esbuild");
const vuePlugin = require("esbuild-plugin-vue3");

esbuild.build({
  entryPoints:["app/javascript/application.js"],
  bundle: true,
  allowOverwrite: true,
  sourcemap: true,
  publicPath: 'assets',
  outdir: path.join(process.cwd(),'app/assets/builds'),
  plugins:[vuePlugin()],
})