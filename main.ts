import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Monday reviewed: one star. Arrived uninvited, stayed too long, and somehow brought Tuesday with it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
