import { takeLatest, put, all, call } from 'redux-saga/effects';

import FeedbackActionTypes from './feedback.types';

import { submitFeedbackSuccess, submitFeedbackFailure } from './../feedback/feedback.actions';

import { submitNewFeedback } from './../../firebase/firebase.utils';

export function* submitFeedbackAsync({ payload: { feedback }}) {
  try {
    yield call(submitNewFeedback, feedback);
    yield put(submitFeedbackSuccess());
  } catch(error) {
    yield put(submitFeedbackFailure(error));
  }
}

export function* onSubmitFeedbackStart() {
  yield takeLatest(
    FeedbackActionTypes.SUBMIT_FEEDBACK_START, 
    submitFeedbackAsync
  );
}

export function* feedbackSagas() {
  yield all([
    call(onSubmitFeedbackStart),
  ]);
}
