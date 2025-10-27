# Windows Setup Guide

This guide helps Windows developers get the project running smoothly and addresses common Windows-specific issues.

## 1) Install Node.js and npm

Option A — nvm-windows (recommended):
- Download and install nvm-windows: https://github.com/coreybutler/nvm-windows/releases
- Install an LTS Node.js version (>= 18 is recommended):
  - PowerShell:
    - nvm install 18.20.4
    - nvm use 18.20.4
- Verify:
  - node -v
  - npm -v

Option B — Official MSI:
- Download LTS from https://nodejs.org/en/download
- Run the installer and accept defaults, then verify with node -v and npm -v

## 2) Clone and install

- git clone https://github.com/nst-sdc/site.git
- cd site
- npm install

If Windows Defender or your firewall prompts, allow Node.js for local network access so the dev server can open http://localhost:3000.

## 3) Run the dev server

- npm start
- The app opens at http://localhost:3000

Change port on Windows (if 3000 is busy):
- PowerShell:
  - $env:PORT=3001; npm start
- Command Prompt (cmd.exe):
  - set PORT=3001 && npm start

To stop a stray process on port 3000 (PowerShell):
- Get-Process -Id (Get-NetTCPConnection -LocalPort 3000 -State Listen).OwningProcess | Stop-Process -Force

## 4) Optional: HTTPS dev certificates

If you need HTTPS locally (for APIs, cookies, etc.), you can use mkcert to generate a trusted local certificate.

Install mkcert on Windows:
- If you use Chocolatey: choco install mkcert
- Or download a release: https://github.com/FiloSottile/mkcert/releases and put mkcert.exe in your PATH

Generate and trust a local CA and certs:
- mkcert -install
- mkdir -p .cert
- mkcert -key-file .cert/localhost-key.pem -cert-file .cert/localhost.pem "localhost" 127.0.0.1 ::1

Create a .env file in the repo root to enable HTTPS in Create React App:
- PowerShell:
  - Set-Content -Path .env -Value "HTTPS=true`nSSL_CRT_FILE=.cert/localhost.pem`nSSL_KEY_FILE=.cert/localhost-key.pem"

Start the server:
- npm start (opens https://localhost:3000)

## 5) Corporate proxy / SSL interception (npm install errors)

If npm install fails with certificate errors (SELF_SIGNED_CERT_IN_CHAIN), configure npm to use your organization’s root CA instead of disabling SSL:

Steps:
1) Export your organization root CA certificate to a file (e.g., C:\certs\corp-root-ca.pem). Your IT/security team can provide this.
2) Point npm to the CA file:
   - npm config set cafile "C:\\certs\\corp-root-ca.pem"
3) Verify:
   - npm config get cafile
4) Retry:
   - npm install

Avoid using "npm config set strict-ssl false"; prefer the cafile approach for security.

## 6) Troubleshooting on Windows

- Clean install:
  - rmdir /s /q node_modules (cmd) or Remove-Item -Recurse -Force node_modules (PowerShell)
  - del package-lock.json (cmd) or Remove-Item package-lock.json (PowerShell)
  - npm cache clean --force
  - npm install

- Long path issues:
  - Enable long paths (Windows 10/11): set the registry value LongPathsEnabled=1 under HKLM\SYSTEM\CurrentControlSet\Control\FileSystem or use Group Policy "Enable Win32 long paths".

- Ensure Node.js version:
  - Node >= 14 (LTS 18+ recommended). Use nvm-windows to switch if needed.
