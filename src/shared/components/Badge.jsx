import propTypes from 'prop-types';

const Badge = ({ text, color }) => (
  <div className={`bg-${color}-500`}>{text}</div>
);

Badge.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export default Badge;
