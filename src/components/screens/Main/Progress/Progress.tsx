import students from "../../../../assets/imgs/progress/students.png";
import ActiveLink from "../../../shared/ActiveLink/ActiveLink";
import Subtitle from "../../../shared/Subtitle/Subtitle";

import style from "./style.module.scss";

const Progress = () => {
  return (
    <div className={style.progress}>
      <div className={style.leftBox}>
        <div className={style.content}>
          <Subtitle text={"Отслеживай свой прогресс каждый день"} />
          <p className={style.text}>
            Следи за своими достижениями, исправляй ошибки, учи что-то новое
          </p>
          <ActiveLink text={"Посмотреть прогресс"} path={"/rating"} />
        </div>
      </div>
      <div className={style.rightBox}>
        <img className={style.img} src={students} alt='студенты' />
      </div>
    </div>
  );
};

export default Progress;
