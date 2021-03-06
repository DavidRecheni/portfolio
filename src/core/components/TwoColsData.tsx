interface ITwoColsData {
  data: {
    place: string,
    institution: {
      name: string
      link: string
    },
    date: {
      start: string,
      end: string
    },
    title: string,
    stack: string,
    description: string
  }[]
}

const TwoColsData: React.FC<ITwoColsData> = ({ data }) => (
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
            <a href={e.institution.link} className="hover:text-blue-600 font-medium truncate text-xs sm:text-sm" target="_blank" rel="noreferrer">
              @
              {e.institution.name}
            </a>
          </div>
          <p className="font-medium text-xs sm:text-sm text-gray-800 dark:text-gray-400">{e.stack}</p>
          {e.description.split(/(?=•)/g).map((d) => <p className="text-xs sm:text-sm">{d}</p>)}
        </div>
      </>
    ))}
  </div>
);

export default TwoColsData;
