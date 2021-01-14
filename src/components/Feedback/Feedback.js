import React, { Component } from 'react';
import Notification from '../Notification';
import FeedbackStatistics from '../FeedbackStatistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const name = event.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let percent = 0;
    const total = this.countTotalFeedback();
    percent = Math.round((this.state.good / total) * 100);
    if (!percent) {
      percent = 0;
    }
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section classN={'Buttons'} text={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section classN={'Statistic'} text={'Statistic'}>
          {this.countTotalFeedback() !== 0 ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
