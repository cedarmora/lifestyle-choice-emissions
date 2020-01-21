from flask import Flask
import os

# Initialize app
app = Flask(__name__)


# Load views
from app import views

# Load config
app.config.from_object('config')