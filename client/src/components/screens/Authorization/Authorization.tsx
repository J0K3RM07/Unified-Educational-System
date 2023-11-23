import { Link } from "react-router-dom";

import { Layout } from "../../layout/Layout/Layout";
import Button from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

import styles from "./styles.module.scss";
import Heading from "../../UI/Titles/Heading/Heading";

export const Authorization = () => {
  return (
    <Layout>
      <div className={styles.auth}>
        <form className={styles.form}>
          <Heading children="Авторизация" className={styles.title} />
          <Input
            className={styles.input}
            label={"ФИО"}
            placeholder={"Введите ваше ФИО"}
          />

          <Input
            className={styles.input}
            label={"Пароль"}
            type={"password"}
            placeholder={"Введите пароль"}
          />

          <Button className={styles.submit} children={"Войти"} />
        </form>
        <div className={styles.regBox}>
          <span className={styles.noAcc}>Еще нет аккаунта? </span>
          <Link to={"/reg"} className={styles.reg}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </Layout>
  );
};
