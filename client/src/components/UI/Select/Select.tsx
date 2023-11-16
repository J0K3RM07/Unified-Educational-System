import style from "./style.module.scss";
import classNames from "classnames";

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  options: IOption[];
  value: string;
  onChange: () => void;
  className: string;
}

const Select = ({ options, value, onChange, className }: IProps) => {
  const clases = classNames(style.select, className);

  return (
    <select className={clases} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
