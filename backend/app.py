from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(os.getenv("MONGO_URI", "mongodb://localhost:27017/"))
db = client["livestream_app"]
collection = db["overlays"]

@app.route('/')
def home():
    return jsonify({"message": "Backend is running!"})

@app.route('/overlay', methods=['POST'])
def create_overlay():
    data = request.json
    collection.insert_one(data)
    return jsonify({"message": "Overlay created successfully"}), 201

@app.route('/overlay', methods=['GET'])
def get_overlays():
    overlays = list(collection.find({}, {"_id": 0}))
    return jsonify(overlays)

@app.route('/overlay/<string:name>', methods=['PUT'])
def update_overlay(name):
    data = request.json
    collection.update_one({"name": name}, {"$set": data})
    return jsonify({"message": "Overlay updated"})

@app.route('/overlay/<string:name>', methods=['DELETE'])
def delete_overlay(name):
    collection.delete_one({"name": name})
    return jsonify({"message": "Overlay deleted"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
