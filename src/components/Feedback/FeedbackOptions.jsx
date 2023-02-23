// import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button onClick={onLeaveFeedback}>{option}</button>
        </li>
      ))}
      {/* <li>
        <button onClick={addGood}>Good</button>
      </li>
      <li>
        <button onClick={addNeutral}>Neutral</button>
      </li>
      <li>
        <button onClick={addBad}>Bad</button>
      </li> */}
    </ul>
  );
}

// FeedbackOptions.propTypes = {
//   addGood: PropTypes.func.isRequired,
//   addNeutral: PropTypes.func.isRequired,
//   addBad: PropTypes.func.isRequired,
// };
