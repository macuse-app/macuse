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
  <a href="#-features">Features</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="https://macuse.app">Website</a>
</p>

---

## What is Macuse?

Macuse is a **native Mac app** that lets AI assistants like Claude, Cursor, and Raycast control your computer through the Model Context Protocol (MCP). Turn natural language commands into real actions:

- **Control Any App** - Click buttons, type text, navigate interfaces, take screenshots
- **Manage Calendar** - Create events, check availability, search schedules
- **Handle Contacts** - Search, access, and manage contact information
- **Work with Notes** - Create, update, and search Apple Notes
- **Handle Reminders** - Manage tasks with priorities and due dates
- **Send Messages** - Control Messages app, send texts, manage conversations
- **Location Services** - Get current location, integrate with Maps
- **Maps Integration** - Search locations, get directions, open in Maps
- **Email Management** - Full Mail app control with advanced filtering
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

### Location & Maps

```
You: "Get my current location and find the nearest coffee shops, then give me directions to the highest rated one"
AI: *Gets GPS location, searches nearby coffee shops, gets ratings and directions*
```

### Contacts & Messages

```
You: "Find John's contact info and send him a message about tomorrow's meeting"
AI: *Searches contacts for John, opens Messages, sends the specified message*
```

### Multi-App Workflows

```
You: "Check my calendar, create a note with today's meetings, and send a summary email to my assistant"
AI: *Reads calendar, creates organized note, composes and sends email*
```

## System Requirements

### Minimum Requirements

- **macOS**: 10.15 (Catalina) or later
- **Hardware**: Intel Mac or Apple Silicon Mac
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 100MB free disk space
- **Internet**: Required for initial setup and AI client communication

### Required Permissions

Macuse requires the following macOS permissions to function properly:
- **Accessibility**: Core requirement for UI control and app automation
- **Calendar**: For calendar management features
- **Contacts**: For contact search and management
- **Reminders**: For task management features
- **Location Services**: For location-based features (optional)

### Compatible AI Clients

- **Claude Desktop**: Full stdio and SSE support
- **Cursor**: Full stdio support  
- **Raycast AI**: Native SSE support
- **Any MCP-compatible client**: Via stdio or SSE proxy

## Quick Start

### Get Started in 30 Seconds

1. **[Download Macuse](https://macuse.app/download/)** from our website
2. **Launch** and grant Accessibility permissions
3. **Generate** your access token
4. **Configure** your AI assistant
5. **Start** automating your Mac!

## Features

### System Control (4 tools)

- `get_running_apps` - Get all currently running macOS applications
- `get_active_apps` - Get applications currently visible on screen
- `launch_app` - Launch any macOS application by bundle ID
- `get_bundle_id` - Get the bundle ID of an application by its name

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

### Contacts Management (3 tools)

- `check_contacts_permission` - Check Contacts access permissions
- `get_all_contacts` - Get all contacts from the address book
- `search_contacts` - Search contacts by name, email, or other attributes

### Location Services (1 tool)

- `get_current_location` - Get the current GPS location

### Mail Control (12 tools)

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

### Maps Integration (4 tools)

- `search_places` - Search for locations and places
- `get_directions` - Get directions between locations
- `explore_places` - Explore nearby places and points of interest
- `calculate_eta` - Calculate estimated time of arrival

### Messages Control (5 tools)

- `check_messages_permission` - Check Messages app permissions
- `search_chats` - Search for message conversations
- `search_messages` - Search for specific messages
- `get_chat` - Get details of a specific chat conversation
- `send_message` - Send text messages via Messages app

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

Raycast supports direct SSE connections:

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

### Other MCP Clients (SSE Mode)

For clients that don't support SSE natively, use the `mcp-remote` proxy:

```json
{
  "mcpServers": {
    "macuse": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "http://127.0.0.1:35729/mcp",
        "--transport",
        "sse-only",
        "--header",
        "Authorization=Bearer your-token-here"
      ]
    }
  }
}
```

## Troubleshooting

### Permissions Issues

**Accessibility Permission Not Working**
1. Go to **System Preferences** → **Security & Privacy** → **Privacy** → **Accessibility**
2. Remove Macuse from the list if present
3. Re-add Macuse by clicking the **+** button
4. Restart Macuse

**Calendar/Contacts/Reminders Access Denied**
1. Go to **System Preferences** → **Security & Privacy** → **Privacy**
2. Select the specific service (Calendar, Contacts, or Reminders)
3. Check the box next to Macuse
4. Restart Macuse if needed

### Connection Issues

**AI Client Can't Connect**
- Verify your access token is correctly configured
- For SSE mode, ensure port 35729 is not blocked by firewall
- Check that Macuse is running and the token is valid
- Restart both Macuse and your AI client

**Token Authentication Failed**
- Regenerate a new token in the Macuse app
- Update your AI client configuration with the new token
- Ensure there are no extra spaces in the token string

**Port Conflicts (SSE Mode)**
- If port 35729 is in use, stop other applications using it
- Port 35729 is currently fixed and cannot be changed
- Ensure no other applications are using this port

### Performance Issues

**Slow Response Times**
- Close unnecessary applications to free up system resources
- Check if multiple AI clients are making simultaneous requests
- Restart Macuse if it becomes unresponsive

**UI Automation Not Working**
- Ensure the target application is running and visible
- Some applications may require specific focus or window state
- Try clicking on the target application first

## Frequently Asked Questions

### General Usage

**Q: Can I use multiple AI clients with Macuse simultaneously?**
A: Yes, Macuse supports concurrent connections from multiple AI clients. Each client will receive responses to their own requests.

**Q: Is my data safe? Does Macuse send information to the cloud?**
A: Macuse processes everything locally on your Mac. No data is sent to external servers. Your calendar, contacts, and other information stay on your device.

**Q: How do I reset my access token?**
A: Open the Macuse app, go to the Token section, and click "Generate New Token". Update your AI client configurations with the new token.

**Q: Can Macuse work with apps that aren't mentioned in the feature list?**
A: Yes! The UI Inspector and Interaction tools work with any macOS application that supports accessibility APIs. Native integrations are available for Calendar, Mail, Notes, Reminders, Contacts, Maps, and Messages.

### Technical Questions

**Q: What's the difference between stdio and SSE modes?**
A: Stdio mode uses direct process communication (recommended for Claude Desktop and Cursor). SSE mode uses HTTP Server-Sent Events (required for Raycast AI and web-based clients).

**Q: How do I change the SSE port from 35729?**
A: Currently, the SSE port is fixed at 35729. Port configuration will be available in a future update.

**Q: Why do some operations seem slow?**
A: UI automation requires time for visual elements to load and respond. Macuse includes appropriate delays to ensure reliable operation across different apps and system speeds.

**Q: Can I automate apps that require admin privileges?**
A: Macuse can interact with apps that have elevated privileges, but you may need to grant additional permissions or run those apps normally (not with sudo).

### Privacy & Security

**Q: What permissions does Macuse need and why?**
A: Macuse needs Accessibility (for UI control), Calendar/Contacts/Reminders (for native integrations), and optionally Location Services (for Maps features). These permissions are used only for the features you actively use.

**Q: How secure is the token authentication?**
A: Tokens are securely generated and stored locally. They're bound to your specific Mac using hardware fingerprinting. Tokens can be regenerated at any time.

## Updates & Maintenance

### Checking for Updates

Macuse automatically checks for updates when launched. You can also manually check:
1. Open the Macuse app
2. Go to **About** section
3. Click **Check for Updates**

### Installing Updates

When an update is available:
1. Click **Download** in the update notification
2. Quit Macuse completely
3. Replace the old app with the new version
4. Launch the new version and verify your settings

### Version History

Current version: **0.9.0**

**Recent Changes:**
- Added Location Services and Maps integration
- Enhanced permission handling
- Improved Messages and Contacts toolboxes
- Better error handling and diagnostics

For detailed changelog, see [CHANGELOG.md](CHANGELOG.md)

### Backup & Data

Your settings and tokens are automatically backed up in:
```
~/Library/Application Support/Macuse/
```

Before major updates, consider backing up this folder.

## Known Limitations

### Application Compatibility

**Fully Supported Apps:**
- All native macOS apps (Calendar, Mail, Notes, Reminders, Contacts, Messages)
- Most standard macOS applications
- Apps that properly implement accessibility APIs

**Limited Support:**
- Some third-party apps may have restricted accessibility access
- Apps with non-standard UI elements may require specific targeting
- Web content within apps requires specific element identification

### Performance Considerations

- **UI Operations**: Some actions may take 1-2 seconds for visual feedback
- **Large Data Sets**: Operations on thousands of emails/contacts may be slower
- **Concurrent Requests**: Multiple simultaneous AI clients may experience delays
- **System Resources**: Heavy UI automation may temporarily increase CPU usage

### Security Restrictions

- **Sandboxed Apps**: Some Mac App Store apps have limited accessibility
- **System Dialogs**: Cannot automate password prompts or security dialogs
- **Admin Operations**: Cannot perform actions requiring administrator privileges
- **Protected Content**: Cannot access password fields or secure payment forms

### Feature Limitations

- **Cross-Application Drag & Drop**: Not currently supported
- **File Dialog Automation**: Limited support for complex file operations
- **Multi-Monitor**: UI targeting works best on primary display
- **VoiceOver Integration**: May conflict with running VoiceOver

## Resources

- [Issue Tracker](https://github.com/macuse-app/macuse/issues)
- [Support](mailto:support@macuse.app)

---

<p align="center">
  <strong>Ready to give your AI superpowers?</strong><br>
  <a href="https://macuse.app/download/">Download Macuse</a> and transform how you work with AI
</p>
