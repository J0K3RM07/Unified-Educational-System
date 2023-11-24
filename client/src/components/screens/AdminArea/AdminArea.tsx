import { Layout } from "../../layout/Layout/Layout";
import { AddNews } from "./news/AddNews";

import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";

export const AdminArea = () => {
  const params = useParams();
  const pageName = params.name;

  console.log(pageName, params);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {pageName === "addnews" ? <AddNews /> : ""}
      </div>
    </Layout>
  );
};
