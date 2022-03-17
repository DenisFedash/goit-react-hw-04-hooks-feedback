import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    options.map(option => (
        <button
            type="button"
            key={option}
            className={css.button}
            onClick={() => onLeaveFeedback(option)}>
            {option}
        </button>
    ))
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};