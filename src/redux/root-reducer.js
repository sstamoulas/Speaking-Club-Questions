import { combineReducers } from 'redux';

import questionReducer from './question/question.reducer';
import feedbackReducer from './feedback/feedback.reducer';
import colorReducer from './color/color.reducer';

const rootReducer = combineReducers({
  question: questionReducer,
  feedback: feedbackReducer,
  color: colorReducer,
});

export default rootReducer;
