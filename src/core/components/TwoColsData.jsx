import PropTypes from 'prop-types';

export default function TwoColsData({ data }) {
  return (
    <div className="grid grid-cols-6 gap-y-2 my-2">
      {data.map((e) => (
        <>
          <div className="flex flex-col">
            <div className="text-sm">{e.date.start}</div>
            <div className="text-sm">{e.date.end}</div>
            <div className="text-sm">{e.place}</div>
          </div>
          <div className="flex flex-col col-span-5">
            <div className="flex items-center gap-1">
              <p className="text-lg font-semibold">{e.title}</p>
              <a href={e.institution.link} className="hover:border-b border-gray-500 font-medium" target="_blank" rel="noreferrer">
                @
                {e.institution.name}
              </a>
            </div>
            <p className="font-medium text-sm text-gray-800">{e.stack}</p>
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
    date: PropTypes.shape({
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    title: PropTypes.string,
    stack: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};
