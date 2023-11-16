import style from "./style.module.scss";
import classNames from "classnames";

interface IProps {
  text: string;
  className?: string;
}

const Heading = ({ text, className }: IProps) => {
  const clases = classNames(style.heading, className);

  return <h1 className={clases}>{text}</h1>;
};

export default Heading;
