import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchQuestionsStart } from './../../redux/question/question.actions';
import { generateRandomColor } from './../../redux/color/color.actions';

import Question from './../../components/question/question.component';

import './questions-page.styles.scss';

const QuestionsPage = ({ color, questions, fetchQuestionsStart, generateRandomColor }) => {
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * questions.length));

  useEffect(() => {
    fetchQuestionsStart();
  }, [fetchQuestionsStart]);

  const handleClick = (event) => {
    const questionElement = document.getElementsByClassName('question')[0];
    const buttonElement = document.getElementsByClassName('btn')[0];
    questionElement.style.color = 'white';

    // Create span element 
    let ripple = document.createElement("span"); 

    // Add ripple class to span 
    ripple.classList.add("ripple"); 

    // Add span to the button  
    buttonElement.appendChild(ripple); 

    // Get position of X 
    let x = event.clientX - event.target.offsetLeft; 

    // Get position of Y  
    let y = event.clientY - event.target.offsetTop; 

    // Position the span element 
    ripple.style.left = `${x}px`; 
    ripple.style.top = `${y}px`; 

    // Remove span after 0.3s 
    setTimeout(() => { 
        ripple.remove(); 
    }, 300); 

    setTimeout(() => {
      setQuestionNumber(Math.floor(Math.random() * questions.length));
      generateRandomColor();
    }, 500);

    event.preventDefault();
  }

  return (
    <div className=''>
      <Question question={questions[questionNumber]} color={color} />
      <button className='btn' style={{ 'backgroundColor': color }} onClick={handleClick}>New Question</button>
    </div>
  )
};

const mapStateToProps = (state) => ({
  questions: state.question.questions,
  color: state.color.currentColor,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionsStart: () => dispatch(fetchQuestionsStart()),
  generateRandomColor: () => dispatch(generateRandomColor()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
