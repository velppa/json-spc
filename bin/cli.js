#!/usr/bin/env node

import fs from "fs";
import stringify from "json-stringify-pretty-compact";
import commandLineArgs from "command-line-args";

const opts = commandLineArgs([
  { name: "start", type: Number },
  { name: "end", type: Number },
  { name: "indent", type: Number, default: 2 },
  { name: "maxlength", type: Number, default: 120 },
]);

console.error(`opts: ${JSON.stringify(opts)}`)

const useRegion = opts.start !== undefined && opts.end !== undefined

// Read file
const original = fs.readFileSync(0, "utf-8");
let json;
let text;
try {
  if (useRegion) {
    text = original.substring(opts.start, opts.end);
  } else {
    text = original;
  }
  json = JSON.parse(text);
} catch (e) {
  console.error(`Error parsing JSON!`, e);
  process.exit(2);
}

// Format
const output = stringify(json, {
  maxLength: opts.maxlength,
  indent: opts.indent,
});

// Write output
if (useRegion) {
  process.stdout.write(original.substring(0, opts.start));
  process.stdout.write(output);
  process.stdout.write(original.substring(opts.end));
} else {
  process.stdout.write(output);
}
process.stdout.write("\n");
