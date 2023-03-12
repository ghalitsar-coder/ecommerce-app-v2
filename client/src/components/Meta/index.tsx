import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title: string;
};

const Meta = (props: Props) => {
  return (
    <Helmet>
      <title> {props.title} </title>
      <meta name="description" content="Helmet application" />
    </Helmet>
  );
};

export default Meta;
