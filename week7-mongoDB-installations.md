# Installation Instructions for MongoDB

## Windows 

### Step 1: Download MongoDB
 - Go to the [MongoDB download center](https://www.mongodb.com/try/download/community)and select "MongoDB Community Server."
 - Choose the latest version for your Windows architecture (e.g., MSI installer).
 - Click Download

### Step 2: Run the installer
 - Open the downloaded .msi file.
 - Follow the installation steps, selecting "Complete" setup.
 - In the Service Configuration, leave the default settings to run MongoDB as a Windows Service.

### Step 3: Add MongoDB to PATH
 1. Open the directory where MongoDB was installed (default: C:\Program Files\MongoDB\Server\<version>\bin).
 2. Add this path to your system’s Environment Variables:
    - Go to ***Control Panel > System and Security > System > Advanced System Settings > Environment Variables.***
    - Under ***System variables***, find and edit the Path variable, adding the MongoDB bin path. 

### Step 4: Start MongoDB
 - Open a command prompt and start MongoDB with:
  ```bash
    mongod
  ```
 - To confirm installation, type:
 ```bash
    mongo 
  ```
 
##  Install MongoDB on macOS
### Step 1: Install Homebrew (if not already installed)
 ```bash 
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

### Step 2: Install MongoDB
 ```bash 
    brew tap mongodb/brew
    brew install mongodb-community
```

### Step 3: Start MongoDB
To start MongoDB run:
 ```bash 
    brew services start mongodb/brew/mongodb-community
```

### Step 4: Verify installation
- Open a new Terminal window and run:
 ```bash
    mongo 
```

## Install MongoDB on Ubuntu

### Step 1: Import the Public Key
Run the following command to import the MongoDB GPG key:
 ```bash
    curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor 
```

### Step 2: Create a MongoDB Source List
Add MongoDB to the apt source list:
 ```bash
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

### Step 3: Install MongoDB
1. Update the package list:
 ```bash
    sudo apt update
```

2. Install MongoDB:
 ```bash
    sudo apt install -y mongodb-org
```

### Step 4: Start MongoDB
- Start MongoDB with:
 ```bash
    sudo systemctl start mongod
```
- Enable MongoDB to start on boot:
- Start MongoDB with:
 ```bash
    sudo systemctl enable mongod
```
To check the status:
 ```bash
    sudo systemctl status mongod
```

After installation, you can access the MongoDB shell by running:
 ```bash
    mongo
```