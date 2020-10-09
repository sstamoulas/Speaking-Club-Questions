import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page.component';
import QuestionsPage from './pages/questions-page/questions-page.component';
import FeedbackPage from './pages/feedback-page/feedback-page.component';
import NotFoundPage from './pages/not-found-page/not-found-page.component';

import * as ROUTES from './constants/routes';

import './App.scss';

const App = ({ color }) => {
  const bodyElement = document.getElementsByTagName('body')[0];

  bodyElement.style.backgroundColor = color;

  return (
    <div className='container'>
      <div className='sub-container'>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.QUESTIONS} component={QuestionsPage} />
          <Route exact path={ROUTES.FEEDBACK} component={FeedbackPage} />
          <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
        </Switch>
      </div>
      <Link to={ROUTES.FEEDBACK} className='feeback-link'>Click to Provide Feedback</Link>
    </div>
  )
};

const mapStateToProps = (state) => ({
  color: state.color.currentColor,
});

export default connect(mapStateToProps)(App);
