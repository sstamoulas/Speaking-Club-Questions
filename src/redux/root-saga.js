import { all, call } from 'redux-saga/effects';

import { questionSagas } from './question/question.sagas';

export default function* rootSaga() {
  yield all([
    call(questionSagas),
  ]);
}
