import classNames from "classnames";
import style from "./style.module.scss";
import { IProps } from "./interface";

const Subtitle = ({ children, className }: IProps) => {
  const classes = classNames(style.subtitle, className);

  return <h2 className={classes}>{children}</h2>;
};

export default Subtitle;
