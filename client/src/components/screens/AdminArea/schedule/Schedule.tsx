import Heading from "../../../UI/Titles/Heading/Heading";
import Button from "../../../UI/Button/Button";
import Select from "../../../UI/Select/Select";
import { Input } from "../../../UI/Input/Input";

import styles from "./styles.module.scss";

export const Schedule = () => {
  const teacher = [
    {
      value: "Александров Александр Александров",
      label: "АлександровАлександр Александров",
    },
    { value: "Петров Пётр Петрович", label: "Петров Пётр Петрович" },
    {
      value: "Васильев Александр Александрович",
      label: "Васильев Александр Александрович",
    },
  ];

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
    <>
      <Heading children={"Редактирование расписания"} />
      <Button children={"Посмотреть расписание"} />
      <div className={styles.schedule}>
        <div className={styles.item}>
          <p className={styles.item_title}>Преподаватель</p>
          <p className={styles.item_text}>Выберите сотрудника</p>
          <Select options={teacher} className={styles.select} />
        </div>
        <div className={styles.item}>
          <p className={styles.item_title}>Дисциплина</p>
          <p className={styles.item_text}>Название дисциплины</p>
          <Select options={lessons} className={styles.select} />
        </div>
        <div className={styles.item}>
          <p className={styles.item_title}>Группа</p>
          <p className={styles.item_text}>Название группы</p>
          <Select options={group} className={styles.select} />
        </div>
        <div className={styles.item}>
          <p className={styles.item_title}>Дата</p>
          <p className={styles.item_text}>День</p>
          <Input className={styles.input} placeholder={"дд.мм.гг"} />
        </div>
        <div className={styles.item}>
          <p className={styles.item_title}>Время</p>
          <p className={styles.item_text}>Время начала</p>
          <Input className={styles.input} placeholder={"чч:мм"} />
        </div>
        <div className={styles.item}>
          <p className={styles.item_title}>Аудитория</p>
          <p className={styles.item_text}>Номер</p>
          <Input className={styles.input} placeholder={"Аудитория"} />
        </div>
      </div>
      <Button children={"Сохранить"} className={styles.button} />
    </>
  );
};
