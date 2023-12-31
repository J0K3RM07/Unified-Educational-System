import Heading from "../../UI/Titles/Heading/Heading";
import { Layout } from "../../layout/Layout/Layout";
import pic from "../../../assets/imgs/main/mainPic.svg"

import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";

export const Event = () => {
    const param = useParams()
    console.log(param);

    return (
        <Layout>
            <div className={styles.eventBox}>
                <Heading className={styles.heading} children="Мастер-класс" />
                <div className={styles.content}>
                    <div>
                        <span className={styles.date}>Дата публикации:16.09</span>
                        <p className={styles.descr}>Мастер-класс по струнным инструментам для учеников музыкальной школы собрал аншлаг. В минувшую субботу в музыкальной школе нашего города прошел мастер-класс известного музыканта-струнника, посвященный игре на скрипке, альте и виолончели. Мероприятие было организовано с целью повышения профессионального уровня учеников и обмена опытом между молодыми и опытными музыкантами.</p>
                        <p className={styles.descr}>Мастер-класс проводился в рамках сотрудничества между нашей музыкальной школой и международным музыкальным фестивалем, который ежегодно собирает талантливых музыкантов со всего мира. В рамках мероприятия участники смогли не только прослушать лекции и демонстрации игры на струнных инструментах, но и получить индивидуальные консультации от приглашенного специалиста.</p>
                        <p className={styles.descr}>По словам организаторов, мастер-класс стал настоящим праздником для всех участников. Музыканты смогли познакомиться с новыми техниками игры, обменяться опытом и получить ценные советы от своего коллеги. Ученики же получили возможность не только узнать больше о мире музыки, но и пообщаться с известными музыкантами, что безусловно поможет им в развитии своих талантов.</p>
                        <p className={styles.descr}>Мероприятие завершилось концертом, на котором ученики продемонстрировали свои успехи в освоении новых техник игры на струнных инструментах.</p>
                    </div>
                    <div>
                        <img src={pic}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}