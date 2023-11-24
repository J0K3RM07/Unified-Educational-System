import Textarea from "../../../UI/Textarea/Textarea";
import Button from "../../../UI/Button/Button";

import download from "../../../../assets/imgs/teach/download.png";

import styles from "./styles.module.scss";

export const Homework = () => {
  return (
    <div className={styles.homework}>
      <p className={styles.homework_title}>Группа 21а Сольфеджио 04.11.23</p>
      <div className={styles.content}>
        <div className={styles.homework_textarea}>
          <Textarea
            label={"Краткое содержание домашнего задания"}
            id={"Содержание"}
            className={styles.homework_textarea__item}
          />
          <Textarea
            label={"Описание домашнего задания"}
            id={"Описание"}
            className={styles.homework_textarea__item}
          />
        </div>
        <div className={styles.homework__download}>
          <img src={download} />
          <button className={styles.button}>Кликните здесь</button>
          или перетащите файл
          <p> PNG, JPG, MP4, AVI</p>
        </div>
      </div>
      <Button children={"Сохранить"} className={styles.save} />
    </div>
  );
};
