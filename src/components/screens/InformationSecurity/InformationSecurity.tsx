import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

import Heading from "../../shared/Heading/Heading";
import ActiveLink from "../../shared/ActiveLink/ActiveLink";
import style from "./style.module.scss";

import securityInfoImg from "../../../assets/imgs/security/security-info.png";

const InformationSecurity = () => {
  return (
    <div className='container'>
      <Header />

      <div className={style.security}>
        <Heading
          text={"Страничка информациионой безопасности"}
          className={style.heading}
        />
        <div className={style.content}>
          <img
            className={style.img}
            src={securityInfoImg}
            alt='security Info Img'
          />
          <ActiveLink
            path={"/"}
            text={"Вернуться на главную страницу"}
            className={style.linkBack}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InformationSecurity;
