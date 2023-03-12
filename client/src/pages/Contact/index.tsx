import { ViewContact } from "modules/contact/pages";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewContact />;
};

export default Contact;
