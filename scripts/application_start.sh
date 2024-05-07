#!/bin/bash
cd /home/ubuntu/nodejs
pm2 delete server
sudo pm2 start index.js