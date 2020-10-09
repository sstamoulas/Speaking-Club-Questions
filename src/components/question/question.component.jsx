import React from 'react';

import './question.styles.scss';

const Question = ({ color, question }) => (
  <p className='question' style={{ 'color': color }}>{question}</p>
);

export default Question;
