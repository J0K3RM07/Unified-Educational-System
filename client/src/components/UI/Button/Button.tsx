import style from "./style.module.scss";
import classNames from "classnames";
import { IProps } from "./interface";

const Button = ({ children, className, onClick, active, disabled }: IProps) => {
  const classes = classNames(style.btn, className, { active });

	return (
		<button className={classes} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button