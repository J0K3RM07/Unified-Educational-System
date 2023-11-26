import { useState } from "react";
import Select from "../../UI/Select/Select";
import Heading from "../../UI/Titles/Heading/Heading";
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
                            <td className={styles.th}>День недели</td>
                            <th className={styles.th}>Время</th >
                            <th className={styles.th}>ФИО ученика</th >
                            <th className={styles.th}>Класс</th >
                            <th className={styles.th}>Предмет</th >
                            <th className={styles.th}>№ Кабинета</th >
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.td}>Понедельник</td>
                            <td className={styles.td}>9:15-9:55</td>
                            <td className={styles.td}>Иванов И.И. </td>
                            <td className={styles.td}>1 класс</td>
                            <td className={styles.td}>специальность</td>
                            <td className={styles.td}>208</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Вторник</td>
                            <td className={styles.td}>9:15-9:55</td>
                            <td className={styles.td}>Иванов И.И. </td>
                            <td className={styles.td}>1 класс</td>
                            <td className={styles.td}>специальность</td>
                            <td className={styles.td}>208</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Среда</td>
                            <td className={styles.td}>9:15-9:55</td>
                            <td className={styles.td}>Иванов И.И. </td>
                            <td className={styles.td}>1 класс</td>
                            <td className={styles.td}>специальность</td>
                            <td className={styles.td}>208</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}