import Heading from "../../UI/Titles/Heading/Heading";
import { Layout } from "../../layout/Layout/Layout";

import styles from "./styles.module.scss";

import mainPic from "../../../assets/imgs/main/mainPic.svg"
import event1 from "../../../assets/imgs/main/event1.svg"
import event2 from "../../../assets/imgs/main/event2.svg"
import event3 from "../../../assets/imgs/main/event3.svg"
import event4 from "../../../assets/imgs/main/event4.svg"
import Subtitle from "../../UI/Titles/Subtitle/Subtitle";
import { Event } from "./Event/Event";

export const Main = () => {
    return (
        <Layout>
            <div className={styles.mainBox}>
                <Heading className={styles.heading} children="О нас" />
                <div className={styles.wrapper}>
                    <div className={styles.descr}>
                        <p>«Творчество» - это уникальная образовательная система, которая объединяет все музыкальные школы Екатеринбурга. Наша цель - помочь каждому ученику раскрыть свой творческий потенциал и научиться любить и ценить музыку. Мы предлагаем обучение по разным направлениям, таким как фортепиано, гитара, вокал, хор, народные инструменты и многие другие. Наши опытные преподаватели помогают каждому ученику достигать высоких результатов и развивать свои таланты.</p>
                        <p>Одной из главных особенностей “Творчества” является возможность связать школу, преподавателей, родителей и учеников в единую систему. Это позволяет контролировать расписание занятий, посещаемость и успеваемость учеников, а также общаться с преподавателями и получать рекомендации по обучению. Кроме того, “Творчество” активно участвует в культурных мероприятиях города, проводит концерты и мастер-классы. Мы также сотрудничаем с другими организациями и образовательными учреждениями, чтобы предоставить нашим ученикам больше возможностей для развития.</p>
                        <p>Если вы хотите присоединиться к нашей творческой семье, мы будем рады видеть вас среди наших учеников. Вместе мы сможем открыть для вас мир музыки и искусства, где каждый сможет найти свое место и достичь успеха.</p>
                    </div>
                    <img src={mainPic} alt="наша школа" />
                </div>
            </div>

            <hr className={styles.hr} />

            <div className={styles.eventBox}>
                <Subtitle className={styles.eventsTitle} children="Мероприятия" />
                <ul className={styles.events}>
                    <li className={styles.event}>
                        <Event img={event1} id='1' title="Мастер-класс" date="16.09" />
                    </li>
                    <li className={styles.event}>
                        <Event img={event2} id='2' title="Благотворительный концерт" date="16.09" />
                    </li>
                    <li className={styles.event}>
                        <Event img={event3} id='3' title="Концерт народной музыки" date="16.09" />
                    </li>
                    <li className={styles.event}>
                        <Event img={event4} id='4' title="Вечер классической музыки" date="16.09" />
                    </li>
                </ul>
            </div>

        </Layout>
    );
}