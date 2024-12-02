# Chatbot Application

This project is a **ReactJS** frontend and a **Flask** backend chatbot application integrated with Hugging Face's Inference API. It provides a dynamic chat interface where users can interact with a chatbot that processes natural language and returns meaningful responses.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Folder Structure](#folder-structure)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Usage](#usage)
7. [Customization](#customization)

---

## Features

- Dynamic chat interface built with ReactJS.
- Backend powered by Flask with integration to Hugging Face Inference API.
- Handles user input and processes chatbot responses.
- Responsive design with modern UI.
- Error handling for invalid inputs and API issues.

---

## Technologies Used

### Frontend:
- **ReactJS** for building the UI.
- **CSS** for styling.
- **Axios** for API requests.
- **DOMPurify** for sanitizing HTML.

### Backend:
- **Flask** for the backend server.
- **Flask-CORS** for enabling cross-origin requests.
- **Hugging Face InferenceClient** for interacting with AI models.

---

## Folder Structure

```plaintext
react-app
├── backend
│   └── app.py  # Flask server code
├── my-react-app (front-end)
│   ├── src
│   │   ├── components
│   │   │   └── ChatBot.js  # Chatbot component
│   │   │   └── NavBar.js  # NavBar component
│   │   ├── services
│   │   │   └── API.js  # Styling for the application
│   │   ├── styles
│   │   │   └── App.css  # Styling for the application
│   │   │   └── NavBar.css  # Styling for the application
│   │   │   └── ChatBot.css  # Styling for the application
│   │   ├── App.js  # Main application file
│   │   ├── index.js  # React entry point
│   │   ├── image
│   │   │   └── background.png  # Background image
├── README.md  # Project documentation
└── requirements.txt  # Python dependencies
```

---

## Installation

### Prerequisites
- Node.js and npm installed.
- Python 3.8+ installed.

### Clone the Repository

```bash
git clone https://github.com/georgetpgoh/react-app.git
cd react-app
```

### Change some code
- Set the frontend to run at `http://localhost:3000`.
- Set the backend to run at `http://localhost:5000`.
- Change the API-KEY to your API

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

## Running the Application

### Start the Backend Server

```bash
cd backend
python app.py
```


### Start the Frontend Development Server

```bash
cd frontend
npm start
```

---

## Usage

1. Open the browser and navigate to `http://localhost:3000`.
2. Interact with the chatbot by typing messages in the input field and pressing Enter.
3. The chatbot will respond to your queries in real-time.

---

## Customization

### Change Background Image
Replace the `background.png` file in `frontend/src/image` with your desired background image.

### Modify Flask API
Edit `app.py` in the `backend/` directory to add more functionality or change the model parameters.

### Update React Components
Edit `ChatBot.js` in the `frontend/src/components/` directory to customize the chatbot interface.

---

