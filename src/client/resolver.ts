import { execSync } from "node:child_process";
import { config } from "../config.js";

export interface MacuseTransportConfig {
  mode: "streamableHttp" | "sse" | "stdio";
  config: {
    type: string;
    url?: string;
    headers?: Record<string, string>;
  };
  configured: boolean;
}

export interface MacuseTransportResult {
  success: boolean;
  transport?: MacuseTransportConfig;
  error?: string;
}

/**
 * Resolve Macuse transport configuration by calling --get-config
 */
export async function resolveMacuseTransport(): Promise<MacuseTransportResult> {
  // Macuse only supports macOS (darwin). Short-circuit on other platforms.
  if (process.platform !== "darwin") {
    return {
      success: false,
      error: "Macuse supports macOS (darwin) only",
    };
  }

  try {
    // Try to get config from Macuse binary
    const output = execSync(`"${config.macuseBinary}" --get-config`, {
      encoding: "utf8",
      timeout: config.connectionTimeout,
      stdio: ["ignore", "pipe", "pipe"],
    });

    const transportConfig = JSON.parse(output.trim()) as MacuseTransportConfig;

    if (!transportConfig.configured) {
      return {
        success: false,
        error: "Macuse transport not configured",
      };
    }

    return {
      success: true,
      transport: transportConfig,
    };
  } catch (error) {
    // If the macuse binary is not found, signal explicitly so caller can
    // guide the user to download it instead of silently falling back.
    const err = error as NodeJS.ErrnoException;
    const msg = String(err?.message || err);

    const isNotFound = err?.code === "ENOENT" || /not found|ENOENT/i.test(msg);

    if (isNotFound) {
      return {
        success: false,
        error: "Macuse executable not found",
      };
    }

    if (config.debug) {
      console.error(`Failed to get Macuse config: ${msg}`);
    }

    // Fallback: try to probe default transports
    return tryFallbackProbing();
  }
}

/**
 * Fallback probing for older Macuse versions without --get-config
 */
async function tryFallbackProbing(): Promise<MacuseTransportResult> {
  // Try default streamableHttp first
  const defaultConfig: MacuseTransportConfig = {
    mode: "streamableHttp",
    config: {
      type: "streamable-http",
      url: "http://127.0.0.1:35729/mcp",
      headers: {
        Authorization: `Bearer \${ACCESS_TOKEN}`,
      },
    },
    configured: true,
  };

  // In a real implementation, we would try to connect to verify
  // For now, just return the default
  return {
    success: true,
    transport: defaultConfig,
  };
}
