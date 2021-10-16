import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import client from "../lib/contentful";
import PersonalProjectsContainer from "../components/PersonalProjectsContainer";
import MyWorkContainer from "../components/MyWorkContainer";
import Resume from "../components/Resume";

export default function Home({ bio, personalProjects, workProjects, resume }) {
  return (
    <div className="bg-black justify-center flex flex-col">
      <NextSeo
        title="Christopher Leja"
        description="Christopher Leja, fullstack software engineer"
      />
      <Navbar />
      <Header />
      <div className="projects-bg-gradient px-10">
        <MyWorkContainer projects={workProjects} />
        <PersonalProjectsContainer projects={personalProjects} />
        <Resume resume={resume} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let bio = await client.getEntries({ content_type: "bio" });
  bio = bio.items[0].fields;

  let personalProjects = await client.getEntries({
    content_type: "personalProjects",
  });

  personalProjects = personalProjects.items.sort(
    (a, b) => b.fields.order - a.fields.order
  );

  let workProjects = await client.getEntries({
    content_type: "professionalProjects",
  });

  workProjects = workProjects.items.sort((a, b) => a.order - b.order);

  let resume = await client.getEntries({
    content_type: "resume",
  });

  return {
    props: {
      bio,
      personalProjects,
      workProjects,
      resume,
    },
  };
}
