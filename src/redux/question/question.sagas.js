import { takeLatest, put, all, call } from 'redux-saga/effects';

import QuestionActionTypes from './question.types';

import { 
  submitQuestionsSuccess, 
  submitQuestionsFailure,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
} from './../question/question.actions';

import { getAllQuestions, submitNewQuestions } from '../../firebase/firebase.utils';

export function* submitQuestionsAsync({ payload: { questions }}) {
  try {
    yield call(submitNewQuestions, questions);
    yield put(submitQuestionsSuccess());
  } catch(error) {
    yield put(submitQuestionsFailure(error));
  }
}

export function* fetchQuestionsAsync() {
  try {
    const questions = yield call(getAllQuestions);
    yield put(fetchQuestionsSuccess(questions));
  } catch(error) {
    yield put(fetchQuestionsFailure(error));
  }
}

export function* onSubmitQuestionsStart() {
  yield takeLatest(
    QuestionActionTypes.SUBMIT_QUESTIONS_START, 
    submitQuestionsAsync
  );
}

export function* onFetchQuestionsStart() {
  yield takeLatest(
    QuestionActionTypes.FETCH_QUESTIONS_START, 
    fetchQuestionsAsync
  );
}

export function* questionSagas() {
  yield all([
    call(onSubmitQuestionsStart),
    call(onFetchQuestionsStart),
  ]);
}
