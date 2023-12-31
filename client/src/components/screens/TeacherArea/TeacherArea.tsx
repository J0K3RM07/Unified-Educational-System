import { Layout } from "../../layout/Layout/Layout";
import { Table } from "./table/table";
import { Filter } from "./filter/filter";
import { Homework } from "./homework/homework";
import Heading from "../../UI/Titles/Heading/Heading";

import { useParams } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.scss";

export const TeacherArea = () => {
  const [filter, setFilter] = useState({
    day: "",
    lesson: "",
    group: "",
  });

  const params = useParams();
  const pageName = params.name;

  console.log(filter);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {pageName === "homework" ? (
          <Heading children={"Домашнее задание"} />
        ) : (
          <Heading children={"Рейтинг"} />
        )}

        <Filter change={setFilter} />
        {pageName === "homework" ? <Homework /> : <Table filter={filter} />}
      </div>
    </Layout>
  );
};
