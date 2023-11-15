import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

import style from "./style.module.scss";
import Heading from "../../shared/Heading/Heading";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";

const Registration = () => {
  return (
    <div className='container'>
      <Header />
      <div className={style.registration}>
        <Heading text={"Регистрация"} className={style.heading} />
        <div className={style.content}>
          <div className={style.info}>
            <Input className={style.input} id={"name"} label={"ФИО"} />
            <Input
              className={style.input}
              id={"password"}
              label={"Пароль"}
              type={"password"}
            />
            <Input className={style.input} id={"email"} label={"Email"} />
          </div>
          <Button className={style.btn} children={"Зарегистрироваться"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;
