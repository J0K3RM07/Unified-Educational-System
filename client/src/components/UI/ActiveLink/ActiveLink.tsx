import classNames from "classnames";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

interface IProps {
  text?: string;
  className?: string;
  path: string;
}

const ActiveLink = ({ text, path, className }: IProps) => {
  const clases = classNames(style.link, className);

  return (
    <Link className={clases} to={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;
