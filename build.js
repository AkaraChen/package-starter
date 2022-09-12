const esbuild = require("esbuild");
const { dtsPlugin } = require("esbuild-plugin-d.ts");
const rimraf = require("rimraf")

rimraf.sync("dist")

const option = {
    bundle: true,
    plugins: [dtsPlugin()],
    color: true,
    logLevel: "info",
    sourcemap: true,
    entryPoints: ["./src/index.ts"],
}

esbuild
    .build({
        format: "esm",
        outdir: "dist",
        splitting: true,
        ...option
    })
    .catch(() => process.exit(1))

esbuild
    .build({
        format: "cjs",
        outfile: "./dist/cjs.js",
        ...option
    })
    .catch(() => process.exit(1))