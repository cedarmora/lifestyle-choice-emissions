FROM python:3.8-alpine

WORKDIR /app
COPY requirements.txt /app
RUN pip3 install -r requirements.txt
RUN apk add --update npm
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD ["flask", "run"]