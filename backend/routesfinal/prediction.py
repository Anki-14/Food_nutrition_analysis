from flask import Blueprint, request, jsonify
import pandas as pd
import os
from werkzeug.utils import secure_filename
from Food_Nutrition_Analysis import FoodNutritionModel  # Import the class from Food_Nutrition_Analysis.py

# Create a blueprint for the prediction routes
prediction_blueprint = Blueprint('prediction', __name__)

# Load the pre-trained model and data (assuming this is the pre-loaded nutrient data from your Food_Nutrition_Analysis.py)
def load_data():
    file_path = os.getenv('NUTRIENT_CSV_PATH', 'food_analysis_dataset/nutrients_csvfile.csv')
    nutrients = pd.read_csv(file_path)
    # Add any necessary data cleaning and preparation steps here as in Food_Nutrition_Analysis.py
    nutrients['Calories'] = pd.to_numeric(nutrients['Calories'], errors='coerce')
    nutrients = nutrients.dropna()  # Drop rows with null values
    return nutrients

# Instantiate the FoodNutritionModel with the nutrient data
nutrient_data = load_data()
nutrition_model = FoodNutritionModel(nutrient_data)

# Directory to store uploaded files temporarily
UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@prediction_blueprint.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    try:
        data = pd.read_csv(file_path)
        required_columns = ["Food", "Measure", "Grams", "Calories", "Protein", "Fat", "Sat.Fat", "Fiber", "Carbs", "Category"]
        if not all(column in data.columns for column in required_columns):
            return jsonify({'error': 'Invalid file format. Missing required columns.'}), 400
    except Exception as e:
        return jsonify({'error': f'Error processing file: {str(e)}'}), 500

    return jsonify({'message': 'File uploaded successfully', 'file_path': file_path}), 200

@prediction_blueprint.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.json  # Get the preferences, sort_by, top_n, etc., from the request

        # Ensure the input_data is valid
        if not input_data:
            return jsonify({"error": "No input data provided"}), 400

        # Call the predict method from FoodNutritionModel
        predictions = nutrition_model.predict(input_data)

        # Return predictions
        return jsonify(predictions)

    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500
