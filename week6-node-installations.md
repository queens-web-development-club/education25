# Installation

## Option 1: Install Using the Installer from Node.js Website

1. Go to the [Node.js Website](https://nodejs.org/en)
2. Download the installer 

3. Run the Installer
    - Follow the instalation instructions

4. Verify installation
    - Open a terminal (macOS) or Command Prompt/PowerShell (Windows).
    - Run the following command to check your Node.js and npm versions:

     ```bash
        node -v
        npm -v
    ```
    - You should see the version numbers, which means Node.js is installed.


## Option 2: Using a Package Manager 
### For macOS: Using Homebrew

1. Install Homebrew
```bash
    -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. install Node.js
```bash
    brew install node
```

3. Verify installation
 ```bash
    node -v
    npm -v
```

### For Windows: Using Chocolatey
1. Install Chocolatey
```bash
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

2. Install Node.js
```bash
    choco install node
```

3. Verify installation
 ```bash
    node -v
    npm -v
```

# Option 3: Install using WSL


1. Open your terminal or press Ctrl + Alt + T.

2. To install node.js use the following command:
 ```bash
   sudo apt install nodejs
```
3. Verify Installation

 ```bash
   node -v or node --version
```

Note: It is reccommended to install [Node Package Manager](https://www.geeksforgeeks.org/node-js-npm-node-package-manager/) (NPM) with Node.js

To install NPM, use the following commands:
 ```bash
   sudo apt install npm 
```

Verify Installation
 ```bash
   npm -v or npm --version 
```