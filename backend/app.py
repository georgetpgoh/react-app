from flask import Flask, request, jsonify
from huggingface_hub import InferenceClient
from flask_cors import CORS
import os

# Set Hugging Face API key
API_KEY = os.getenv("HF_API_KEY")
# Initialize Flask app
app = Flask(__name__)

# Enable CORS to allow cross-origin requests 
CORS(app, origins=["https://react-app-4qyy.onrender.com"])

# Initialize the InferenceClient with the Hugging Face API key
client = InferenceClient(api_key=API_KEY)

# Route to handle chatbot requests
@app.route('/chat', methods=['POST'])
def chat():
    # Get the user input from the request
    user_input = request.json.get('message', '')

    # If there's no message, return an error
    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    # Define the conversation messages
    messages = [
        {
            "role": "user",
            "content": user_input
        }
    ]

    try:
        # Send request to Hugging Face API using the InferenceClient
        completion = client.chat.completions.create(
            model="Qwen/Qwen2.5-Coder-32B-Instruct",  # The model to use
            messages=messages,
            max_tokens=1000
        )
        # Print the completion response to inspect
        #print(completion)

        bot_response = completion['choices'][0]['message']['content']

        # Return the chunks as a list of messages
        return jsonify({"response": bot_response})

    except Exception as e:
        return jsonify({"error": f"Error processing request: {str(e)}"}), 500

if __name__ == '__main__':
    
    app.run(debug=False)