// API 

// import express library for HTTP requests
const express = require('express');
// import CORS middleware (access from various domains)
const cors = require('cors');

// initialize application instance
const app = express();
// apply cor middleware to app
app.use(cors());

const questions = [
    {
        id: 1,
        category: "Geography",
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        id: 2,
        category: "Math",
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    // Add more questions here...
];

// GET endpoint
app.get('/api/quizzes', (req, res) => {
    res.json(questions);
});

// determine port number
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
