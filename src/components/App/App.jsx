import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { Card, Thumb, Text } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeavFeedback = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const posiriveFeedback = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return posiriveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      handleLeavFeedback,
    } = this;

    const options = ['good', 'neutral', 'bad'];
    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <Card>
        <Thumb>
          <Section title={'Please leave feeback'}>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={handleLeavFeedback}
            />
          </Section>

          {totalFeedback === 0 ? (
            <Text>There is no feedback</Text>
          ) : (
            <Section title={'Statistics'}>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                percentage={positivePercentage}
              />
            </Section>
          )}
        </Thumb>
      </Card>
    );
  }
}

export default App;
