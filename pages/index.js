import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import client from "../lib/contentful";
import MyWorkContainer from "../components/MyWorkContainer";
import Resume from "../components/Resume";
import About from "../components/About";
import AppContext from "../context";
import DetailModal from "../components/DetailModal";
import Footer from "../components/Footer";

export default function Home({ bio, projects, resume }) {
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const modalValues = {
    selected,
    setSelected,
    modalVisible,
    setModalVisible,
  };

  return (
    <AppContext.Provider value={modalValues}>
      <div
        className={`justify-center flex flex-col`}
        onClick={() => {
          modalVisible ? setModalVisible(false) : null;
        }}
      >
        <NextSeo
          title="Christopher Leja"
          description="Christopher Leja, Fullstack Software Engineer experienced in JavaScript, Ruby, and mobile frameworks"
        />
        <Navbar />
        <Header />
        <div className="px-10">
          <About />
          <MyWorkContainer projects={projects} />
          <Resume resume={resume} />
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export async function getStaticProps() {
  let bio = await client.getEntries({ content_type: "bio" });
  bio = bio?.items?.[0]?.fields;

  let projects = await client.getEntries({
    content_type: "projects",
  });

  projects = projects.items.sort((a, b) => b?.fields?.order - a?.fields?.order);

  let resume = await client.getEntries({
    content_type: "resume",
  });

  return {
    props: {
      bio,
      projects,
      resume,
    },
  };
}
