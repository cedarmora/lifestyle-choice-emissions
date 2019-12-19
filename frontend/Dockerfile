FROM node:13.4-alpine

WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
# optimize layers later
RUN npm install
COPY . /app
CMD ["npm", "start"]