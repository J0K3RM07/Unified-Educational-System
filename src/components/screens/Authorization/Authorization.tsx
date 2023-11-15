import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

import avatar from "../../../assets/imgs/peronalArea/avatarMan.svg";

import style from "./style.module.scss";
import Heading from "../../shared/Heading/Heading";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import ActiveLink from "../../shared/ActiveLink/ActiveLink";

const Authorization = () => {
  return (
    <div className='container'>
      <Header />

      <div className={style.authorization}>
        <Heading text={"Авторизация"} className={style.heading} />
        <div className={style.content}>
          <div>
            <img className={style.img} src={avatar} alt='avatar' />
          </div>
          <div className={style.info}>
            <Input className={style.input} id={"name"} label={"ФИО"} />
            <Input
              className={style.input}
              id={"password"}
              label={"Пароль"}
              type={"password"}
            />
          </div>
          <Button className={style.btn} children={"Войти"} />
          <ActiveLink
            path={"/reg"}
            text={"Зарегистрироваться"}
            className={style.btn}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Authorization;
