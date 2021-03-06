import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;

Notification.prpopTypes = {
  message: PropTypes.string.isRequired,
};
