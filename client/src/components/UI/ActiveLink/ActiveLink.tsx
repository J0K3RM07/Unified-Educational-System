import classNames from "classnames";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { IProps } from "./interface";

const ActiveLink = ({ text, path, className }: IProps) => {
  const clases = classNames(style.link, className);

  return (
    <Link className={clases} to={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;
