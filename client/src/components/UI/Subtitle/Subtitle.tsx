import classNames from "classnames";
import style from "./style.module.scss";
import { IProps } from "./interface";

const Subtitle = ({ text, className }: IProps) => {
  const classes = classNames(style.subtitle, className);

  return <h2 className={classes}>{text}</h2>;
};

export default Subtitle;