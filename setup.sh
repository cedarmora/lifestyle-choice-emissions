#!/bin/bash
sudo apt update
sudo apt install -y git
sudo apt install -y npm
sudo apt install -y docker docker-compose
cd web
npm install --prefix web
cd ..