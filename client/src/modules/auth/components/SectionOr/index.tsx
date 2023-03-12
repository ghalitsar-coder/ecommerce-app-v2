import Line from "./Line";

const SectionOr = ({
  width = "max-w-6xl",
  text = "or",
}: {
  width?: string;
  text?: string;
}) => {
  return (
    <div className={`flex items-center px-3 my-10 ${width} bg w-full`}>
      <Line />
      <h3 className="flex text-4xl px-3 font-semibold text-green-accent-4">
        {text}
      </h3>
      <Line />
    </div>
  );
};

export default SectionOr;
