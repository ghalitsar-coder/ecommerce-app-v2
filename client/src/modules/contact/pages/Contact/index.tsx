import Meta from "components/Meta";

import { DetailInformation, OurLocation } from "modules/contact/components";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="container my-10 px-3">
      <div className="grid grid-cols-12  gap-4 ">
        <OurLocation />
        <DetailInformation />
      </div>
    </div>
  );
};

export default Contact;
