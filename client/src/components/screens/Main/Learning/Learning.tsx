import { useState } from "react";

import student from "../../../../assets/imgs/learning/student.png";
import Heading from "../../../UI/Heading/Heading";

import style from "./style.module.scss";
import Button from "../../../UI/Button/Button";
import Application from "../Application/Application";

const Learning = () => {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = () => setModalActive(true);

  return (
    <div className={style.learning}>
      <Application active={modalActive} setActive={setModalActive} />
      <div className={style.leftBox}>
        <div>
          <p className={style.text}>Образовательная платформа Совкомбанка</p>
          <Heading text={"Начни учиться вместе с Совкомбанк, это просто."} />
          <p className={style.subtitle}>
            Практикуйся и развивайся вместе с нами!
          </p>
          <Button onClick={handleClick} children={"Стать студентом"} />
        </div>
      </div>
      <div className={style.rightBox}>
        <img className={style.img} src={student} alt='студент' />
      </div>
    </div>
  );
};

export default Learning;
