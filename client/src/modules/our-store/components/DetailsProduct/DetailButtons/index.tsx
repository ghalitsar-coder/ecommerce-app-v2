const DetailButtons = ({
  setCurrentDetail,
  currentDetail,
  data
}: {
  currentDetail: string;
  data: string[];
  setCurrentDetail(item: string): void;
}) => {
  return (
    <ul className="border-y h-fit flex gap-x-5 pt-1  ">
      {data.map((item, idx) => (
        <li key={+idx}>
          <button
            onClick={() => setCurrentDetail(item)}
            className={`py-2 px-5 border-b-2  font-bold  ${
              currentDetail === item
                ? " text-orange-400 border-b-orange-400"
                : "border-b-transparent text-slate-600"
            } whitespace-nowrap  text-sm basic__transition`}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DetailButtons;
