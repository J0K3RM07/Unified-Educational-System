import { Layout } from "../../layout/Layout/Layout";
import Heading from "../../UI/Titles/Heading/Heading";

import left from "../../../assets/imgs/student/left.png";
import rigth from "../../../assets/imgs/student/right.png";

import styles from "./styles.module.scss";

export const StudentArea = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Heading children={"Журнал"} />
          <div className={styles.header_date}>
            <img src={left} />
            <p className={styles.header_date__text}>01.09.23-07.09.23 </p>
            <img src={rigth} />
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table_header}>
              <th className={styles.table_header__text}>Предмет</th>
              <th className={styles.table_header__text}>Работа на уроке</th>
              <th className={styles.table_header__text}>Домашнее задание</th>
              <th className={styles.table_header__text}>Средняя оценка</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.item}>
              <td className={styles.item_text}>
                <p className={styles.item_text__title}>Сольфеджио</p>
              </td>
              <td className={styles.item_text}>
                <div className={styles.item_text__box}>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Понедельник</p>
                    <p className={styles.grade_item}>5</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Среда</p>
                    <p className={styles.grade_item}>3</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Пятница</p>
                    <p className={styles.grade_item}>н</p>
                  </div>
                </div>
              </td>
              <td className={styles.item_text}>
                <div className={styles.item_text__box}>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Понедельник</p>
                    <p className={styles.grade_item}>-</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Среда</p>
                    <p className={styles.grade_item}>4</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Пятница</p>
                    <p className={styles.grade_item}>-</p>
                  </div>
                </div>
              </td>
              <td className={styles.item_text}>
                <div className={styles.item_text__box}>
                  <p className={styles.grade_item__finish}>4</p>
                  <p className={styles.grade_item}>Замечательно!</p>
                </div>
              </td>
            </tr>
            <tr className={styles.item}>
              <td className={styles.item_text}>
                <p className={styles.item_text__title}>Хор</p>
              </td>
              <td className={styles.item_text}>
                <div className={styles.item_text__box}>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Вторник</p>
                    <p className={styles.grade_item}>н</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Четверг</p>
                    <p className={styles.grade_item}>3</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Суббота</p>
                    <p className={styles.grade_item}>н</p>
                  </div>
                </div>
              </td>
              <td className={styles.item_text}>
                <div className={styles.item_text__box}>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Вторник</p>
                    <p className={styles.grade_item}>3</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Четверг</p>
                    <p className={styles.grade_item}>-</p>
                  </div>
                  <div className={styles.grade}>
                    <p className={styles.grade_item}>Суббота</p>
                    <p className={styles.grade_item}>3</p>
                  </div>
                </div>
              </td>
              <td className={styles.item_text}>
                <div className={styles.item_text__box}>
                  <p className={styles.grade_item__finish}>3</p>
                  <p className={styles.grade_item}>Слеует потрудиться!</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
