import Heading from "../../../UI/Titles/Heading/Heading";
import { Input } from "../../../UI/Input/Input";
import Textarea from "../../../UI/Textarea/Textarea";

import download from "../../../../assets/imgs/teach/download.png";

import styles from "./styles.module.scss";
import Button from "../../../UI/Button/Button";

export const AddNews = () => {
  return (
    <>
      <Heading children={"Создание новости"} />
      <div className={styles.news}>
        <div className={styles.news_content}>
          <div className={styles.wrapper}>
            <p className={styles.news_content__title}>Содержание новости</p>
            <p className={styles.news_content__text}>
              Заполните основную информацию о событии
            </p>
          </div>
          <div>
            <Input
              className={styles.input}
              label={"Заголовок"}
              placeholder={"Наименование события"}
            />
            <Textarea
              label={"Описание домашнего задания"}
              placeholder={"Введите описание"}
              id={"Описание"}
              className={styles.textarea}
            />
          </div>
        </div>
        <div className={styles.news_media}>
          <>
            <div className={styles.wrapper}>
              <p className={styles.news_content__title}>Медиаконтент</p>
              <p className={styles.news_content__text}>
                Загрузите фото- и видеоматериалы
              </p>
            </div>
          </>
          <div className={styles.news_media__download}>
            <img src={download} />
            <button className={styles.button}>Кликните здесь</button>
            или перетащите файл
            <p> PNG, JPG, MP4, AVI</p>
          </div>
        </div>
        <Button children={"Опубликовать"} className={styles.save} />
      </div>
    </>
  );
};
