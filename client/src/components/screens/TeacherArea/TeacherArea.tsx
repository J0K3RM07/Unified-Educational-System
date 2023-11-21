import { Layout } from "../../layout/Layout/Layout";
import { Table } from "./table/table";
import { Filter } from "./filter/filter";
import { Homework } from "./homework/homework";
import Heading from "../../UI/Titles/Heading/Heading";

import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";

export const TeacherArea = () => {
  const params = useParams();
  const pageName = params.name;

  console.log(pageName, params);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Heading children={"Рейтинг"} />
        <Filter />
        {pageName === "homework" ? <Homework /> : <Table />}
      </div>
    </Layout>
  );
};
