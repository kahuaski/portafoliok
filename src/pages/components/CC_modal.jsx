import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CC_modal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="rounded-xl shadow-lg shadow-blue-900 top-10 bottom-10 bg-white right-10 left-10 font-[Oregano] text-lg border-solid m-10 flex-1  flex-row-reverse gap-5 p-5  fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-blue-500 to-indigo-800" 
    >
      <div  className="bg-white p-8 rounded-lg shadow-lg   ">
<div className="flex justify-end">

      <button onClick={onClose} >
        <i className="bx bxs-x-circle"></i>
      </button>
</div>
<div className="flex justify-items-center flex-col">
  <div className="flex justify-center">
<img src="public/iconos/java_original_logo_icon_146458.png" className="w[50px] h-[50px]"/>
  </div>
    
      <h2 className="text-8xl text-center">Java</h2>
      <p className="text-center p-6 text-xl">
        En el año 2010, adquirí mis primeros conocimientos en Java y empecé a
        explorar el mundo de la programación orientada a objetos. Durante ese
        tiempo, trabajé en varios proyectos donde apliqué mis habilidades recién
        adquiridas en Java. Estos proyectos me permitieron comprender los
        conceptos fundamentales del lenguaje, como la gestión de objetos, la
        herencia y la encapsulación. Uno de los proyectos más destacados que
        llevé a cabo en 2010 fue la creación de una aplicación de gestión de
        inventario para una pequeña empresa local. Utilizando Java, diseñé un
        sistema que permitía realizar un seguimiento eficiente de los productos,
        gestionar el inventario en tiempo real y generar informes detallados.
      </p>
</div>
      </div>
    </Modal>
  );
};

export default CC_modal;
