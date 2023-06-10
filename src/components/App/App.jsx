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

  const handleLeavFeedback = event => {
    const { name } = event.target;

    if (name === 'good') {
      return setGood(good + 1);
    }

    if (name === 'neutral') {
      return setNeutral(neutral + 1);
    }

    if (name === 'bad') {
      return setBad(bad + 1);
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
};
