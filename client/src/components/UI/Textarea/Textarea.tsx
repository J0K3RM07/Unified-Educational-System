import style from "./style.module.scss";
import classNames from "classnames";
import { IProps } from "./interface";

const Textarea = ({ id, className, label, ...attrs }: IProps) => {
  const clases = classNames(style.textarea, className);

  return (
    <div className={style.wrapper}>
      {label && (
        <label className={style.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea name={id} id={id} className={clases} {...attrs}></textarea>
    </div>
  );
};

export default Textarea;
