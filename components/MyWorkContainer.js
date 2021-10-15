import React from "react";
import Card from "./Card";

const MyWorkContainer = ({ projects }) => {
  return (
    <div id="work" className="w-full flex flex-col">
      <h1 className="text-appPurple my-8 h1">Work</h1>
      {projects.map((proj) => {
        const { title, body, image, url, subtitle } = proj.fields;

        return (
          <Card
            key={title}
            title={title}
            subtitle={subtitle}
            body={body}
            image={image}
            publishedLink={url}
            dark
          />
        );
      })}
    </div>
  );
};

export default MyWorkContainer;
