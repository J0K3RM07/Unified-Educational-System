import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { links } from "./const.js";
import logo from "../../../assets/imgs/header/logo.svg"

import style from "./style.module.scss";
import Button from "../../UI/Button/Button.tsx";

const Header = () => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate("/auth", { replace: true });
  };

  return (
    <div className={style.header}>
      <div>
        <Link to={"/"} className={style.logo}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className={style.ul}>
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link className={style.link} to={link.path}>
                <p className={style.linkText}>{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Button children={"Войти →"} onClick={signIn} />
    </div>
  )
}

export default Header;
