import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const submitNewQuestions = async (questions) => {
  const docRef = firestore.collection('speaking-club').doc('questions');

  try {
    await docRef.update({
      questions: firebase.firestore.FieldValue.arrayUnion(...questions),
    });
  } catch(error) {
    console.log('error submiting new questions', error.message);
  }

  return docRef;
}

export const submitNewFeedback = async (feedback) => {
  const docRef = firestore.collection('speaking-club').doc('feedback');

  try {
    await docRef.update({
      feedback: firebase.firestore.FieldValue.arrayUnion(feedback),
    });
  } catch(error) {
    console.log('error submiting new feedback', error.message);
  }

  return docRef;
}

export const addNewTopic = async (topic) => {
  const docRef = firestore.collection('speaking-club').doc('questions');
  const snapShot = await docRef.get();

  if(!snapShot.exists) {
    const createdAt = new Date();

    try {
      await docRef.set({
        topic,
        createdAt
      });
    } catch(error) {
      console.log('error adding new topic', error.message);
    }
  }

  return docRef;
}

export const getAllTopics = async () => {
  const docRef = firestore.collection('speaking-club').doc('questions');
  return docRef.data();
}

export const getAllQuestions = async () => {
  const docRef = firestore.collection('speaking-club').doc('questions');
  const snapShot = await docRef.get();
  const { questions } = snapShot.data();

  return questions;
}

export default firebase;
