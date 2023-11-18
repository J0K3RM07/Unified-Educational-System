import style from "./style.module.scss";
import classNames from "classnames";
import { IProps } from "./interface";

const Select = ({ options, value, onChange, className }: IProps) => {
  const classes = classNames(style.select, className);

  return (
    <select className={classes} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
