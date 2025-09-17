# Macuse

<p align="center">
  <img src="https://macuse.app/logo.png" alt="Macuse" width="128" height="128">
</p>

<h3 align="center">
  Give Your AI Superpowers on macOS
</h3>

<p align="center">
  Connect AI with any macOS app. Deep integration with native apps like Calendar, Mail, Notes, plus UI control for all applications. Works with Claude, Cursor, Raycast, and any MCP-compatible AI.
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/platform-macOS_10.15+-lightgreen" alt="Platform"></a>
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-Compatible-green" alt="MCP Compatible"></a>
</p>

<p align="center">
  <a href="https://macuse.app/download/">Download</a> •
  <a href="https://macuse.app">Website</a>
</p>

---

Macuse is a dual‑mode desktop application that bridges AI assistants with native macOS functionality through the Model Context Protocol (MCP). It enables AI clients to control Mac applications, access system information, and automate workflows while maintaining security and user privacy.

## Key Features

Macuse provides practical, local capabilities through toolboxes, including:

- System: launch and manage apps, general system operations
- Inspector: explore app UI structure to understand elements
- Interaction: click/type/interact with UI elements
- Calendar & Reminders: read and manage events and reminders (with consent)
- Contacts, Notes, Messages: access common personal apps (with consent)
- Location & Maps: read current location and use mapping features (with consent)

Everything runs locally. Access is protected by a token you control, and sensitive actions require the appropriate macOS permissions.

## Installation

1. Download the latest installer from the Website: https://macuse.app/download/
2. Unzip the downloaded file.
3. Drag `Macuse.app` into your `Applications` folder.

## Configure Macuse

Open Macuse to review and adjust your connection and capabilities:

- Access Token: copy your token to connect clients, you can regenerate it anytime.
- Transport Mode:
  - Stdio: direct connection with no open ports, simplest for most clients.
  - SSE: runs a local server on your bind address/port and streams events.
  - Streamable HTTP: runs a local HTTP endpoint suitable for clients that prefer HTTP.
- Network (for SSE/HTTP):
  - Bind Address: default `127.0.0.1` (local only).
  - Port: default `35729`. Use the built‑in port check to avoid conflicts.
- Toolboxes: enable/disable capabilities such as Inspector, Interaction, Calendar, Contacts, Messages, Notes, and Location.
- Permissions: macOS will prompt for Accessibility, Contacts, Calendars, Reminders, Location, etc., when needed.

## Connect Your MCP Client

1. In Macuse:

- Choose your Transport Mode (Stdio recommended). If using SSE/HTTP, confirm bind address and port.

2. In your client:

- If the client supports `.mcpb` plugins
  - Copy your Access Token.
  - Download and install `macuse.mcpb`, then provide your Access Token (and binary path if prompted; default is `/Applications/Macuse.app/Contents/MacOS/macuse`).
- If the client does not support `.mcpb`
  - Use Macuse’s one‑click setup buttons to configure supported clients (e.g., Claude, Cursor, Raycast, AnythingLLM), or
  - Copy the generated configuration from Macuse and paste it into your client’s settings for manual setup.

### Manual Configuration (JSON Examples)

Generic connection config (copy/paste friendly):

Stdio

```json
{
  "mode": "stdio",
  "config": {
    "type": "stdio",
    "command": "/Applications/Macuse.app/Contents/MacOS/macuse",
    "args": ["--stdio"],
    "env": { "ACCESS_TOKEN": "<YOUR_TOKEN>" }
  }
}
```

SSE

```json
{
  "mode": "sse",
  "config": {
    "type": "sse",
    "url": "http://<BIND_ADDRESS>:<PORT>/sse",
    "headers": { "Authorization": "Bearer <YOUR_TOKEN>" }
  }
}
```

Streamable HTTP

```json
{
  "mode": "streamableHttp",
  "config": {
    "type": "streamable-http",
    "url": "http://<BIND_ADDRESS>:<PORT>/mcp",
    "headers": { "Authorization": "Bearer <YOUR_TOKEN>" }
  }
}
```

## Privacy & Security

- The Access Token authenticates your client to Macuse locally; it is not sent to remote servers.
- macOS permissions (Contacts, Calendar, Accessibility, etc.) must be explicitly granted by you when needed.

## Helpful Links

- Website: https://macuse.app/
- Download: https://macuse.app/download/
- Model Context Protocol: https://modelcontextprotocol.io/
