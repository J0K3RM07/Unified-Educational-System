import style from "./style.module.scss";
import classNames from "classnames";
import { IProps } from "./interface";

const Heading = ({ text, className }: IProps) => {
  const classes = classNames(style.heading, className);

  return <h1 className={classes}>{text}</h1>;
};

export default Heading;
