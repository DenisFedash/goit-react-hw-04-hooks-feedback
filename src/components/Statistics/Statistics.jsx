import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={css.list}>
        <li className={css.item}>Good: <span>{good}</span></li>
        <li className={css.item}>Neutral: <span>{neutral}</span></li>
        <li className={css.item}>Bad: <span>{bad}</span></li>
        <li className={css.item}>Total: <span>{total}</span></li>
        <li className={css.item}>Positive feedback: <span>{positivePercentage}%</span></li>
    </ul>
);
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};

