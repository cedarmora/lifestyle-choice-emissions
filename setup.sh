#!/bin/bash
sudo apt update
sudo apt install -y git
sudo apt install -y npm
sudo apt install -y docker docker-compose
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
