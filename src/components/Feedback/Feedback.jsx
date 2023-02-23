// import PropTypes from 'prop-types';
import Statistics from 'components/Statistics';

export default function Feedback({
  addGood,
  addNeutral,
  addBad,
  goodValue,
  neutralValue,
  badValue,
  totalFeedback,
  percentage,
}) {
  return (
    <div>
      <h2>Please, Leave a feedback</h2>
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

      <div>
        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good: {goodValue}</p>
          </li>
          <li>
            <p>Neutral: {neutralValue}</p>
          </li>
          <li>
            <p>Bad: {badValue}</p>
          </li>
          <li>
            <p>Total: {totalFeedback}</p>
          </li>
          <li>
            <p>Positive feedback: {percentage}%</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
