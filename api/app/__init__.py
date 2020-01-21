from flask import Flask
# from flask_cors import CORS
import os

# Initialize app
app = Flask(__name__)
# frontend_url = os.environ.get('FRONTEND_URL')
# cors = CORS(app, resources={r"/*": {"origins": frontend_url}})


# Load views
from app import views

# Load config
app.config.from_object('config')