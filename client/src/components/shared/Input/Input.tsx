import classNames from "classnames";
import style from "./style.module.scss";

const Input = ({ id, className, label, error, ...attrs }) => {
  const clases = classNames(style.input, className, { error });

  return (
    <div className={style.inputWrapper}>
      {label && (
        <label className={style.label} htmlFor={id}>
          {label}
        </label>
      )}
      {attrs.required && <span className={style.required}>Required</span>}
      <input name={id} id={id} className={clases} {...attrs} />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};

export default Input;
