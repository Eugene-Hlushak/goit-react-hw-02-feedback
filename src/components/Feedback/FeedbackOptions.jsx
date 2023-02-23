import PropTypes from 'prop-types';

export default function FeedbackOptions({ addBad, addGood, addNeutral }) {
  return (
    <ul>
      <li>
        <button onClick={addGood}>Good</button>
      </li>
      <li>
        <button onClick={addNeutral}>Neutral</button>
      </li>
      <li>
        <button onClick={addBad}>Bad</button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  addGood: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,
};
