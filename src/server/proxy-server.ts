import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { MacuseClient } from "../client/macuse-client.js";

/**
 * Stdio MCP Server that proxies requests to Macuse MCP server
 */
export class MacuseProxyServer {
  private server: Server;
  private macuseClient: MacuseClient | null = null;
  private connectPromise: Promise<void> | null = null;

  constructor() {
    this.server = new Server(
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
    this.setupHandlers();
  }

  private setupHandlers() {
    // Tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      await this.ensureConnected();
      if (!this.macuseClient) throw new Error("Client not connected");
      return await this.macuseClient.listTools();
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        await this.ensureConnected();
        if (!this.macuseClient) throw new Error("Client not connected");
        return await this.macuseClient.callTool(name, args || {});
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  error:
                    error instanceof Error ? error.message : "Unknown error",
                  tool: name,
                  timestamp: new Date().toISOString(),
                },
                null,
                2,
              ),
            },
          ],
          isError: true,
        };
      }
    });

    this.server.onerror = (error) => {
      console.error(`MCP Proxy Server error: ${error}\n`);
    };
  }

  /**
   * Ensure connection to Macuse MCP server
   */
  private async ensureConnected(): Promise<void> {
    // If the client is already connected, return immediately
    if (this.macuseClient) {
      return;
    }

    // If a connection is already in progress, wait for it to complete
    if (this.connectPromise) {
      return await this.connectPromise;
    }

    // Start a new connection and "lock" it
    this.connectPromise = (async () => {
      try {
        const macuseClient = new MacuseClient();
        await macuseClient.connect();
        this.macuseClient = macuseClient;
      } catch (error) {
        // If the connection fails, clear the "lock" to allow retry
        this.connectPromise = null;
        console.error(`Failed to connect to Macuse: ${error}\n`);
        throw error;
      }
    })();

    return await this.connectPromise;
  }

  /**
   * Start the stdio server
   */
  async start(): Promise<void> {
    try {
      const transport = new StdioServerTransport();
      await this.server.connect(transport);
    } catch (error) {
      console.error(`Failed to start proxy server: ${error}\n`);
      process.exit(1);
    }
  }

  /**
   * Stop the server
   */
  async stop(): Promise<void> {
    try {
      if (this.macuseClient) {
        await this.macuseClient.close();
      }
    } catch (error) {
      console.error(`Error during server shutdown: ${error}\n`);
    }
  }
}
