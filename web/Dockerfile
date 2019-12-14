FROM python:3.8-alpine

WORKDIR /app
COPY requirements.txt /app
RUN pip3 install -r requirements.txt
RUN apk add --update npm
COPY package-lock.json /app
COPY package.json /app
COPY webpack.config.js /app
COPY . /app
# optimze layers later
RUN npm install
RUN npm run build
CMD ["flask", "run"]