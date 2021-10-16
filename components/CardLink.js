import React from "react";

const CardLink = ({ title, link, fullWidth }) => {
  const width = fullWidth ? "w-3/5 sm:w-1/2 mx-auto" : "w-2/5 sm:w-1/5";
  return (
    <>
      {link ? (
        <div className={width + " mt-4 rounded-full border-2 bg-white"}>
          <a href={link} target="_blank" rel="noreferrer">
            <p className="text-center text-blue-600">{title}</p>
          </a>
        </div>
      ) : null}
    </>
  );
};

export default CardLink;
