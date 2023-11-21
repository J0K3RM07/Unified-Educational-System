import { FC } from "react";
import classNames from "classnames";

import { IProps } from "./interface";

import style from "./style.module.scss";

const Textarea: FC<IProps> = ({ id, label, value, className, rows, ...attrs }) => {
  const classes = classNames(style.textarea, className);

  return (
    <div className={style.wrapper}>
      {label && (
        <label htmlFor={id} className={style.label}>
          {label}
        </label>
      )}
      <textarea id={id} rows={rows} className={classes} {...attrs} defaultValue={value} />
    </div>
  );
};

export default Textarea;
