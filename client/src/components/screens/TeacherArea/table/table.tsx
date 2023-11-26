import Button from "../../../UI/Button/Button";
import Select from "../../../UI/Select/Select";

import { IProps, Response, IResponseItems } from "./interface";
import useFetch from "../../../../hooks/useFetch";
import { useState, useEffect } from "react";

import styles from "./styled.module.scss";

export const Table = ({ filter }: IProps) => {
  let { data, isLoading } = useFetch("http://localhost:8000/students");

  const [students, setStudents] = useState<Response>();

  useEffect(() => {
    data && setStudents(data);
  }, [isLoading]);

  const options = [
    { value: "-", label: "-" },
    { value: "н", label: "н" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  console.log(data);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        {filter.day && filter.group && filter.lesson !== ""
          ? `Класс: ${filter.group} Дисциплина: ${filter.lesson} День: ${filter.day}`
          : ""}
        Группа {filter.group} {filter.lesson} {filter.day}
      </p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_header}>
            <th className={styles.table_header__text}>№</th>
            <th className={`${styles.table_header__text} ${styles.name}`}>
              Ф.И.О.
            </th>
            <th className={styles.table_header__text}>Оценка</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((item: IResponseItems) => (
            <tr className={styles.item} key={item.id}>
              <td className={styles.text}>{item.id}</td>
              <td className={styles.text}>{item.name}</td>
              <td>
                <Select options={options} className={styles.select} />
              </td>
            </tr>
          ))}
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
            <td>
              <Select options={options} className={styles.select} />
            </td>
          </tr>
          <tr className={styles.item}>
            <td className={styles.text}>1</td>
            <td className={styles.text}>Петров Иван Александрович</td>
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
