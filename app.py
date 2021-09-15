from flask import Flask, request, session, jsonify, send_from_directory, redirect
from flask import send_file
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "1234567890лормс"#os.environ["SESSION_KEY"].encode()
CORS(app)

@app.route("/")
def main_page():
    return send_file("./static/index.html")

#app.run()