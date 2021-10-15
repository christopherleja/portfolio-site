import React from "react";
import { jobs } from "../data";

const Resume = ({ resume }) => {
  const file = resume?.includes?.Asset[0]?.fields?.file?.url;

  const fileName = "https:" + file;
  return (
    <>
      <h1 className="h1 my-8 text-almond"> Resumé </h1>
      {/* {console.log(resume)} */}
      <a href={file} download>
        Download
      </a>
    </>
  );
};

export default Resume;
