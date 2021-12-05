import React from 'react';
import { FC } from "react";
import { useNavigate } from "react-router";
import styles from "./Error.module.scss";
import CustomButton from "../../components/Button/Button";


const ErrorPage: FC = function (props) {
  let navigate = useNavigate();
  function teste() {
    navigate(`/diversao`);
  }

  return (
    <div className={styles.cErro}>
      <div className={styles.cMsg}>
        <p>Algo aconteceu e não conseguimos apresentar a pagina.</p>
        <p>Tente novamente mais tarde</p>
      </div>
      <div className={styles.cIcon}></div>
      <CustomButton label="Voltar" onClickFunc={teste} />
    </div>
  );
};

export default ErrorPage;
