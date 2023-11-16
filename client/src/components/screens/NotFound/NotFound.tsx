import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActiveLink from "../../UI/ActiveLink/ActiveLink";
import Heading from "../../UI/Heading/Heading";
import style from "./style.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className={style.container}>
      <Heading
        text={"Ой... похоже такой страницы нет!"}
        className={style.heading}
      />
      <ActiveLink
        path={"/"}
        className={style.link}
        text={"Вернуться на главную"}
      />
    </div>
  );
};

export default NotFound;
