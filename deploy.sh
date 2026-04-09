#!/bin/bash
# deploy.sh (Final High-Performance Version)

# 1. BUILD
echo "🚀 Step 1: Building locally on Mac..."
npm run build

# 2. SYNC (The "Force-Feed" logic)
echo "📦 Step 2: Syncing to the 8GB Droplet..."
rsync -avz --delete package.json next.config.ts flare:/var/www/build-a-flare/
rsync -avz --delete .next/ flare:/var/www/build-a-flare/.next/
rsync -avz --delete public/ flare:/var/www/build-a-flare/public/

# 3. RESTART
echo "♻️  Step 3: Refreshing server..."
ssh flare "cd /var/www/build-a-flare && npm install --production && pm2 restart build-a-flare || pm2 start npm --name 'build-a-flare' -- start"

echo "✨ DONE! buildaflare.com is live and stable."