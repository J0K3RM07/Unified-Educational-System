import Button from "../../../UI/Button/Button";
import Select from "../../../UI/Select/Select";

import styles from "./styled.module.scss";

export const Table = () => {
  const options = [
    { value: "5", label: "5" },
    { value: "4", label: "4" },
    { value: "4", label: "3" },
    { value: "4", label: "2" },
    { value: "4", label: "1" },
  ];

  const finding = [
    { value: "Присутствовал", label: "Присутствовал" },
    { value: "Отсутствовал", label: "Отсутствовал" },
  ];

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Группа 21а Сольфеджио 04.11.23</p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_header}>
            <th className={styles.table_header__text}>№</th>
            <th className={`${styles.table_header__text} ${styles.name}`}>
              Ф.И.О.
            </th>
            <th className={styles.table_header__text}>Посещение</th>
            <th className={styles.table_header__text}>Оценка</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={finding} className={styles.select} />
            </td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={finding} className={styles.select} />
            </td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={finding} className={styles.select} />
            </td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={finding} className={styles.select} />
            </td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={finding} className={styles.select} />
            </td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
        </tbody>
      </table>
      <Button children={"Сохранить"} className={styles.button} />
    </div>
  );
};
