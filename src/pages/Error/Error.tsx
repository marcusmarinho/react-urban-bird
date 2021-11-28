import React, { FC } from "react";
import { useNavigate } from "react-router";

import CustomButton from "../../components/Button/Button";

import "./Error.scss";

const ErrorPage: FC = function (props) {
  let navigate = useNavigate();
  function teste() {
    console.log("navegou");
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
