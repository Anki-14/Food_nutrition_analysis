from flask import Flask, jsonify, request
import pandas as pd
import numpy as np
import os
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots


app = Flask(__name__)

# Load and clean data once when the server starts
def load_data():
    file_path = os.environ.get('NUTRIENT_CSV_PATH', 'food_analysis_dataset/nutrients_csvfile.csv')

# Read the CSV file
    nutrients = pd.read_csv(file_path)
    nutrients = nutrients.replace("t", 0).replace("t'", 0)
    nutrients = nutrients.replace(",", "", regex=True)
    nutrients['Fiber'] = nutrients['Fiber'].replace("a", "", regex=True)
    nutrients.loc[91, 'Calories'] = (8 + 44) / 2  # Correct the entry using .loc
    for column in ['Grams', 'Calories', 'Protein', 'Fat', 'Sat.Fat', 'Fiber', 'Carbs']:
        nutrients[column] = pd.to_numeric(nutrients[column], errors='coerce')
    nutrients = nutrients.dropna()  # Drop rows with null values
    return nutrients

# Define a class for prediction and analysis
class FoodNutritionModel:
    def __init__(self, nutrient_data):
        self.nutrient_data = nutrient_data

    def predict(self, data):
        """
        Example prediction logic:
        - Input: JSON data specifying nutrient preferences (e.g., high protein, low fat)
        - Output: Filtered list of foods meeting the criteria
        """
        # Ensure input is a dictionary
        if not isinstance(data, dict):
            raise ValueError("Input data must be a dictionary.")

        # Extract filters from input data
        nutrient_preferences = data.get("preferences", {})
        filtered_data = self.nutrient_data

        # Apply filters (e.g., high protein, low fat)
        for nutrient, threshold in nutrient_preferences.items():
            if nutrient in filtered_data.columns:
                filtered_data = filtered_data[filtered_data[nutrient] >= threshold]

        # Sort by a key nutrient if provided
        sort_by = data.get("sort_by", "Calories")
        if sort_by in filtered_data.columns:
            filtered_data = filtered_data.sort_values(by=sort_by, ascending=False)

        # Limit the number of results
        top_n = data.get("top_n", 5)
        return filtered_data.head(top_n).to_dict(orient='records')

# Load data at startup
nutrients = load_data()

# Instantiate the model
nutrition_model = FoodNutritionModel(nutrients)

# Example endpoint: Top Protein Rich Foods
@app.route('/top_protein_foods', methods=['GET'])
def get_top_protein_foods():
    protein_rich = nutrients.sort_values(by='Protein', ascending=False).head(20)
    data = protein_rich[['Food', 'Protein']].to_dict(orient='records')
    return jsonify(data)

# Example endpoint: Top Calorie Rich Foods
@app.route('/top_calorie_foods', methods=['GET'])
def get_top_calorie_foods():
    top_calorie_foods = nutrients.sort_values(by='Calories', ascending=False).head(20)
    data = top_calorie_foods[['Food', 'Calories']].to_dict(orient='records')
    return jsonify(data)

# Example endpoint: Generate a protein bar chart
@app.route('/protein_bar_chart', methods=['GET'])
def protein_bar_chart():
    protein_rich = nutrients.sort_values(by='Protein', ascending=False).head(20)
    fig = px.bar(protein_rich, x='Food', y='Protein', color='Protein', title='Top 20 Protein Rich Foods')
    fig.write_image("protein_bar_chart.png")  # Save chart as image
    return jsonify({"message": "Protein bar chart saved as protein_bar_chart.png"})

# Example endpoint: Fat Content Analysis
@app.route('/fat_content_analysis', methods=['GET'])
def fat_content_analysis():
    fats = nutrients.sort_values(by='Fat', ascending=False).head(20)
    fig = px.bar(fats, x='Food', y='Fat', color='Fat', title='Top 20 Fat-Rich Foods')
    fig.write_image("fat_content_analysis.png")
    return jsonify({"message": "Fat content analysis saved as fat_content_analysis.png"})

# Example endpoint: Category-Wise Distribution of Nutrients
@app.route('/category_distribution', methods=['GET'])
def category_distribution():
    category_dist = nutrients.groupby(['Category']).sum()
    fig = make_subplots(
        rows=2, cols=3,
        specs=[[{"type": "domain"}, {"type": "domain"}, {"type": "domain"}],
               [{"type": "domain"}, {"type": "domain"}, {"type": "domain"}]]
    )

    fig.add_trace(go.Pie(values=category_dist['Calories'].values, title='Calories', labels=category_dist.index, 
                         marker=dict(colors=['#100b', '#f00560'], line=dict(color='#FFFFFF', width=2.5))),
                  row=1, col=1)
    fig.add_trace(go.Pie(values=category_dist['Fat'].values, title='Fat', labels=category_dist.index, 
                         marker=dict(colors=['#100b', '#f00560'], line=dict(color='#FFFFFF', width=2.5))),
                  row=1, col=2)
    fig.add_trace(go.Pie(values=category_dist['Protein'].values, title='Protein', labels=category_dist.index, 
                         marker=dict(colors=['#100b', '#f00560'], line=dict(color='#FFFFFF', width=2.5))),
                  row=1, col=3)
    fig.add_trace(go.Pie(values=category_dist['Fiber'].values, title='Fiber', labels=category_dist.index, 
                         marker=dict(colors=['#100b', '#f00560'], line=dict(color='#FFFFFF', width=2.5))),
                  row=2, col=1)
    fig.add_trace(go.Pie(values=category_dist['Sat.Fat'].values, title='Saturated Fat', labels=category_dist.index, 
                         marker=dict(colors=['#100b', '#f00560'], line=dict(color='#FFFFFF', width=2.5))),
                  row=2, col=2)
    fig.add_trace(go.Pie(values=category_dist['Carbs'].values, title='Carbs', labels=category_dist.index, 
                         marker=dict(colors=['#100b', '#f00560'], line=dict(color='#FFFFFF', width=2.5))),
                  row=2, col=3)

    fig.update_layout(title_text="Category Wise Distribution of Nutrients", height=700, width=1000)
    fig.write_image("category_distribution.png")
    return jsonify({"message": "Category distribution saved as category_distribution.png"})

# Example endpoint: Foods with the Most Calories
# @app.route('/top_calories_foods', methods=['GET'])
# def top_calories_foods():
#     cals = nutrients.sort_values(by='Calories', ascending=False).head(20)
#     data = cals[['Food', 'Calories']].to_dict(orient='records')
#     return jsonify(data)

# Example endpoint: Foods with the Most Protein
@app.route('/protein_foods', methods=['GET'])
def protein_foods():
    prot = nutrients[nutrients['Category'].isin(['Vegetables A-E', 'Vegetables F-P', 'Vegetables R-Z', 'Breads cereals fastfoodgrains', 'Seeds and Nuts'])]
    protein_rich = prot.sort_values(by='Protein', ascending=False).head(20)
    data = protein_rich[['Food', 'Protein']].to_dict(orient='records')
    return jsonify(data)

# Endpoint to predict based on user input
@app.route('/predict', methods=['POST'])
def predict():
    """
    Accepts JSON input with preferences and returns recommended foods.
    Example input:
    {
        "preferences": {"Protein": 10, "Fat": 5},
        "sort_by": "Protein",
        "top_n": 3
    }
    """
    try:
        input_data = request.json
        if not input_data:
            return jsonify({"error": "No input data provided"}), 400

        predictions = nutrition_model.predict(input_data)
        return jsonify(predictions)

    except ValueError as e:
        return jsonify({"error": str(e)}), 400

    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))


