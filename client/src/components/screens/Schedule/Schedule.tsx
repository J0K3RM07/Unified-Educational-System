import Select from "../../UI/Select/Select";
import Heading from "../../UI/Titles/Heading/Heading";
import Subtitle from "../../UI/Titles/Subtitle/Subtitle";
import { Layout } from "../../layout/Layout/Layout";

import styles from "./style.module.scss";

export const Schedule = () => {

    const nameSchool = [
        {label: "Художественная школа", value: "Художественная школа"},
        {label: "Музыкальная школа", value: "Музыкальная школа"},
        {label: "Школа танцев", value: "Школа танцев"},
    ]

    const group = [
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
    ]

    const date = [
        {label: "01/01/2023", value: "01/01/2023"},
        {label: "01/02/2023", value: "01/02/2023"},
        {label: "01/03/2023", value: "01/03/2023"},
    ]


    return (
        <Layout>
            <div className={styles.content}>
                <Heading className={styles.heading} children="Расписание" />

                <div>
                    <ul className={styles.filters}>
                        <li>
                            <span className={styles.filterText}>Школа:</span>
                            <Select
                                className={styles.filter}
                                options={nameSchool}
                                value={nameSchool[0].value}
                            />
                        </li>
                        <li>
                            <span className={styles.filterText}>Группа:</span>
                            <Select
                                className={styles.filter}
                                options={group}
                                value={nameSchool[0].value}
                            />
                        </li>
                        <li>
                            <span className={styles.filterText}>Дата:</span>
                            <Select
                                className={styles.filter}
                                options={date}
                                value={nameSchool[0].value}
                            />
                        </li>
                    </ul>
                </div>

                <ul className={styles.schedulesBox}>
                    <li className={styles.schedules}>
                        <ul className={styles.scheduleOnDate}>
                            <Subtitle children="03.03" className={styles.title}/>
                            <li className={styles.schedule}>
                                <p className={styles.time}>15:00 - 16:00</p>
                                <p className={styles.lesson}>Живопись</p>
                                <p className={styles.teacher}>Петров Е. З.</p>
                                <p className={styles.auditorium}>ауд. 2</p>
                            </li>
                            <li className={styles.schedule}>
                                <p className={styles.time}>15:00 - 16:00</p>
                                <p className={styles.lesson}>Живопись</p>
                                <p className={styles.teacher}>Петров Е. З.</p>
                                <p className={styles.auditorium}>ауд. 2</p>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.schedules}>
                        <ul className={styles.scheduleOnDate}>
                            <Subtitle children="03.03" className={styles.title}/>
                            <li className={styles.schedule}>
                                <p className={styles.time}>15:00 - 16:00</p>
                                <p className={styles.lesson}>Живопись</p>
                                <p className={styles.teacher}>Петров Е. З.</p>
                                <p className={styles.auditorium}>ауд. 2</p>
                            </li>
                            <li className={styles.schedule}>
                                <p className={styles.time}>15:00 - 16:00</p>
                                <p className={styles.lesson}>Живопись</p>
                                <p className={styles.teacher}>Петров Е. З.</p>
                                <p className={styles.auditorium}>ауд. 2</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}