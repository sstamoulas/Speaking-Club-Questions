import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { submitFeedbackStart } from './../../redux/feedback/feedback.actions';
import * as ROUTES from './../../constants/routes';

import './feedback-page.styles.scss';

const FeedbackPage = ({ history, submitFeedbackStart }) => {
  let [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setFeedback(value);
  }

  const handleSubmit = (event) => {
    submitFeedbackStart(feedback);
    history.push(ROUTES.QUESTIONS);
    event.preventDefault();
  }

  return (
    <Fragment>
      <h2 className='page-title'>Please Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea rows="10" value={feedback} onChange={handleChange}></textarea>
        <input type="submit" value="Submit Feedback" />
      </form>
    </Fragment>
  )
};

const mapDispatchToProps = (dispatch) => ({
  submitFeedbackStart: (feedback) => dispatch(submitFeedbackStart(feedback)),
})

export default connect(null, mapDispatchToProps)(withRouter(FeedbackPage));
