import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import client from "../lib/contentful";
import PersonalProjectsContainer from "../components/PersonalProjectsContainer";
import MyWorkContainer from "../components/MyWorkContainer";

export default function Home({ bio, personalProjects }) {
  return (
    <div className="bg-black justify-center flex flex-col">
      <NextSeo
        title="Christopher Leja"
        description="Christopher Leja, fullstack software engineer"
      />
      {console.log({ personalProjects })}
      <Navbar />
      <Header />
      <MyWorkContainer />
      <PersonalProjectsContainer />
    </div>
  );
}

export async function getStaticProps() {
  let bio = await client.getEntries({ content_type: "bio" });
  let personalProjects = await client.getEntries({
    content_type: "personalProjects",
  });

  bio = bio.items[0].fields;
  personalProjects = personalProjects.items;
  return {
    props: {
      bio,
      personalProjects,
    },
  };
}
