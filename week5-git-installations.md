# Git Installations for macOS

## Install with Homebrew

```bash
brew install git
```

## Install with MacPorts

```bash
sudo port install git
```

## XCode

If you have XCode already installed, its command-line tools include git in the package.
If XCode is running, you can verify if git is available by checking its version

```bash
git --version
```

## Open-Source Git Installer

1. You can find an [installer](https://sourceforge.net/projects/git-osx-installer/files/) here

   - Note that the latest version of this is 2.33.0, which was released 2021-08-30


# Git Installations for Windows

## Install on WSL2

1. Open WSL2. The following steps will require you to type commands into the CLI
2. First ensure your package list is updated with
```bash
sudo apt update
```
3. Upgrade your packages with
```bash
sudo apt upgrade
```
4. Install git using
```bash
sudo apt install git
```
5. Verify Git is installed by checking version
```bash
git --version
```

## Install for Windows

If you followed link in week4-cli-installations.md to install Git bash, you already have Git installed!
If not, go to [https://git-scm.com/downloads](https://git-scm.com/downloads) and follow instructions to install Git for Windows.


# GitHub SSH Setup

1. [Generate a SSH key pair](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
2. [Put your public key on your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
