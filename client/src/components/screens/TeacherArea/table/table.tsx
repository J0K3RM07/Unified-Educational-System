import Button from "../../../UI/Button/Button";
import { Item } from "../tableItem/item";

import styles from "./styled.module.scss";

export const Table = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Группа 21а Сольфеджио 04.11.23</p>
      <div className={styles.table}>
        <div className={styles.table_header}>
          <p className={styles.table_header__text}>№</p>
          <p className={`${styles.table_header__text} ${styles.name}`}>
            Ф.И.О.
          </p>
          <p className={styles.table_header__text}>Посещение</p>
          <p className={styles.table_header__text}>Оценка</p>
        </div>

        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <Button children={"Сохранить"} className={styles.button} />
    </div>
  );
};
