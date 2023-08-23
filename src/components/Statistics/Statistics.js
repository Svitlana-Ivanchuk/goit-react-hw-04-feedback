import {
  Notification,
  StatsBoard,
  StatsCounter,
  StatsElem,
  StatsFeedback,
} from './Statistics.styled';

export const Statistics = ({ feedbacks }) => {
  const keysFeedbacks = Object.keys(feedbacks);
  const { good, neutral, bad } = feedbacks;
  const countTotalFeedback = good + neutral + bad;
  const totalNoFeedback = countTotalFeedback === 0;
  const countPositiveFeedbackPercentage = totalNoFeedback
    ? 0
    : Math.round((good / countTotalFeedback) * 100);

  return totalNoFeedback ? (
    <Notification>There is no feedback</Notification>
  ) : (
    <StatsBoard>
      <StatsFeedback>
        {keysFeedbacks.map(key => (
          <StatsElem key={key}>
            {key} : {feedbacks[key]}
          </StatsElem>
        ))}
      </StatsFeedback>
      <StatsCounter>
        <StatsElem>Total: {countTotalFeedback}</StatsElem>
        <StatsElem>
          PositiveFeedback: {countPositiveFeedbackPercentage}%
        </StatsElem>
      </StatsCounter>
    </StatsBoard>
  );
};
