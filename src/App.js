import React, { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import { Title, Wrapper } from 'styles';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };
  const total = Object.values(feedbacks).reduce((acc, value) => acc + value, 0);
  const positivePercentage = Number.parseInt((good / total) * 100);

  const handleClick = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;

      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;

      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Title>Welcome to cafe Expresso!</Title>
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedbacks} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    </div>
  );
}

export default App;
