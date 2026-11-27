import { build } from 'esbuild';

await build({
  entryPoints: ['src/site-effects.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'public/site-effects.js'
});
