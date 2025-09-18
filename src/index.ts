#!/usr/bin/env node

import { MacuseProxyServer } from "./server/proxy-server.js";

async function main() {
  // Start the proxy server
  const server = new MacuseProxyServer();

  // Handle graceful shutdown
  process.on("SIGINT", async () => {
    await server.stop();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    await server.stop();
    process.exit(0);
  });

  try {
    await server.start();
  } catch (error) {
    console.error(`Failed to start server: ${error}\n`);
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error(`Uncaught Exception: ${error}\n`);
  process.exit(1);
});

process.on("unhandledRejection", (reason, _promise) => {
  console.error(`Unhandled Rejection: ${reason}\n`);
  process.exit(1);
});

main();
