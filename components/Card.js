import React, { useState } from "react";
import Image from "next/image";
import ClosedCard from "./ClosedCard";
import RichText from "./RichText";
import CardLink from "./CardLink";

const Card = ({
  title,
  subtitle,
  image,
  body,
  frontend,
  backend,
  video,
  liveDemo,
  publishedLink,
  dark,
}) => {
  const [open, setOpen] = useState(false);
  const imageUrl = "https:" + image.fields.file.url;

  const ExpandedCard = () => {
    return (
      <div className="w-full flex px-10 flex-wrap pb-6">
        <div className="w-full flex flex-col center-content lg:flex-row p-4"></div>
        <div className="flex flex-col lg:flex-row xl:justify-around">
          <div className="about-article-col-2 w-full lg:w-1/2 xl:w-2/5 pb-4 lg:pb-0 about-card-body">
            <RichText text={body} />
            <div className="flex justify-between flex-wrap">
              <CardLink title={"Live"} link={liveDemo} />
              <CardLink title={"Video"} link={video} />
              <CardLink title={"Front End"} link={frontend} />
              <CardLink title={"Back End"} link={backend} />
              <CardLink title={`${title}`} link={publishedLink} fullWidth />
            </div>
          </div>
          <div className="w-full lg:w-1/2 2xl:w-2/5">
            <div className="w-full pb-4 px-4 my-8 lg:my-0 md:px-16">
              <Image
                src={imageUrl}
                width={600}
                height={400}
                layout="responsive"
                objectFit="contain"
                alt={title}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="mb-8 border rounded-md"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <ClosedCard
        title={title}
        open={open}
        setOpen={setOpen}
        subtitle={subtitle}
        dark={dark}
      />
      {open && ExpandedCard()}
    </div>
  );
};

export default Card;
