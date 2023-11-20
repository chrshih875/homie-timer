# homie-timer
1. INSTALLING NODEJS/NPM
sudo apt-get update
sudo apt-get upgrade
sudo apt install nodejs
sudo apt install npm


2. INSTALLING MONGO
sudo apt-get install gnupg curl
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get install -y mongodb-org
sudo systemctl enable mongod

3. INSTALL NODEJS
sudo curl -sL https://deb.nodesource.com/setup_16.x | bash -
sudo apt-get install nodejs -y
node -v

4. INSTALL NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm --version
nvm install 20.9.0
nvm use 20.9.0

5. INSTALL EXPRESS
mkdir server; cd server
npm init -y
cd ..
npm install cors express mongodb mongoose nodemon
