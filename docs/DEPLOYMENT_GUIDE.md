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
   git clone <your-repo-url>
   cd portifolio
   npm install
   npm run build
   ```

2. **Serve the Application**:
   Install a lightweight server like `serve` and use `pm2` to keep it running in the background:
   ```bash
   sudo npm install -g serve pm2
   pm2 start "serve -s dist -l 3000" --name "portfolio"
   pm2 save
   ```
   *Your app is now running locally on port 3000.*

---

## Step 2: Install Cloudflared

On the Linux VM, install the Cloudflare Tunnel client:

```bash
# Add Cloudflare GPG key
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

# Add Cloudflare repository
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared bullseye main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# Install cloudflared
sudo apt update && sudo apt install cloudflared
```

---

## Step 3: Authenticate and Create Tunnel

1. **Login**:
   ```bash
   cloudflared tunnel login
   ```
   *Click the link provided in the terminal to authorize your account.*

2. **Create the Tunnel**:
   ```bash
   cloudflared tunnel create portfolio-tunnel
   ```
   *Note the ID generated (e.g., `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).*

---

## Step 4: Configure the Tunnel

Create a configuration file in `~/.cloudflared/config.yml`:

```yaml
tunnel: <YOUR_TUNNEL_ID>
credentials-file: /home/<USER>/.cloudflared/<YOUR_TUNNEL_ID>.json

ingress:
  - hostname: portfolio.yourdomain.com
    service: http://localhost:3000
  - service: http_status:404
```

---

## Step 5: Route DNS and Run

1. **Route the Domain**:
   Connect your hostname to the tunnel:
   ```bash
   cloudflared tunnel route dns portfolio-tunnel portfolio.yourdomain.com
   ```

2. **Run the Tunnel as a Service**:
   To ensure the tunnel starts automatically after a reboot:
   ```bash
   sudo cloudflared service install
   sudo systemctl start cloudflared
   sudo systemctl enable cloudflared
   ```

---

## Summary of Benefits
- **No Open Ports**: Your VM's firewall can stay 100% closed to inbound traffic.
- **DDoS Protection**: Traffic goes through Cloudflare's edge before reaching your VM.
- **SSL by Default**: Cloudflare handles the HTTPS certificate automatically.
