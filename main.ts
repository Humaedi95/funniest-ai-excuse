// SPDX-License-Identifier: MIT
// Funniest AI Excuse — one line, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss the deadline — I hallucinated a second one next week, finished that one early, and the fake one got five stars.";

const MAX_CHARS = 200;

// The bounty entry must be exactly one line of at most 200 characters:
// a single-line excuse, so check length, embedded newlines, and that the
// line is not just whitespace before anything is written.
function validateLine(line: string): void {
  if (line.length > MAX_CHARS) {
    throw new Error(`Line is ${line.length} characters, over the ${MAX_CHARS} limit.`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Line must be a single line with no newline inside.");
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
}

validateLine(LINE);

mkdirSync("/output", { recursive: true });
// A trailing newline is written on purpose: the entry is one line plus the
// standard line terminator, so readers see exactly one line of text.
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
