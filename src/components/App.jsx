import { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import Statistics from './Feedback/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = evt =>
    this.setState(prevState => {
      const { textContent } = evt.target;
      if (textContent === 'good')
        return {
          good: prevState.good + 1,
        };
      if (textContent === 'neutral')
        return {
          neutral: prevState.neutral + 1,
        };
      if (textContent === 'bad')
        return {
          bad: prevState.bad + 1,
        };
    });

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, el) => (acc += el));
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) return 0;
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
