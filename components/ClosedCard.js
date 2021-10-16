import React from "react";

const ClosedCard = ({ title, subtitle, open, setOpen, dark }) => {
  const textColor = dark ? "text-appPurple" : "text-almond";

  return (
    <div
      className="w-full md:max-h-60 flex cursor-pointer flex-col md:flex-row bg-transparent p-4 md:p-10 justify-items-space-between align-middle"
      onClick={() => setOpen(!open)}
    >
      <h2
        className={
          "h2 w-full my-auto md:w-1/2 pb-4 md:pb-0 pr-4 uppercase " + textColor
        }
      >
        {title}
      </h2>
      <h4 className={"h4 w-full my-auto md:w-1/2 " + textColor}>{subtitle}</h4>
    </div>
  );
};

export default ClosedCard;
