import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { Card, Thumb, Text } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const posiriveFeedback = Math.round((good * 100) / countTotalFeedback());
    return posiriveFeedback;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Card>
      <Thumb>
        <Section title={'Please leave feeback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleLeaveFeedback}
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
};
