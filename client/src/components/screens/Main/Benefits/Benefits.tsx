import style from "./style.module.scss";

import { benefits } from "../Benefits/const.js";

const Benefits = () => {
  return (
    <div className={style.container}>
      <ul className={style.ul}>
        {benefits.map((benefit) => {
          return (
            <li className={style.li} key={benefit.name}>
              <div>
                <img src={benefit.img} alt={benefit.name} />
              </div>
              <p className={style.decr}>{benefit.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Benefits;
