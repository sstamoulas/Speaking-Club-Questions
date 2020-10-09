import FeedbackActionTypes from './feedback.types';

export const submitFeedbackStart = (feedback) => ({
  type: FeedbackActionTypes.SUBMIT_FEEDBACK_START,
  payload: { feedback },
});

export const submitFeedbackSuccess = () => ({
  type: FeedbackActionTypes.SUBMIT_FEEDBACK_SUCCESS,
});

export const submitFeedbackFailure = (error) => ({
  type: FeedbackActionTypes.SUBMIT_FEEDBACK_FAILURE,
  payload: error,
});
