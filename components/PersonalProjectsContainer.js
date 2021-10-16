import React from "react";
import Card from "./Card";

const PersonalProjectsContainer = ({ projects }) => {
  return (
    <div id="personal-projects" className="w-full flex flex-col">
      <h1 className="text-almond my-8 h1">Projects</h1>
      {projects.map((p, i) => {
        const {
          title,
          backendRepoUrl,
          frontendRepoUrl,
          liveDemoUrl,
          image,
          body,
          order,
          subtitle,
          techStack,
          videoDemoUrl,
        } = p.fields;
        return (
          <Card
            key={title}
            title={title}
            backend={backendRepoUrl}
            frontend={frontendRepoUrl}
            image={image}
            order={order}
            subtitle={subtitle}
            techStack={techStack}
            video={videoDemoUrl}
            body={body}
            liveDemo={liveDemoUrl}
          />
        );
      })}
    </div>
  );
};

export default PersonalProjectsContainer;
