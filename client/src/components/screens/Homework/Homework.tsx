import { useState } from "react";

import Select from "../../UI/Select/Select";
import Heading from "../../UI/Titles/Heading/Heading";
import { Layout } from "../../layout/Layout/Layout";
import download from "../../../assets/imgs/teach/download.png";
import { IOption } from "../../../shared/interface";
import styles from "./styles.module.scss";
import Button from "../../UI/Button/Button";

export const Homework = () => {

    const [selectedSchoolSubject, setSelectedSchoolSubject] = useState<IOption>({label: "Сольфеджио", value: "solfeggio"});
    const [selectedDate, setSelectedDate] = useState<IOption>({ label: "понедельник", value: "monday" });

    const schoolSubject: IOption[] = [
        {label: "Сольфеджио", value: "solfeggio"},
        {label: "Хор", value: "chorus"},
    ]

    const date: IOption[] = [
        { label: "понедельник", value: "monday" },
        { label: "вторник", value: "tuesday" },
        { label: "среда", value: "wednesday" },
        { label: "четверг", value: "thursday" },
        { label: "пятница", value: "friday" },
        { label: "суббота", value: "saturday" },
        { label: "воскресенье", value: "sunday" },
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
            <div className={styles.homeworkBox}>
                <Heading children="Сдать домашнее задание" className={styles.heading} />
                <ul>
                    <li>
                        <span className={styles.filterText}>Выберите по какому предмету вы хотите сдать ДЗ:</span>
                        <Select 
                            className={styles.filter}
                            options={schoolSubject}
                            value={selectedSchoolSubject.value}
                            onChange={(event) => handleChange(event, schoolSubject, setSelectedDate)}
                        />
                    </li>
                    <li>
                        <span className={styles.filterText}>Выберите по какому предмету вы хотите сдать ДЗ:</span>
                        <Select 
                            className={styles.filter}
                            options={date}
                            value={selectedDate.value}
                            onChange={(event) => handleChange(event, date, setSelectedSchoolSubject)}
                        />
                    </li>
                </ul>
                <div className={styles.news_media}>
                    <div className={styles.news_media__download}>
                        <img src={download} />
                        <button className={styles.button}>Кликните здесь</button>
                        или перетащите файл
                        <p> PNG, JPG, MP4, AVI</p>
                    </div>
                </div>
                <Button className={styles.submit} children={"Отправить"} />
            </div>
        </Layout>
    );
}