import { combineReducers } from 'redux';

import questionReducer from './question/question.reducer';
import colorReducer from './color/color.reducer';

const rootReducer = combineReducers({
  question: questionReducer,
  color: colorReducer,
});

export default rootReducer;
