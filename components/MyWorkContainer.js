import React from "react";
import Card from "./Card";
import DetailModal from "./DetailModal";
import NewCard from "./NewCard";

const MyWorkContainer = ({ projects }) => {
  return (
    <div
      id="projects"
      className="w-full 2xl:w-4/5 mx-auto flex flex-col relative"
    >
      <div className="my-8">
        <h1 className="text-blueDark h1">Projects</h1>
        <div className="flex flex-wrap">
          {projects.map((proj, i) => {
            return <NewCard key={i} project={proj} />;
          })}
        </div>
      </div>
      <DetailModal />
    </div>
  );
};

export default MyWorkContainer;
