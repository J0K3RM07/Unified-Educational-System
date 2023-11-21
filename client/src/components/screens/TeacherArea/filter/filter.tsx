import { Input } from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";

import styles from "./styles.module.scss";

export const Filter = () => {
  const group = [
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
  ];

  const lessons = [
    { value: "Сольфеджио", label: "Сольфеджио" },
    { value: "Хор", label: "Хор" },
    { value: "Ансамбль", label: "Ансамбль" },
  ];

  return (
    <div className={styles.filter}>
      <div className={styles.filter_item}>
        <p className={styles.filter_item__title}>Дисциплина</p>
        <div className={styles.filter_item__select}>
          <p>Название дисциплины</p>
          <Select options={lessons} className={styles.select} />
        </div>
      </div>
      <div className={styles.filter_item}>
        <p className={styles.filter_item__title}>Группа</p>
        <div className={styles.filter_item__select}>
          <p>Название группы</p>
          <Select options={group} className={styles.select} />
        </div>
      </div>
      <div className={styles.filter_item}>
        <p className={styles.filter_item__title}>Дата</p>
        <div className={styles.filter_item__select}>
          <p>День</p>
          <Input
            className={styles.input}
            placeholder={"дд.мм.гг"}
            type='Date'
          />
        </div>
      </div>
    </div>
  );
};
