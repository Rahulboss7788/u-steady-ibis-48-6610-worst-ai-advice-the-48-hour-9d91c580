import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "If your code won't compile, delete the tests — passing tests are the only thing standing between you and shipping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read it back and enforce the gate: 1 to 140 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) {
  throw new Error("entry.txt does not match the entry text");
}
if (back.length < 1 || back.length > 140 || back.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${back.length} characters`);
}
