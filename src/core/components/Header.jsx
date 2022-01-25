import PropTypes from 'prop-types';

export default function Header({ children, className }) {
  return (
    <div className={`flex items-center cursor-default ${className}`}>
      <div className="text-xl font-semibold  whitespace-nowrap">{children}</div>
      <div className="border-2 border-black dark:border-white my-4 w-full ml-6" />
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};
