# backend/app.py
from flask import Flask
from flask_cors import CORS
from routesfinal.prediction import prediction_blueprint

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Register the prediction route
app.register_blueprint(prediction_blueprint, url_prefix='/api/predict')

@app.route('/')
def home():
    return "Flask server is running!"

# @app.route('/health')
# def health_check():
#     return jsonify({"status": "healthy"}), 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)
