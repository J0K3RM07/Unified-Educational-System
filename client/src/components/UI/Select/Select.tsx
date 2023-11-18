import style from "./style.module.scss";
import classNames from "classnames";
import { IProps } from "./interface";

const Select = ({ options, value, onChange, className, id }: IProps) => {
  const classes = classNames(style.select, className);

  return (
    <select id={id} className={classes} value={value} onChange={onChange}>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={style.options}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
