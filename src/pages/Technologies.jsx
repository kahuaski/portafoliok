import React, { useEffect, useRef, useState } from "react";
import Java_modal from "./components/Java_modal";
import Jst_modal from "./components/Jst_modal";
import Node_modal from "./components/Node_modal";
import C_modal from "./components/C_modal"
import CC_modal  from "./components/CC_modal"
import React_modal from './components/React_modal'
import Angular_modal from "./components/Angular_modal";
import Css_modal from "./components/Css_modal";
import Git_modal from "./components/Git_modal";
import Html_modal from "./components/Html_modal"
import Postman_modal  from "./components/Postman_modal"
import Postgres_modal from './components/Postgres_modal'
import Redux_modal from "./components/Redux_modal";
import Typejs_modal from "./components/Typejs_modal";
import Mysql_modal from "./components/Mysql_modal";
import Render_modal from "./components/Render_modal";
import Visual_modal from "./components/Visual_modal";





import { useSpring, animated } from "react-spring";

import { useAnimateKeyframes } from "react-simple-animate";
const Technologies = () => {
  const { style } = useAnimateKeyframes({
    iterationCount: "infinite",
    direction: "alternate-reverse",
    duration: 5,
    keyframes: [
      "transform: rotateX(0) rotateY(0) rotateZ(0)",
      "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
    ],
  });

  const elementRef = useRef(null);

  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const modalAnimation = useSpring({
    transform: modalData ? "translateX(20%)" : "translateY(10%)",
    reverse: true,
    opacity: modalData ? 0.5 : 0,
  });

  const ModalComponents = {
    java: Java_modal,
    javascript: Jst_modal,
    node:Node_modal,
    postman: Postman_modal,
    typescript: Typejs_modal,
    angular:Angular_modal,
    html: Html_modal,
    css: Css_modal,
    mysql:Mysql_modal,
    postgres: Postgres_modal,
    c:C_modal,
    cc:CC_modal,
    render: Render_modal,
    visual: Visual_modal,
    react:React_modal,
    redux: Redux_modal,
    git: Git_modal
   


    
  };
  const ModalDataComponent = modalData && ModalComponents[modalData.component];

  return (
    <section className="  flex-1  font-[Oregano] mx-10  ">
      <div className="  rounded-full shadow-blue-900 shadow-lg mx-[400px]  ring ring-dark-900 max-w-lg justify-center flex-1">
        <h1 className="text-center text-6xl m-4  text-slate-700 font-extrabold  skew-x-12 box-content border-sky-800      ">
          Tecnologias
        </h1>
      </div>


<div>
        <p className="text-center text-2xl">
          Como desarrollador web Full Stack, tengo experiencia en una amplia
          gama de tecnologías y habilidades que me permiten crear soluciones web
          completas y eficientes.
        </p>
      </div>
      <animated.div
        style={modalAnimation}
        color={"#fff000"}
        onClick={() => closeModal()} // Cierra el modal cuando se hace clic fuera de él
      >
       {ModalDataComponent && (
          <ModalDataComponent
            isOpen={true}
            onClose={closeModal}
            className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-blue-500 to-indigo-800"
          />
        )}
      </animated.div>

      <div className="flex flex-wrap  m-5 gap-8">
        <div
          onClick={() => openModal({ component: "java" })}
          className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 "
        >
          <img src="/iconos/java_original_logo_icon_146458.png" alt="" />
        </div>

        <div
        onClick={() => openModal({ component: "javascript" })}
         className="box-content border-sky-800   bg-white shadow-lg     m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/javascript_icon_130900.png" alt="" />
        </div>

        <div
          onClick={() => openModal({ component: "node" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/file_type_node_icon_130301.png" alt="" />
        </div>
        <div
        onClick={() => openModal({ component: "html" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/file_type_html_icon_130541.png" alt="" />
        </div>
        <div   onClick={() => openModal({ component: "react" })} 
        className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/react_original_logo_icon_146374.png" alt="" />
        </div>

        <div  
         onClick={() => openModal({ component: "css" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/file_type_css_icon_130661.png" alt="" />
        </div>
        <div
         onClick={() => openModal({ component: "angular" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/file_type_angular_icon_130754.png" alt="" />
        </div>
        <div 
         onClick={() => openModal({ component: "redux" })}
        className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/redux_original_logo_icon_146365.png" alt="" />
        </div>
        <div
        
        onClick={() => openModal({ component: "mysql" })} className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img
            src="/iconos/mysql_original_wordmark_logo_icon_146417.png"
            alt=""
          />
        </div>
        <div
         onClick={() => openModal({ component: "visual" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img
            src="/iconos/applications_application_software_visualstudio_1819.png"
            alt=""
          />
        </div>
        <div
         onClick={() => openModal({ component: "c" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/c_icon_132529.png" alt="" />
        </div>

        <div
         onClick={() => openModal({ component: "cc" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/c_sharp_icon_213045.png" alt="" />
        </div>

        <div 
         onClick={() => openModal({ component: "typejs" })}
        
        className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img
            src="/iconos/file_type_typescript_official_icon_130107.png"
            alt=""
          />
        </div>
        <div
         onClick={() => openModal({ component: "postgres" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/folder_postgres_icon_161286.png" alt="" />
        </div>
        <div
         onClick={() => openModal({ component: "git" })}
         className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/github_git_icon_145985.png" alt="" />
        </div>
        <div 
         onClick={() => openModal({ component: "postman" })}
        className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img
            src="/iconos/postman_macos_bigsur_icon_189815.png"
            alt=""
          />
        </div>
        <div 
         onClick={() => openModal({ component: "render" })}
        className="box-content border-sky-800   bg-white shadow-lg    m-4 p-3 rounded-3xl   flex justify-center hover:translate-y-3 duration-700 cursor-pointer w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12 ">
          <img src="/iconos/render_logo_icon_248664.png" alt="" />
        </div>
      </div>

      
    </section>
  );
};

export default Technologies;
