// eslint-disable-next-line no-unused-vars
import React from "react";
import "./styles.css";
import { FcAdvance } from "react-icons/fc";
import { LuArrowBigRightDash } from "react-icons/lu";

const CorpoTwo = () => {
  return (
    <>
      <hr className="hrTop" />
      <div className="containerParagrafo">
        <div>
          <p className="paragrafo">
            Não sabe por onde começar? <br />
            Que tal pelo começo?
          </p>
        </div>
        <div>
          <img src="/src/assets/Ativo 7.png" />
        </div>
      </div>
      <hr />
      <div className="backTwoCorpo">
        <div className="ContainerButton">
          <h1  className="button1">
            Cursos
          </h1>
        </div>
        <div className="ContainerCursos">
          <div className="cursos">
            <a className="cursoBasico" href="#">
              Curso básico de confeitaria
            </a>
          </div>
          <div>
            <LuArrowBigRightDash size="70px" color="white" />
          </div>

          <div className="containerDescricao">
            <p className="Descricao">
              Descubra os fundamentos da <br />
              Confeitaria, incluindo técnicas <br />
              de preparação e decoração.
            </p>
          </div>
        </div>

        <div className="ContainerCursos">
          <div className="cursos">
            <a className="cursoBasico" href="#">
              Introdução  a  decoração  <br />de bolo
            </a>
          </div>
          <div>
            <LuArrowBigRightDash size="70px" color="white" />
          </div>
          <div className="containerDescricao">
            <p className="Descricao">
              Focado em forma tecnicas <br />fácil 
              de decoração de bolos,<br /> como 
              Cobertura e confeitaria.
            </p>
            
            </div>
            
        </div>
        <center className="MaisCursos"><a href="#">Mais Cursos</a></center>
      </div>
    </>
  );
};

export default CorpoTwo;
