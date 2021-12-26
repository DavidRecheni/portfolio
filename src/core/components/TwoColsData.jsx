import PropTypes from 'prop-types';

export default function TwoColsData({ data }) {
  return (
    <div className="grid grid-cols-6">
      {data.map((e) => (
        <>
          <div className="flex flex-col">
            <div>{e.place}</div>
            <div className="text-sm">{e.time}</div>
          </div>
          <div className="flex flex-col col-span-5">
            <div className="flex items-center gap-1">
              <p className="text-lg font-semibold">{e.title}</p>
              <a href={e.institution.link} className="hover:border-b border-gray-500 font-medium" target="_blank" rel="noreferrer">
                @
                {e.institution.name}
              </a>
            </div>
            {e.description.split(/(?=•)/g).map((d) => <p>{d}</p>)}
          </div>
        </>
      ))}
    </div>
  );
}

TwoColsData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    place: PropTypes.string,
    institution: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    }),
    time: PropTypes.string,
    title: PropTypes.title,
    description: PropTypes.string,
  })).isRequired,
};
