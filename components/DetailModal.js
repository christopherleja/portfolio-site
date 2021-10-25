import React, { useContext } from "react";
import AppContext from "../context";
import Image from "next/image";

const DetailModal = () => {
  const { selected, setModalVisible, modalVisible } = useContext(AppContext);

  let imgUrl = "";

  if (selected?.image) {
    imgUrl = "https:" + selected?.image?.fields?.file?.url;
  }

  return (
    <>
      {modalVisible && (
        <div
          id="modal"
          className="z-10 absolute w-full h-full"
          onClick={() => setModalVisible(false)}
        >
          <div className="project-modal p-8">
            <h1 className="h1 text-blueDark">{selected.title || "test"}</h1>
            <div className="flex flex-col flex-wrap md:w-1/2">
              <div className="">
                <Image
                  src={imgUrl}
                  layout="responsive"
                  height={selected.modalVisible ? 400 : 300}
                  width={selected.modalVisible ? 300 : 400}
                  objectFit="contain"
                  alt={selected.title}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
