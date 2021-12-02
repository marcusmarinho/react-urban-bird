import React from 'react';
import { FC } from "react";
import { useNavigate } from "react-router";
import "./Error.scss";
import CustomButton from "../../components/Button/Button";


const ErrorPage: FC = function (props) {
  let navigate = useNavigate();
  function teste() {
    navigate(`/diversao`);
  }

  return (
    <div className="c-erro">
      <div className="c-msg">
        <p>Algo aconteceu e não conseguimos apresentar a pagina.</p>
        <p>Tente novamente mais tarde</p>
      </div>
      <div className="c-icon"></div>
      <CustomButton label="Voltar" onClickFunc={teste} />
    </div>
  );
};

export default ErrorPage;
