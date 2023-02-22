// import PropTypes from 'prop-types';

export default function Statistics(goodValue, neutralValue, badValue) {
  return (
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
          <p>Total: {}</p>
        </li>
        <li>
          <p>Positive feedback</p>
        </li>
      </ul>
    </div>
  );
}
