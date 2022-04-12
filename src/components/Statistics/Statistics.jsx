import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <List>
      Good: <span>{good}</span>
    </List>
    <List>
      Neutral: <span>{neutral}</span>
    </List>
    <List>
      Bad: <span>{bad}</span>
    </List>
    <List>
      Total: <span>{total}</span>
    </List>
    <List>
      Positive feedback: <span>{positivePercentage}%</span>
    </List>
  </ul>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
