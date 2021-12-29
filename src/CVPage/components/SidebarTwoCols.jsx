import PropTypes from 'prop-types';

export default function SidebarTwoCols({ data }) {
  return (
    <div className="flex justify-between items-center gap-4">
      <p className="whitespace-nowrap">{data.name}</p>
      <p className="text-sm font-medium">{data.details}</p>
    </div>
  );
}

SidebarTwoCols.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
};
