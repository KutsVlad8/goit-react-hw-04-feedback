import PropTypes from 'prop-types';
import { StatisticsList, ListItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <StatisticsList>
        <ListItem> Good: {good} </ListItem>
        <ListItem> neutral: {neutral} </ListItem>
        <ListItem> Bad: {bad} </ListItem>
        <ListItem> Total: {total} </ListItem>
        <ListItem> Possitive feadback: {percentage}% </ListItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
