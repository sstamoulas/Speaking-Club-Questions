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
    setQuestionNumber(Math.floor(Math.random() * questions.length));
    generateRandomColor();
    event.preventDefault();
  }

  return (
    <div className=''>
      <Question question={questions[questionNumber]} color={color} />
      <a href='empty' className='btn' style={{ 'backgroundColor': color }} onClick={handleClick}>New Question</a>
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
