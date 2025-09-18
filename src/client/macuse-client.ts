import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { config } from "../config.js";
import {
  type MacuseTransportConfig,
  resolveMacuseTransport,
} from "./resolver.js";

// biome-ignore lint/suspicious/noTemplateCurlyInString: This is a literal string placeholder, not a template
const ACCESS_TOKEN_PLACEHOLDER = "${ACCESS_TOKEN}";

export class MacuseClient {
  private client: Client | null = null;
  private transport:
    | StdioClientTransport
    | SSEClientTransport
    | StreamableHTTPClientTransport
    | null = null;
  private transportConfig: MacuseTransportConfig | null = null;

  async connect(): Promise<void> {
    const result = await resolveMacuseTransport();

    if (!result.success || !result.transport) {
      throw new Error(`Failed to resolve Macuse transport: ${result.error}`);
    }

    this.transportConfig = result.transport;
    await this.createTransport();
    if (this.transport) {
      await this.client?.connect(this.transport);
    }
  }

  private async createTransport(): Promise<void> {
    if (!this.transportConfig) {
      throw new Error("Transport config not available");
    }

    const accessToken = config.accessToken;
    if (!accessToken) {
      throw new Error("ACCESS_TOKEN not provided");
    }

    switch (this.transportConfig.mode) {
      case "streamableHttp": {
        const url = this.transportConfig.config.url;
        if (!url) {
          throw new Error("URL not provided for streamableHttp transport");
        }

        // Replace token placeholder in headers
        const headers = { ...this.transportConfig.config.headers };
        if (headers.Authorization?.includes(ACCESS_TOKEN_PLACEHOLDER)) {
          headers.Authorization = headers.Authorization.replace(
            ACCESS_TOKEN_PLACEHOLDER,
            accessToken,
          );
        }

        this.transport = new StreamableHTTPClientTransport(new URL(url), {
          requestInit: {
            headers,
          },
        });
        break;
      }

      case "sse": {
        const url = this.transportConfig.config.url;
        if (!url) {
          throw new Error("URL not provided for SSE transport");
        }

        const headers = { ...this.transportConfig.config.headers };
        if (headers.Authorization?.includes(ACCESS_TOKEN_PLACEHOLDER)) {
          headers.Authorization = headers.Authorization.replace(
            ACCESS_TOKEN_PLACEHOLDER,
            accessToken,
          );
        }

        this.transport = new SSEClientTransport(new URL(url), {
          requestInit: {
            headers,
          },
        });
        break;
      }

      case "stdio": {
        this.transport = new StdioClientTransport({
          command: config.macuseBinary,
          args: ["--stdio"],
          env: {
            ...process.env,
            ACCESS_TOKEN: accessToken,
          },
        });
        break;
      }

      default:
        throw new Error(
          `Unsupported transport mode: ${this.transportConfig.mode}`,
        );
    }

    this.client = new Client(
      {
        name: "macuse-mcp-proxy",
        version: __VERSION__,
      },
      {
        capabilities: {
          tools: {},
        },
      },
    );
  }

  async listTools() {
    if (!this.client) throw new Error("Client not connected");
    return await this.client.listTools();
  }

  async callTool(name: string, arguments_: Record<string, unknown>) {
    if (!this.client) throw new Error("Client not connected");
    return await this.client.callTool({
      name,
      arguments: arguments_,
    });
  }

  async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
    this.transport = null;
    this.transportConfig = null;
  }
}
