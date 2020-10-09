import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { submitQuestionsStart } from '../../redux/question/question.actions';
import { generateRandomColor } from './../../redux/color/color.actions';
import * as ROUTES from './../../constants/routes';

import './landing-page.styles.scss';

const LandingPage = ({ history, submitQuestionsStart, generateRandomColor }) => {
  let [questions, setQuestions] = useState(['', '', '', '', '']);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newArray = [...questions];
    newArray[name] = value;
    setQuestions(newArray);
  }

  const handleSubmit = (event) => {
    submitQuestionsStart(questions);
    generateRandomColor();
    history.push(ROUTES.QUESTIONS);
    event.preventDefault();
  }

  return (
    <div>
      <h2 className='page-title'>Please Submit 5 Questions</h2>
      <form onSubmit={handleSubmit}>
        {
          questions.map((question, index) => <input type='text' name={index} key={`question-${index}`} value={question} onChange={handleChange} />)
        }
        <input type="submit" value="Submit Questions" />
      </form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  submitQuestionsStart: (questions) => dispatch(submitQuestionsStart(questions)),
  generateRandomColor: () => dispatch(generateRandomColor()),
})

export default connect(null, mapDispatchToProps)(withRouter(LandingPage));
