import { Layout } from "../../layout/Layout/Layout";
import styles from "./styles.module.scss";

export const NotFound = () => {
  return (
    <Layout>
      <div className={styles.error}>
        <p className={styles.error_title}>Ошибка 404</p>
        <div className={styles.error_box}></div>
        <p className={styles.error_box__text}>
          Запрошенный материал не найден.
        </p>
        <p className={styles.error_box__text}>
          Если вы считаете, что произошла ошибка, сообщите, пожалуйста, на почту
        </p>
        <p className={styles.error_box__email}>Email: tvorchestvo@gmail.com</p>
      </div>
    </Layout>
  );
};
