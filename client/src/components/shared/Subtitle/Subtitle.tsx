import classNames from "classnames";
import style from "./style.module.scss";

const Subtitle = ({ text, className }) => {
  const clases = classNames(style.subtitle, className);

  return <h2 className={clases}>{text}</h2>;
};

export default Subtitle;
