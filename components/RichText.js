import React from "react";
import RichText from "@madebyconnor/rich-text-to-jsx";

const CustomRichText = (props) => {
  const { text } = props;

  return <RichText richText={text} />;
};

export default CustomRichText;
