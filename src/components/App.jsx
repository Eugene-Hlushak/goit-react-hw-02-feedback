import { Component } from 'react';
import Feedback from './Feedback/Feedback';

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

  render() {
    return (
      <Feedback
        goodValue={this.state.good}
        neutralValue={this.state.neutral}
        badValue={this.state.bad}
        addGood={this.addGoodFeedback}
        addNeutral={this.addNeutralFeedback}
        addBad={this.addBadFeedback}
        totalFeedback={this.countTotalFeedback()}
        percentage={this.state.percentage}
      />
    );
  }
}
