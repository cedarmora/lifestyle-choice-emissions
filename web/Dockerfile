FROM python:3.8-alpine

WORKDIR /app
COPY requirements.txt /app
RUN pip3 install -r requirements.txt
COPY . /app
CMD ["flask", "run"]