import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "Borrowed Hands",
  "",
  "Sign it for me, you said,",
  "and put the pen in my hand",
  "still warm from yours.",
  "",
  "I wrote your name",
  "better than you do.",
  "The clerk looked up once.",
  "You looked at the floor.",
  "",
  "Years later you signed",
  "for something of mine,",
  "your name smaller",
  "than I remembered making it.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
