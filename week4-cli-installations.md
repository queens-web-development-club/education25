# Installations for macOS

## Homebrew

1. Go to [Homebrew's Homepage](https://brew.sh/)
2. Copy the command and paste it in your terminal

## iTerm2

### Option 1 - Install with Homebrew

```bash
brew install iterm2
```

### Option 2 - Install on the web

1. Go to [iTerm2's Homepage](https://iterm2.com/)
2. Install the app

# Installations for Windows

## Windows Terminal

- Open Microsoft Store
- Search “Windows Terminal”
- Click Install
- Done!

## Git Bash

- Included in download of Git for Windows
- Download installer for Windows at the link below
- It will ask you at some point if you would like to install Git Bash
- Click Yes

[Download Page](https://git-scm.com/downloads)

## WSL2

- It’s an optional Windows feature that is already built into the OS

### Option 1 - PowerShell

- In the Windows search bar, look up "PowerShell" and click "Run as Administrator"
- Type the following command and press enter:

```
  wsl --install
```

- This should enable the features necessary to run WSL and install the Ubuntu distribution of Linux by default

### Option 2 - Manually

- In the Windows search bar, look up “Turn Windows features on or off”, and open it
- Find “Windows Subsystem for Linux” in the list and check the box to enable it
- Find "Virtual Machine Platform" in the list and check the box to enable it
- Apply changes and restart
- Open Microsoft Store
- Search for a Linux distro to install. Ubuntu is recommended
- Install

You may be asked to restart your computer after any of these steps to ensure changes are made properly.
When all is done you should be able to look up "Ubuntu" in the Windows search bar.
If you run into any issues you might need to ensure CPU Virtualization is enabled in BIOS. Refer to
laptop or motherboard manufacturer for details on this.

[Microsoft WSL Installation Page](https://learn.microsoft.com/en-us/windows/wsl/install)
