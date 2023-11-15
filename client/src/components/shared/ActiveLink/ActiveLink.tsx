import classNames from "classnames";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const ActiveLink = ({ text, path, className }) => {
  const clases = classNames(style.link, className);

  return (
    <Link className={clases} to={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;
