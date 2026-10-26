---
name: meta-automation
description: >
  End-to-end agentic automation runtime for browser-based social media and job workflows.
  Supports Threads, Instagram, Facebook, LinkedIn, Upwork, and Freelancer.
  Executes CDP live-DOM observation, lead qualification, comment/DM synthesis,
  and automated proposal submission with safety gates and approval workflows.
metadata:
  homepage: https://github.com/sunmughan/meta-automation
---

# Meta Automation (Agentic Automation v2.0)

End-to-end agentic automation runtime that learns a user's identity and business context, reasons over live browser state via CDP, executes verified actions, and operates across social and job platforms.

## Commands

Executable: `meta-automation` (or `node threads-agent.js` inside `/home/thededax/Documents/skills/meta-automation`)

### Social Automation (Threads / Instagram / Facebook / LinkedIn)

- **Onboard Identity & Context**: `meta-automation onboard`
- **Check Auth Status**: `meta-automation auth`
- **Scan New Posts**: `meta-automation scan`
- **Analyze Leads & Synthesize Actions**: `meta-automation analyze`
- **Review Pending Approvals**: `meta-automation approve`
- **Handle Incoming Replies**: `meta-automation replies`
- **Handle Direct Messages**: `meta-automation dms`
- **System & Rate-Limit Status**: `meta-automation status`
- **Continuous Run**: `meta-automation run`

### Job Engine (Freelancer, Upwork, Contra, etc.)

Location: `/home/thededax/Documents/skills/meta-automation`

- **Setup**: `npm run jobs:setup`
- **Auth**: `npm run jobs:auth`
- **Scan Opportunities**: `npm run jobs:scan`
- **Run Discovery & Applications**: `npm run jobs:run`
- **Job Engine Status**: `npm run jobs:status`

## Safety & Operating Principles

1. **DRY_RUN & APPROVAL_MODE**: Defaults to simulation mode where all actions are evaluated and approved without publishing directly.
2. **CDP Connection**: Attaches to Chrome/Brave/Chromium via remote debugging port (default `http://127.0.0.1:9222`).
3. **Identity-Grounded**: Prompts dynamically use the knowledge files in `knowledge/` and `private/user-profile.json`.
