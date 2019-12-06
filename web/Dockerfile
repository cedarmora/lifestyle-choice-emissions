FROM python:3.8-alpine

WORKDIR /app
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_ENV development
COPY requirements.txt /app
RUN pip3 install -r requirements.txt
COPY . /app
CMD ["flask", "run"]