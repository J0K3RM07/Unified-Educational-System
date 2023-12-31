import { Link } from "react-router-dom";

import { Layout } from "../../layout/Layout/Layout";
import Button from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

import styles from "./styles.module.scss";
import Heading from "../../UI/Titles/Heading/Heading";

export const Registration = () => {
  return (
    <Layout>
      <div className={styles.reg}>
        <form className={styles.form}>
          <Heading children="Регистрация" className={styles.title} />
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

          <Input
            className={styles.input}
            label={"Подтверждение пароля"}
            type={"password"}
            placeholder={"Подтвердите пароль"}
          />

          <Button className={styles.submit} children={"Войти"} />
        </form>
        <div className={styles.authBox}>
          <span className={styles.haveAcc}>Есть аккаунт? </span>
          <Link to={"/auth"} className={styles.auth}>
            Войти
          </Link>
        </div>
      </div>
    </Layout>
  );
};
