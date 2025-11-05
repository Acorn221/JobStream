/* eslint-disable */
const { build } = require('esbuild');
const { copy } = require('esbuild-plugin-copy');

async function main() {
  await build({
    entryPoints: ['./src/index.ts'],
    outfile: 'dist/index.js',
    format: 'cjs',
    minify: false,
    bundle: true,
    platform: 'node',
    target: 'es2020',
    plugins: [
      // The prisma schema needs to be included in the dist folder
      copy({
        resolveFrom: 'out',
        assets: {
          from: '../../packages/yoga-server/prisma/**.prisma',
          to: './',
        },
        watch: true,
      }),
    ],
  });

  console.info(`Backend build done!`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});