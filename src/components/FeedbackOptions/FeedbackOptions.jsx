import PropTypes from 'prop-types';
import { Button } from './FeeddbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    options.map(option => (
        <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}>
            {option}
        </Button>
    ))
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};