from flask import jsonify
from app import app

@app.route('/api')
def index():
    return jsonify('{urbanite: "hey", ruralist: "hey"}')