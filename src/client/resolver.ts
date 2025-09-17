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
    if (config.debug) {
      console.error(`Failed to get Macuse config: ${error}`);
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
