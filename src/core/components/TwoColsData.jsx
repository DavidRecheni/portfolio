import PropTypes from 'prop-types';

export default function TwoColsData({ data }) {
  return (
    <div className="grid grid-cols-6 gap-2 my-2">
      {data.map((e) => (
        <>
          <div className="flex flex-col mt-2 font-medium text-xs">
            <p>{e.date.start}</p>
            <p>{e.date.end}</p>
            <p>{e.place}</p>
          </div>
          <div className="flex flex-col col-span-5 gap-1">
            <div className="flex items-center gap-1">
              <p className="sm:text-lg font-semibold whitespace-nowrap">{e.title}</p>
              <a href={e.institution.link} className="hover:text-blue-600 font-medium text-xs sm:text-sm" target="_blank" rel="noreferrer">
                @
                {e.institution.name}
              </a>
            </div>
            <p className="font-medium text-xs sm:text-sm text-gray-800">{e.stack}</p>
            {e.description.split(/(?=•)/g).map((d) => <p className="text-xs sm:text-sm">{d}</p>)}
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
