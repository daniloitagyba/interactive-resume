# Deployment Guide: Linux VM with Cloudflare Tunnel

This guide explains how to deploy your React/Vite application on a Linux Virtual Machine (VM) and expose it securely to the internet using **Cloudflare Tunnel**. This method is highly secure as it **does not require opening any inbound ports (like 80 or 443) in your firewall**.

## Prerequisites
1. A Linux VM (Ubuntu/Debian recommended).
2. A domain name managed by Cloudflare.
3. Node.js installed on the VM.

---

## Step 1: Prepare Your Application

1. **Clone and Build**:
   On your VM, clone the repository and build the project:
   ```bash
   git clone https://github.com/daniloitagyba/interactive-resume.git
   cd interactive-resume 
   npm install && npm run build
   ```

2. **Serve the Application**:
   Install a lightweight server like `serve` and use `pm2` to keep it running in the background:
   ```bash
   sudo npm install -g serve pm2
   pm2 start "serve -s dist -l 3000" --name "interactive-resume"
   pm2 save
   ```
   *Your app is now running locally on port 3000.*

---

## Step 2: Install Cloudflared

Create a Cloudflare Tunnel via the dashboard at https://one.dash.cloudflare.com/

## Updating the Application on the VM

   ```bash
cd interactive-resume && git pull && npm install && npm run build && pm2 restart interactive-resume
   ```