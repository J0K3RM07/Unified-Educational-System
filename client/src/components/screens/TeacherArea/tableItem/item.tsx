import Button from "../../../UI/Button/Button";
import Select from "../../../UI/Select/Select";

import styles from "./styled.module.scss";

export const Item = () => {
  const options = [
    { value: "5", label: "5" },
    { value: "4", label: "4" },
    { value: "4", label: "3" },
    { value: "4", label: "2" },
    { value: "4", label: "1" },
  ];

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>1</p>
      <p className={styles.text}>Петров Иван Александрович</p>
      <Button children={"Присутстововал"} className={styles.button} />
      <Select options={options} className={styles.select} />
    </div>
  );
};
