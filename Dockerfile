FROM python:3.8

WORKDIR /app
COPY requirements.txt /app
RUN pip3 install -r requirements.txt
COPY . /app
EXPOSE 5000
ENTRYPOINT ["python3"]
CMD ["app.py"]