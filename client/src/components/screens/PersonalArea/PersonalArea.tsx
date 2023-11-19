import { FC } from "react";
import { Layout } from "../../layout/Layout/Layout";

import styles from "./styles.module.scss"
import Heading from "../../UI/Titles/Heading/Heading";

export const PersonalArea: FC = () => {
    return (
        <Layout>
            <div className={styles.personal}>
                <Heading children="Личный кабинет"/>
            </div>
        </Layout>
    )
}