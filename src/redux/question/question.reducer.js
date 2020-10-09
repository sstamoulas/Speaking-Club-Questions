import QuestionActionTypes from './question.types';

const INITIAL_STATE = {
  'questions': [],
  'error': '',
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case QuestionActionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        error: null,
      };
    case QuestionActionTypes.FETCH_QUESTIONS_START:
    case QuestionActionTypes.SUBMIT_QUESTIONS_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case QuestionActionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default questionReducer;
