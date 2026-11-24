// Monday, Reviewed in One Line — a one-line entry for make.fun.
// A one-star review of Monday itself: it shows up uninvited, overstays,
// and drags Tuesday in with it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Monday reviewed: one star. Arrived uninvited, stayed too long, and somehow brought Tuesday with it.";

// Guard: the entry must be exactly one line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
