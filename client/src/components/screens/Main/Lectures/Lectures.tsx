import student from "../../../../assets/imgs/lectures/student.png";

import style from "./style.module.scss";

import Subtitle from "../../../UI/Subtitle/Subtitle";
import ActiveLink from "../../../UI/ActiveLink/ActiveLink";
import Benefits from "../Benefits/Benefits";

const Lectures = () => {
  return (
    <div className={style.container}>
      <Benefits />
      <div className={style.lectures}>
        <div>
          <img src={student} alt='student' />
        </div>
        <div className={style.content}>
          <Subtitle text={"Ознакомься с учебной программой уже сейчас!"} />
          <p className={style.text}>
            Мы практикуем традиционные и новые эффективные подходы к изучению
          </p>
          <ActiveLink text={"Посмотреть программу"} path={"/courses"} />
        </div>
      </div>
    </div>
  );
};

export default Lectures;
