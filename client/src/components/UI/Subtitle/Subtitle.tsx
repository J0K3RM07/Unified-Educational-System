import classNames from "classnames";
import style from "./style.module.scss";

interface IProps {
  text: string;
  className?: string;
}

const Subtitle = ({ text, className }: IProps) => {
  const clases = classNames(style.subtitle, className);

  return <h2 className={clases}>{text}</h2>;
};

export default Subtitle;
