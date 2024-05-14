import React, { useState } from 'react';
import './PopupForm.css'; // Import CSS file for styling

const questions = [
    {
        question: "So does race and culture. How would you describe yourself?",
        options: ["Asian or Pacific Islander", "Black", "Hispanic or Latino/a", "Indigenous or American Indian", "Middle Eastern", "White", "Other", "Prefer not to say"],
        selectedOption: null
    },
    {
        question: "That job thing.",
        options: ["Employed", "Self-employed", "Homemaker", "Unemployed", "Student", "Retired"],
        selectedOption: null
    },
    {
        question: "Do you consider yourself in a serious relationship?",
        options: ["Yes, and I'm happy about it", "Yes, but it's a source of tension", "No"],
        selectedOption: null
    },
    {
        question: "Any kids? (Select all ages that apply)",
        options: ["No kids", "0 - 12 months", "1 - 6 years", "7 - 12 years", "13 - 17 years", "18+ years"],
        selectedOption: null
    },
    {
        question: "Do you have a hard time bouncing back after adversity?",
        options: ["Not at all", "A little", "Somewhat", "Very much"],
        selectedOption: null
    },
    {
        question: "Do you wish you were more connected with others?",
        options: ["Not at all", "A little", "Somewhat", "Very"],
        selectedOption: null
    },
    {
        question: "Is there an ongoing stressful situation in your life that needs to be managed?",
        options: ["Not at all", "A little", "Somewhat", "Very much"],
        selectedOption: null
    },
    {
        question: "Do you focus on things that happened in the past—or that might happen in the future—instead of experiencing the moment?",
        options: ["Never", "Rarely", "Sometimes", "Often"],
        selectedOption: null
    },
    {
        question: "How do you feel about meditation?",
        options: ["I practice regularly", "I'm open to it", "I'm not interested"],
        selectedOption: null
    },
    {
        question: "Do you have any of the following conditions? (Select all that apply)",
        options: ["Migraine", "Rheumatoid arthritis", "Psoriatic arthritis", "Psoriasis", "Insomnia", "High blood pressure or cholesterol", "Diabetes", "Eczema (Atopic dermatitis)"],
        selectedOption: null
    }
];

const PopupForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);

    const handleNext = () => {
        if (questions[questionIndex].selectedOption !== null) {
            if (questionIndex < questions.length - 1) {
                setQuestionIndex(questionIndex + 1);
            } else {
                console.log('All questions answered:', questions.map(question => ({
                    question: question.question,
                    answer: question.selectedOption
                })));
                // You can add further logic here to handle form submission, such as sending data to a server.
                // For now, let's just log the answers to the console.
                setIsOpen(false); // Close the form after submission
            }
        } else {
            alert('Please select an option.');
        }
    };

    const handleOptionSelect = (option) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].selectedOption = option;
        setQuestionIndex(questionIndex + 1);
    };

    const toggleForm = () => {
        setIsOpen(!isOpen);
        setQuestionIndex(0); // Reset question index when opening the form
    };

    return (
        <div className="popup-container">
            <button className="open-button" onClick={toggleForm}>Open Form</button>
            {isOpen && (
                <div className="popup">
                    <h2>{questions[questionIndex].question}</h2>
                    <div className="options">
                        {questions[questionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleOptionSelect(option)}>{option}</button>
                        ))}
                    </div>
                    {questionIndex < questions.length - 1 ? (
                        <button className="next-button" onClick={handleNext}>Next</button>
                    ) : (
                        <button className="submit-button" onClick={handleNext}>Submit</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default PopupForm;
