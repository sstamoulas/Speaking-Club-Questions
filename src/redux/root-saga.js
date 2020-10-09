import { all, call } from 'redux-saga/effects';

import { questionSagas } from './question/question.sagas';
import { feedbackSagas } from './feedback/feedback.sagas';

export default function* rootSaga() {
  yield all([
    call(questionSagas),
    call(feedbackSagas),
  ]);
}
