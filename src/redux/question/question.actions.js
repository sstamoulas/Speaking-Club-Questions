import QuestionActionTypes from './question.types';

export const submitQuestionsStart = (questions) => ({
  type: QuestionActionTypes.SUBMIT_QUESTIONS_START,
  payload: { questions },
});

export const submitQuestionsSuccess = () => ({
  type: QuestionActionTypes.SUBMIT_QUESTIONS_SUCCESS,
});

export const submitQuestionsFailure = (error) => ({
  type: QuestionActionTypes.SUBMIT_QUESTIONS_FAILURE,
  payload: error,
});

export const fetchQuestionsStart = () => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_START,
});

export const fetchQuestionsSuccess = (questions) => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

export const fetchQuestionsFailure = (error) => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_FAILURE,
  payload: error,
});