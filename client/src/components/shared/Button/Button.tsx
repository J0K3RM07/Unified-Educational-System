import style from "./style.module.scss";
import classNames from "classnames";

const Button = ({ children, className, onClick, active, disabled }) => {
  const clases = classNames(style.btn, className, { active });

  return (
    <button className={clases} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
