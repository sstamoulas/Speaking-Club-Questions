import FeedbackActionTypes from './feedback.types';

const INITIAL_STATE = {
  'error': '',
};

const feedbackReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FeedbackActionTypes.SUBMIT_FEEDBACK_START:
    case FeedbackActionTypes.SUBMIT_FEEDBACK_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case FeedbackActionTypes.SUBMIT_FEEDBACK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default feedbackReducer;
