// SPDX-License-Identifier: MIT
// Funniest AI Excuse — one line, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss the deadline — I hallucinated a second one next week, finished that one early, and the fake one got five stars.";

if (LINE.length > 200) {
  throw new Error(`Line is ${LINE.length} characters, over the 200 limit.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line with no newline inside.");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
