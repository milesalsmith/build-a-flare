🔥 Build-a-Flare
An ultra-modern, high-performance E-commerce platform built with the Next.js 16 "Bleeding Edge" stack. This project moves away from traditional resource-heavy deployments toward a streamlined Local-Build-to-Origin architecture.

🏗️ The Stack
Framework: Next.js 16 (App Router & Turbopack)

Library: React 19 (React Compiler enabled)

Styling: Tailwind CSS 4.0 (OKLCH Color Engine)

Infrastructure: DigitalOcean 8GB Premium AMD Droplet

Runtime: Node.js 20 LTS managed by PM2

Web Server: Nginx (Reverse Proxy)

🚀 Infrastructure Architecture
Unlike standard deployments that build on the server, Build-a-Flare utilizes a "Mac-as-the-Engine" strategy:

Innovation Layer: Development and compilation happen locally on macOS.

Sync Layer: Optimized production bundles are beamed to the origin via rsync.

Production Layer: The 8GB Droplet focuses 100% of its resources on serving traffic and handling the database.

🛠️ Development Workflow
Local Development
Bash
npm run dev
Open http://localhost:3000 to view the live development server with HMR.

Deployment (The "One-Command" Push)
The project includes a custom deploy.sh script that handles the local build, remote synchronization, and server-side process resurrection.

Bash
chmod +x deploy.sh # Only needed once
./deploy.sh
🛡️ Server Management
The production environment is hardened for stability:

Process Management: Managed by PM2 with auto-resurrection on system reboots.

Static Assets: Served via Nginx with optimized caching headers for /_next/static.

Networking: Locked to a Reserved IP for zero-downtime hardware migrations.

🎯 Project Roadmap
[x] High-performance 8GB Origin Setup

[x] OKLCH / Tailwind 4 Design System

[x] Local-to-Edge Deployment Pipeline

[ ] Prisma & PostgreSQL Integration (Current Phase)

[ ] React 19 Server Actions for "Add to Cart"

[ ] Cloudflare Tunnel "Stealth Mode"