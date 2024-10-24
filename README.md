# QuizGame
This project is full-stack. Therefore, it was divided into front-end (client folder) and back-end (server folder). In the client folder, under client/quiz-game/src, there is the App.css file. The App.css file was written for the styling of the quiz game. There's animations for spin-effects, and this is where the design of the quiz game was written. In this location, there is also the App.js (Javascript) file, where the React package is imported so that multiple states for the quiz flow could be written. This is where the front-end catches data from the backend (using the package axios). There is multiple states in this file, one being gameOver, which indicates whether the quiz has ended. In this file, there is also JavaScript xml code, which creates the structure of the webpage.

In the backend, there is a backend.js file, which uses a Node.js framework (Express) to create an API. It also uses CORS middleware for access from various domains, allowing the front-end to communicate with this backend even if they're on different servers.In this backend.js file, there are GET endpoints, which serves a list of quiz questions in JSON format. 

game.py file which imports the Flask package and creates the Python web framework. 

1. Backend (Node.js with Express and Python Flask)
Node.js with Express:
This version uses Express, a Node.js framework, to create a simple API.
The cors middleware is included to handle cross-origin requests, allowing your front end to communicate with this backend even if they're on different servers.
The GET route, /api/quizzes, serves a list of quiz questions in JSON format.
When you run the Express server, it listens on a specified port (defaulting to 5001) and logs a message to the console.
Python Flask:
Alternatively, you have the same functionality using Flask, a lightweight Python web framework.
The app is structured similarly to the Node.js version, serving the questions via a GET route, /api/quizzes.
Flask uses Flask-CORS to allow cross-origin requests.
The Flask server runs on port 5001 and includes debugging capabilities.

2. Frontend (React)
React Application:
The React app fetches the quiz data from the backend using Axios. It stores the questions in a state variable called quizzes.
It includes several states for handling the quiz flow:
currentQuestionIndex: Tracks the question the user is on.
userAnswers: Stores the user’s answers.
score: Counts the correct answers.
timeLeft: Implements a countdown timer for each question, with a limit of 15 seconds.
gameOver: Indicates whether the quiz has ended.
The app displays the current question and options, and the user clicks on an answer. It checks the answer against the correct answer and updates the score if it’s correct.
A timer runs down from 15 seconds per question, and if it hits zero, the quiz ends. If all questions are answered, the quiz also ends.
When the game ends, the user is shown their final score and can restart the quiz by clicking a button that resets all states to their initial values.

3. Styling (CSS)
The basic CSS styles ensure the app is centered and responsive, with a simple dark-themed layout.
There’s a minor animation for a logo spin effect, though it’s not crucial to the quiz functionality.

In summary, this project combines Express or Flask on the backend with a React front end, serving up a quiz app where the user can select answers, view a countdown timer, and see their final score. It’s a straightforward example of creating a full-stack web application that involves fetching and displaying data dynamically while handling user interaction and state.


TO RUN:

- Navigate to Correct Directory: cd server
- Use Virtual Env: source venv/bin/activate
- Initialize Node Package Manager (Package Manager for JavaScript): npm init -y (if necessary)
- Run Script: npm start

Essentially:
- Activate virtual env
    source venv/bin/activate
- Launch application with node package manager (npm)

1. game.py
    -Python
    -import flask and initialize application

    run:
    python game.py

    run:
    cd server
    npm init -y
    npm install express cors

2. backend.js
    -Javascript
    -create js express app with node.js (set up API)

    run:
    node backend.js

    npx create-react-app quiz-game
    cd quiz-game


        npm start
        Starts the development server.

        npm run build
        Bundles the app into static files for production.

        npm test
        Starts the test runner.

        npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can’t go back!

        We suggest that you begin by typing:

        cd quiz-game
        npm start

    run:
    npm create-react-app quiz-game
    cd quiz-game

3. create react app





    


