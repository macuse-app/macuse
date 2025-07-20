# Macuse

<p align="center">
  <img src="https://macuse.app/logo.png" alt="Macuse" width="128" height="128">
</p>

<h3 align="center">
  Give Your AI Superpowers on macOS
</h3>

<p align="center">
  The complete MCP server for macOS with powerful toolboxes. Works with Claude Desktop, Cursor, Raycast, and any MCP-compatible AI.
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/platform-macOS_10.15+-lightgreen" alt="Platform"></a>
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-Compatible-green" alt="MCP Compatible"></a>
</p>

<p align="center">
  <a href="https://macuse.app/download/">Download</a> •
  <a href="#-features">Features</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="https://macuse.app">Website</a>
</p>

---

## What is Macuse?

Macuse is a **native Mac app** that lets AI assistants like Claude, Cursor, and Raycast control your computer through the Model Context Protocol (MCP). Turn natural language commands into real actions:

- **Control Any App** - Click buttons, type text, navigate interfaces
- **Manage Calendar** - Create events, check availability, search schedules
- **Work with Notes** - Create, update, and search Apple Notes
- **Handle Reminders** - Manage tasks with priorities and due dates
- **Inspect Interfaces** - Extract text, find elements, analyze apps

## How It Works

Transform your AI from a chatbot into a capable digital assistant. Simply give natural language commands:

### Calendar & Scheduling

```
You: "Create a meeting called 'Design Review' for next Tuesday at 2 PM with a 30-minute reminder"
AI: *Creates the calendar event with all specified details and reminder*
```

### Email Management

```
You: "Send a follow-up email to the design team about yesterday's meeting and mark all unread emails from Sarah as read"
AI: *Composes email, sends it, then marks specified emails as read*
```

### Web Navigation & Apps

```
You: "Launch Safari, go to apple.com, and click on the Mac section"
AI: *Opens Safari, navigates to the URL, and clicks the Mac link*
```

### Notes & Task Management

```
You: "Create a note called 'Project Ideas' with my three concepts, then add a reminder to review it tomorrow"
AI: *Creates the note with content and sets up the reminder*
```

### Complex App Interactions

```
You: "Fill out this form in Photoshop with the project details and save it as a PDF"
AI: *Navigates the form, enters data, and exports as PDF*
```

### Multi-App Workflows

```
You: "Check my calendar, create a note with today's meetings, and send a summary email to my assistant"
AI: *Reads calendar, creates organized note, composes and sends email*
```

## Quick Start

### Prerequisites

- macOS 10.15 or later
- Claude Desktop, Cursor, or any MCP-compatible AI client

### Get Started in 30 Seconds

1. **[Download Macuse](https://macuse.app/download/)** from our website
2. **Launch** and grant Accessibility permissions
3. **Generate** your access token
4. **Configure** your AI assistant
5. **Start** automating your Mac!

## Features

### System Control (3 tools)

- `get_running_apps` - Get all currently running macOS applications
- `get_active_apps` - Get applications currently visible on screen
- `launch_app` - Launch any macOS application by bundle ID

### UI Inspector (4 tools)

- `get_ui_hierarchy` - Retrieve complete UI structure of any app
- `find_ui_elements` - Search for UI elements by attributes
- `get_focused_element` - Get the currently focused UI element
- `get_visible_text` - Extract all visible text from an app

### UI Interaction (7 tools)

- `mouse_move_to_element` - Move cursor to any UI element
- `mouse_click_element` - Left-click UI elements
- `mouse_double_click_element` - Double-click UI elements
- `mouse_right_click_element` - Right-click UI elements
- `activate_element` - Activate elements via accessibility API
- `keyboard_press_key` - Simulate key presses with modifiers
- `type_text` - Type text into focused fields

### Calendar Management (7 tools)

- `check_calendar_permission` - Check Calendar access permissions
- `get_calendars` - List all available calendars
- `get_calendar_events` - Search events with advanced filters
- `create_calendar_event` - Create new calendar events
- `get_calendar_event` - Get specific event details
- `update_calendar_event` - Modify existing events
- `delete_calendar_event` - Remove calendar events

### Mail Control (11 tools)

- `check_mail_permission` - Check Mail app permissions
- `get_mail_accounts` - List configured mail accounts
- `get_mails` - Search messages with filters
- `get_mail_content` - Read full email content
- `create_mail` - Compose and send emails
- `reply_mail` - Reply to email threads
- `forward_mail` - Forward emails to recipients
- `mark_as_read` - Mark emails as read
- `mark_as_unread` - Mark emails as unread
- `get_mailboxes` - List all mailboxes
- `move_mail` - Move emails between mailboxes
- `delete_mail` - Delete email messages

### Notes Management (8 tools)

- `check_notes_permission` - Check Notes access permissions
- `get_notes` - Search notes with filters
- `get_note` - Get full note content (HTML)
- `create_note` - Create new notes
- `update_note` - Update existing notes
- `delete_note` - Move notes to trash
- `restore_note` - Restore deleted notes
- `open_note` - Open notes in Notes app

### Reminders Control (6 tools)

- `check_reminders_permission` - Check Reminders permissions
- `get_reminder_lists` - List all reminder lists
- `get_reminders` - Search reminders with filters
- `create_reminder` - Create new reminders
- `update_reminder` - Update existing reminders
- `delete_reminder` - Delete reminders

### Security Features

- **Token Authentication** - Secure access control
- **Device Binding** - Locks to your specific Mac
- **Granular Permissions** - Control what AI can access
- **Local Processing** - No cloud, no tracking

## Installation

### Download Macuse

Get the latest version from our official download page:

<p align="center">
  <a href="https://macuse.app/download/" style="font-size: 18px;">
    <strong>→ Download Macuse for macOS</strong>
  </a>
</p>

### Setup Process

1. **Download** from [macuse.app/download](https://macuse.app/download/)
2. **Drag** Macuse.app to your Applications folder
3. **Launch** Macuse from Applications
4. **Grant** Accessibility permissions when prompted
5. **Generate** your access token

## Configuration

**Tip**: You can copy configurations directly from the Macuse app or use one-click auto-configuration.

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "macuse": {
      "command": "/Applications/Macuse.app/Contents/MacOS/macuse",
      "args": ["--stdio"],
      "env": {
        "ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}
```

### Cursor

Add to Cursor's MCP settings:

```json
{
  "mcpServers": {
    "macuse": {
      "command": "/Applications/Macuse.app/Contents/MacOS/macuse",
      "args": ["--stdio"],
      "env": {
        "ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}
```

### Raycast AI

Use SSE mode for Raycast:

```json
{
  "mcpServers": {
    "macuse": {
      "url": "http://127.0.0.1:35729/mcp",
      "httpHeaders": {
        "Authorization": "Bearer your-token-here"
      }
    }
  }
}
```

## Resources

- [Issue Tracker](https://github.com/macuse-app/macuse/issues)
- [Support](mailto:support@macuse.app)

---

<p align="center">
  <strong>Ready to give your AI superpowers?</strong><br>
  <a href="https://macuse.app/download/">Download Macuse</a> and transform how you work with AI
</p>
