import React, { useState } from "react";
import Select from "../../UI/Select/Select";
import Heading from "../../UI/Titles/Heading/Heading";
import Subtitle from "../../UI/Titles/Subtitle/Subtitle";
import { Layout } from "../../layout/Layout/Layout";
import { IOption } from "../../../shared/interface";
import styles from "./style.module.scss";

export const Schedule: React.FC = () => {
    const [selectedSchool, setSelectedSchool] = useState<IOption>({ value: '', label: '' });
    const [selectedGroup, setSelectedGroup] = useState<IOption>({ value: '', label: '' });
    const [selectedDate, setSelectedDate] = useState<IOption>({ value: '', label: '' });

    const nameSchool: IOption[] = [
        {label: "Художественная школа", value: "Художественная школа"},
        {label: "Музыкальная школа", value: "Музыкальная школа"},
        {label: "Школа танцев", value: "Школа танцев"},
    ];

    const groups: IOption[] = [
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
    ];

    const dates: IOption[] = [
        {label: "01/01/2023", value: "01/01/2023"},
        {label: "01/02/2023", value: "01/02/2023"},
        {label: "01/03/2023", value: "01/03/2023"},
    ];

    const handleChange = (
        event: React.ChangeEvent<HTMLSelectElement>, 
        options: IOption[], 
        setSelected: React.Dispatch<React.SetStateAction<IOption>>
    ) => {
        const selectedOption = options.find(
            (option) => option.value === event.target.value
        );
        setSelected(selectedOption || { value: '', label: '' });
    };

    return (
        <Layout>
            <div className={styles.content}>
                <Heading className={styles.heading}>Расписание</Heading>
                <ul className={styles.filters}>
                    <li>
                        <span className={styles.filterText}>Школа:</span>
                        <Select
                            className={styles.filter}
                            options={nameSchool}
                            value={selectedSchool.value}
                            onChange={(event) => handleChange(event, nameSchool, setSelectedSchool)}
                        />
                    </li>
                    <li>
                        <span className={styles.filterText}>Группа:</span>
                        <Select
                            className={styles.filter}
                            options={groups}
                            value={selectedGroup.value}
                            onChange={(event) => handleChange(event, groups, setSelectedGroup)}
                        />
                    </li>
                    <li>
                        <span className={styles.filterText}>Дата:</span>
                        <Select
                            className={styles.filter}
                            options={dates}
                            value={selectedDate.value}
                            onChange={(event) => handleChange(event, dates, setSelectedDate)}
                        />
                    </li>
                </ul>


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