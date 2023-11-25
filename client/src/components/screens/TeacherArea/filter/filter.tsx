import Select from "../../../UI/Select/Select";

import { useState } from "react";
import { IProps } from "./interface";

import styles from "./styles.module.scss";

export const Filter = ({ change }: IProps) => {
  const [filter, setFilter] = useState({ group: "", lesson: "", day: "" });

  const groups = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
  ];

  const lessons = [
    { value: "Сольфеджио", label: "Сольфеджио" },
    { value: "Хор", label: "Хор" },
  ];

  const days = [
    { value: "Понедельник", label: "Понедельник" },
    { value: "Вторник", label: "Вторник" },
    { value: "Среда", label: "Среда" },
    { value: "Четверг", label: "Четверг" },
    { value: "Пятница", label: "Пятница" },
    { value: "Суббота", label: "Суббота" },
    { value: "Воскресенье", label: "Воскресенье" },
  ];

  if (filter.day && filter.group && filter.lesson !== "") {
    change(filter);
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filter_item}>
        <p className={styles.filter_item__title}>Дисциплина</p>
        <div className={styles.filter_item__select}>
          <p>Название дисциплины</p>
          <Select
            options={lessons}
            className={styles.select}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFilter({ ...filter, lesson: e.target.value })
            }
          />
        </div>
      </div>
      <div className={styles.filter_item}>
        <p className={styles.filter_item__title}>Класс</p>
        <div className={styles.filter_item__select}>
          <p>Название группы</p>
          <Select
            options={groups}
            className={styles.select}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFilter({ ...filter, group: e.target.value })
            }
          />
        </div>
      </div>
      <div className={styles.filter_item}>
        <p className={styles.filter_item__title}>Дата</p>
        <div className={styles.filter_item__select}>
          <p>День</p>
          <Select
            options={days}
            className={styles.select}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFilter({ ...filter, day: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};
