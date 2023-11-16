import style from "./style.module.scss";
import classNames from "classnames";

interface IProps {
  children?: string;
  className?: string;
  onClick?: () => void;
  active?: any;
  disabled?: any;
}

const Button = ({ children, className, onClick, active, disabled }: IProps) => {
  const clases = classNames(style.btn, className, { active });

  return (
    <button className={clases} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
