const base = "opacity-0 pointer-events-none -z-1 ";
const focusWithin = `opacity-100 pointer-events-auto `;

const DataContentSearchBox = ({
  showSearchBox,
}: {
  showSearchBox: boolean;
}) => {
  return (
    <div
      id="data-content"
      className={`absolute top-full  translate-y-2 bg-white shadow-md rounded-md basic__transition   w-full   ${
        showSearchBox ? `${focusWithin} z-[5]` : `${base}`
      }  `}
    >
      <div className="flex px-3 py-2  text-dark items-center gap-x-7">
        <h1>Terakhir Dicari</h1>
        <h3 className="text-red-400 cursor-pointer font-semibold">
          Hapus Semua
        </h3>
      </div>
    </div>
  );
};
export default DataContentSearchBox;
