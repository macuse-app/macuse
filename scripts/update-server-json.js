#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

function sha256OfFile(path) {
  const buf = readFileSync(path);
  return createHash("sha256").update(buf).digest("hex");
}

try {
  const pkg = JSON.parse(readFileSync("package.json", "utf8"));
  // Ensure final artifact name is macuse.mcpb; if pack produced another name, rename was handled in prepare step
  const file =
    readdirSync(".").find((f) => f.endsWith(".mcpb")) || "macuse.mcpb";
  const hash = sha256OfFile(file);

  const server = existsSync("server.json")
    ? JSON.parse(readFileSync("server.json", "utf8"))
    : {};

  server.identifier = pkg.version;
  server.file_sha256 = hash;

  writeFileSync("server.json", `${JSON.stringify(server, null, 2)}\n`);
  console.log("server.json updated:", {
    identifier: pkg.version,
    file_sha256: hash,
  });
} catch (err) {
  console.error("Failed to update server.json:", err.message);
  process.exit(1);
}
