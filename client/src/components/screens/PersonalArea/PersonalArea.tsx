import { FC } from "react";

import avatar from "../../../assets/imgs/shared/avatar.svg"
import changeBtn from "../../../assets/imgs/shared/changeBtn.svg"

import { Layout } from "../../layout/Layout/Layout";
import Heading from "../../UI/Titles/Heading/Heading";
import Subtitle from "../../UI/Titles/Subtitle/Subtitle";

import styles from "./styles.module.scss";
import { Input } from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Textarea from "../../UI/Textarea/Textarea";

export const PersonalArea: FC = () => {
    return (
        <Layout>
            <div className={styles.personalBox}>
                <Heading children="Личный кабинет"/>
                <div className={styles.wrapper}>
                    <div className={styles.personal}>
                        <div className={styles.avatarBox}>
                            <div>
                                <img className={styles.avatar} src={avatar} alt="avatar" />
                            </div>
                            <div className={styles.inputs}>
                                <Input 
                                    className={styles.input}
                                    label="Школа"
                                />
                                <Input 
                                    className={styles.input}
                                    label="ФИО"
                                />
                                <Input
                                    className={styles.input}
                                    label="Email"
                                />
                                <Input 
                                    className={styles.input}
                                    label="Телефон"
                                />
                                <Input 
                                    className={styles.input}
                                    label="Класс"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.aboutBox}>
                        <Subtitle children="Обо мне" />
                        <Textarea 
                            className={styles.about}
                            value={"Меня зовут Иван, я учусь в четвёртом классе. У меня много друзей, и я люблю проводить с ними время. Мне нравится читать книги и узнавать новое о животных и природе. Увлекаюсь рисованием и музыкой."}
                            rows={9}
                        />
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.schools}>
                        <div className={styles.wrapper}>
                            <Subtitle children="Инструменты" />
                            <Button children="Добавить" />
                        </div>
                        <ul className={styles.schoolsBox}>
                            <li className={styles.shool}>
                                <div className={styles.shoolDescr}>
                                    <Subtitle children="Труба" />
                                </div>
                                <img className={styles.changeBtn} src={changeBtn} alt="change button" />
                            </li>
                            <li className={styles.shool}>
                                <div className={styles.shoolDescr}>
                                    <Subtitle children="Труба" />
                                </div>
                                <img className={styles.changeBtn} src={changeBtn} alt="change button" />
                            </li>
                        </ul>
                    </div>

                    <div className={styles.benefits}>
                        <div className={styles.wrapper}>
                            <Subtitle children="Достижения" />
                            <Button children="Добавить" />
                        </div>
                        <ul className={styles.benefitsBox}>
                            <li className={styles.benefit}>
                                <div className={styles.benefitDescr}>
                                    <Subtitle children="Выставка живописи"  />
                                    <p className={styles.descr}>Пейзаж осени 1 место</p>
                                    <p className={styles.descr}>Май 2021</p>
                                </div>
                                <img className={styles.changeBtn} src={changeBtn} alt="change button" />
                            </li>
                            <li className={styles.benefit}>
                                <div className={styles.benefitDescr}>
                                    <Subtitle children="Выставка живописи"  />
                                    <p className={styles.descr}>Пейзаж осени 1 место</p>
                                    <p className={styles.descr}>Май 2021</p>
                                </div>
                                <img className={styles.changeBtn} src={changeBtn} alt="change button" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </Layout>
    )
}