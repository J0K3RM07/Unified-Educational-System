import { Link } from "react-router-dom";

import { EventProps } from "./interface";
import styles from "./styles.module.scss";

export const Event = ({ title, date, img, id}: EventProps) => {
    return (
        <div id={id} className={styles.event}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.imgBox}>
                <img className={styles.img} src={img} alt={title} />
            </div>
            <Link className={styles.link} to={`/event/${id}`}>
                Посмотреть
            </Link>
        </div>
    );
}