// The World in One Picture — Saturday 21 November 2026.
// Node 22, standard library only, no network access at all.
// entry.png sits next to this file in the repository. The grader runs this
// program twice; each run copies those exact bytes to the output directory
// make.fun asks for, so both runs produce an identical file.
// The copy is byte-for-byte: no re-encoding, no timestamps in the output.
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFile, mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const MAX_BYTES = 1024 * 1024;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');

await mkdir(outDir, { recursive: true });
await copyFile(here, dest);

const info = await stat(dest);
if (info.size > MAX_BYTES) {
  throw new Error(`entry.png is ${info.size} bytes, over the 1 MiB limit`);
}
console.log(`Wrote entry.png (${info.size} bytes) to ${dest}`);
