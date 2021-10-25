import React, { useState, useContext } from "react";
import Image from "next/image";
import AppContext from "../context";
import { useRouter } from "next/router";

const NewCard = ({ project }) => {
  const { title, subtitle, body, url, image, techStack, mobileView } =
    project.fields;
  const [expanded, setExpanded] = useState(false);
  const { selected, setSelected, setModalVisible } = useContext(AppContext);
  const router = useRouter();

  const imgUrl = "https:" + image.fields.file.url;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 relative p-4 hover:opacity-90">
      <div
        className="border-sienna border-2"
        onClick={() => {
          setSelected(project.fields);
          setModalVisible(true);
          setExpanded(!expanded);
          router.push("#modal");
        }}
      >
        <Image
          src={imgUrl}
          width={400}
          height={300}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          alt={title}
        />
        <div className="bg-blueDark p-4">
          <h2 className="h3 text-almond">{title}</h2>
          <h5 className="h5 text-sm text-blueLight">{subtitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
