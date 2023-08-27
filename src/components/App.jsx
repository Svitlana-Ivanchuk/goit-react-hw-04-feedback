import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

const initialFeedbacks = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

  const handelClick = evt => {
    console.log(evt);
    const feedbacksUpgrade = prevState => {
      //console.log(prevState[evt]);
      return {
        ...prevState,
        [evt]: prevState[evt] + 1,
      };
    };

    switch (evt) {
      case 'good':
        setFeedbacks(feedbacksUpgrade);
        break;
      case 'neutral':
        setFeedbacks(feedbacksUpgrade);
        break;
      case 'bad':
        setFeedbacks(feedbacksUpgrade);
        break;
      default:
        setFeedbacks(initialFeedbacks);
        break;
    }
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={handelClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics feedbacks={feedbacks}></Statistics>
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
