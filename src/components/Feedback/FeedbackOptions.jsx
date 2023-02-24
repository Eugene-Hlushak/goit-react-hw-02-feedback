import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button onClick={onLeaveFeedback}>{option}</button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
