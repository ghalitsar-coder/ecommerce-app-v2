import { ViewAuth } from "modules/auth/pages";
import React from "react";

type Props = {};

const Auth = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <ViewAuth />;
};

export default Auth;
