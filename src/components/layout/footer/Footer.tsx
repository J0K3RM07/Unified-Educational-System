import { Link } from "react-router-dom";

import { socials } from "./const.js";

import style from "./style.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.wrapper}>
        <ul className={style.socials}>
          {socials.map((social) => {
            return (
              <Link className={style.social} to={social.path} key={social.name}>
                <li className={style.li}>
                  <img
                    className={style.img}
                    src={social.img}
                    alt={social.name}
                  />
                </li>
              </Link>
            );
          })}
        </ul>
        <p className={style.text}>©2023 Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;
