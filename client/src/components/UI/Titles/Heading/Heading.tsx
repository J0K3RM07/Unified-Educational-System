import style from "./style.module.scss";
import classNames from "classnames";
import { IProps } from "./interface";

const Heading = ({ children, className }: IProps) => {
  const classes = classNames(style.heading, className);

  return <h1 className={classes}>{children}</h1>;
};

export default Heading;
