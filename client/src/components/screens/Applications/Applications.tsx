import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

// import useFetch from "../../../hooks/useFetch";
import Heading from "../../UI/Heading/Heading";

import Application from "./Application/Application";

import style from "./style.module.scss";
import HeaderUl from "./HeaderUl/HeaderUl";

import axios from "axios";
import { useEffect, useState } from "react";
import { Applications } from "../../../types";

const Applications = () => {
  // let { data } = useFetch("http://localhost:8082/applications") // заменить на url с бека

  const [data, setData] = useState<Applications>();

  useEffect(() => {
    fetch("http://localhost:8082/applications")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  function deleteApplication(id: number) {
    fetch("http://localhost:8082/applications/" + id, {
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:8082/applications")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
    });
  }

  // function saveApplicationElem() {}

  function editApplication(id: number, data_to_send: object) {
    axios.put("http://localhost:8082/applications/" + id, data_to_send);
    alert("Заявка отредактирована!");
  }

  return (
    <div className='container'>
      <Header />

      <div className={style.applications}>
        <Heading text={"Заявки"} className={style.heading} />
        <div className={style.content}>
          <HeaderUl />
          <ul className={style.ul}>
            {data &&
              data.map((data) => (
                <li key={data.id}>
                  <Application
                    //saveFunction={saveApplicationElem}
                    editApplication={editApplication}
                    deleteFunction={deleteApplication}
                    data={data}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Applications;
