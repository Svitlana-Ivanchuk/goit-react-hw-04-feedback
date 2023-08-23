import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = stateName => {
    this.setState(prevState => ({ [stateName]: prevState[stateName] + 1 }));
  };

  render() {
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics feedbacks={this.state}></Statistics>
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
