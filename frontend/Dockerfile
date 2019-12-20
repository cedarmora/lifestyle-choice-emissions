FROM node:13.4-alpine

WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]