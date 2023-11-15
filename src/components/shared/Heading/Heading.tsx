import style from "./style.module.scss";
import classNames from "classnames";

const Heading = ({ text, className }) => {
  const clases = classNames(style.heading, className);

  return <h1 className={clases}>{text}</h1>;
};

export default Heading;
