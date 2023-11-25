import { useState } from "react";

import Select from "../../UI/Select/Select";
import Heading from "../../UI/Titles/Heading/Heading";
import { Layout } from "../../layout/Layout/Layout";
import { IOption } from "../../../shared/interface";

import styles from "./styles.module.scss";

export const Rating = () => {
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
        {label: "понедельник", value: "monday"},
        {label: "вторник", value: "tuesday"},
        {label: "среда", value: "wednesday"},
        {label: "четверг", value: "thursday"},
        {label: "пятница", value: "friday"},
        {label: "суббота", value: "saturday"},
        {label: "воскресенье", value: "sunday"},
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
            <div className={styles.ratingBox}>
                <Heading children="Рейтинг" />

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
                        <span className={styles.filterText}>Класс:</span>
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

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.thead}>Предмет</th>
                            <th className={styles.thead}>Оценки</th>
                            <th className={styles.thead}>Кол-во пропусков </th>
                            <th className={styles.thead}>Итоговая оценка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.trow}>
                            <td className={styles.td}>Хор</td>
                            <td className={styles.td}>4 4 4 5 5 3 4 5 </td>
                            <td className={styles.td}>2 </td>
                            <td className={styles.td}>4</td>
                        </tr>
                        <tr className={styles.trow}>
                            <td className={styles.td}>Сольфеджио</td>
                            <td className={styles.td}>5 5 5 5 5 5 5 </td>
                            <td className={styles.td}>0</td>
                            <td className={styles.td}>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}