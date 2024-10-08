import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [quizzes, setQuizzes] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15); // 15 seconds per question
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5001/api/quizzes')
            .then(response => {
                setQuizzes(response.data);
            })
            .catch(error => {
                console.error('Error fetching quizzes:', error);
            });
    }, []);

    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timerId = setInterval(() => {
                setTimeLeft(time => time - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else if (timeLeft === 0) {
            handleTimeOut();
        }
    }, [timeLeft, gameOver]);

    const handleAnswerClick = (answer) => {
        const currentQuiz = quizzes[currentQuestionIndex];
        setUserAnswers([...userAnswers, answer]);

        if (answer === currentQuiz.answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < quizzes.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(15); // Reset timer
        } else {
            setGameOver(true);
        }
    };

    const handleTimeOut = () => {
        setGameOver(true);
    };

    const restartGame = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setScore(0);
        setGameOver(false);
        setTimeLeft(15);
    };

    return (
        <div>
            <h1>Quiz Game</h1>
            {gameOver ? (
                <div>
                    <h2>Your Score: {score} out of {quizzes.length}</h2>
                    <button onClick={restartGame}>Restart Game</button>
                </div>
            ) : (
                quizzes.length > 0 && (
                    <div>
                        <h2>{quizzes[currentQuestionIndex].question}</h2>
                        <h3>Time Left: {timeLeft}</h3>
                        <ul>
                            {quizzes[currentQuestionIndex].options.map(option => (
                                <li key={option}>
                                    <button onClick={() => handleAnswerClick(option)}>{option}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            )}
        </div>
    );
}

export default App;

