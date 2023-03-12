import DetailLocation from "./DetailLocation";
import FormContact from "./FormContact";

const DetailInformation = () => {
  return (
    <div className="shadow-lg basic__border rounded-lg p-5 gap-y-10 col-span-12 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      <FormContact />
      <DetailLocation />
    </div>
  );
};

export default DetailInformation;
