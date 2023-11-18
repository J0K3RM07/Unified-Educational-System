import classNames from "classnames";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { IProps } from "./interface";

const ActiveLink = ({ text, path, className }: IProps) => {
  const classes = classNames(style.link, className);

  return (
    <Link className={classes} to={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;