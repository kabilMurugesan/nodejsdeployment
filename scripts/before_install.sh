# !/bin/bash

sudo apt-get update
sudo npm install nodemon -g
sudo pm2 delete all
sudo pm2 flush               