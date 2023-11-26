import Select from "../../../UI/Select/Select";
import Heading from "../../../UI/Titles/Heading/Heading";
import Button from "../../../UI/Button/Button";

import styles from "./styles.module.scss";

export const Accounts = () => {
  const accounts = [
    { value: "Все", label: "Все" },
    { value: "Преподаватели", label: "Преподаватели" },
    { value: "Ученики", label: "Ученики" },
    { value: "Родители", label: "Родители" },
  ];

  return (
    <>
      <Heading children={"Создание новости"} />
      <div className={styles.wrapper}>
        <Select options={accounts} className={styles.select} />
        <table className={styles.table}>
          <thead>
            <tr className={styles.table_header}>
              <th className={styles.table_header__text}>Ф.И.О.</th>
              <th className={styles.table_header__text}>Статус</th>
              <th className={styles.table_header__text}>E-mail</th>
              <th className={styles.table_header__text}>Телефон</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.item}>
              <td className={styles.text}>Александров Александр Александров</td>
              <td className={styles.text}>Преподаватель</td>
              <td className={styles.text}>alex115561@gmail.com</td>
              <td className={styles.text}>+799900223362</td>
            </tr>
            <tr className={styles.item}>
              <td className={styles.text}>Петров Пётр Петрович</td>
              <td className={styles.text}>Родитель</td>
              <td className={styles.text}>petr@gmail.com</td>
              <td className={styles.text}>+790922223362</td>
            </tr>
            <tr className={styles.item}>
              <td className={styles.text}>Васильев Александр Александрович </td>
              <td className={styles.text}>Ученик</td>
              <td className={styles.text}>vasil@gmail.com</td>
              <td className={styles.text}>+791400113992</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button children={"Сохранить"} className={styles.button} />
    </>
  );
};
