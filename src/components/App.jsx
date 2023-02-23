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

  getPercentage = () =>
    this.setState({ percentage: this.state.good / this.state.total });

  addGoodFeedback = () =>
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });

  addNeutralFeedback = () =>
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });

  addBadFeedback = () =>
    this.setState(prevState => {
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
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            addGood={this.addGoodFeedback}
            addNeutral={this.addNeutralFeedback}
            addBad={this.addBadFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
