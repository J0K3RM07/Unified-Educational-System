import Textarea from "../../../UI/Textarea/Textarea";
import Button from "../../../UI/Button/Button";

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
        <div className={styles.homework_download}>
          <p className={styles.homework_download__text}>
            Загрузите фото- и видеоматериалы
          </p>
          <div className={styles.homework_download__area} />
        </div>
      </div>
      <Button children={"Сохранить"} className={styles.button} />
    </div>
  );
};
