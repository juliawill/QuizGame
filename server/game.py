# flask - python web framework
from flask import jsonify, Flask
from flask_cors import CORS

# initialize application
app = Flask(__name__)
# flask cors allows you to make requests to a diff domain
CORS(app)

questions = [
    {
        "id": 1,
        "category": "Geography",
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Lisbon"],
        "answer": "Paris"
    },
    {
        "id": 2,
        "category": "Math",
        "question": "What is 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "answer": "4"
    },
    # Add more questions here...
]

# set up route in flask application that allows clients to find quiz questions via get request
@app.route('/api/quizzes', methods=['GET'])
def get_quizzes():
    return jsonify(questions)

if __name__ == '__main__':
    app.run(debug=True)