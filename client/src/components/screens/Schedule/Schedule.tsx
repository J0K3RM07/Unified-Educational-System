import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Heading from "../../shared/Heading/Heading";
import Button from "../../shared/Button/Button";
import Select from "../../shared/Select/Select";
import style from "./style.module.scss";

const Schedule = () => {
  const role = useSelector((state) => state.role.role);

  const options = [
    { label: "Группа 1", value: "group1" },
    { label: "Группа 2", value: "group2" },
    { label: "Группа 3", value: "group3" },
  ];
  const [selectedGroup, setSelectedGroup] = useState("group1");
  const handleGroupChange = (event) => setSelectedGroup(event.target.value);

  const [data, setData] = useState([]);

  const handleSearch = () => {
    axios
      .get(`http://localhost:8086/${selectedGroup}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='container'>
      <Header />

      <div className={style.schedule}>
        <Heading text={"Расписание"} className={style.heading} />
        <div className={style.selects}>
          <Select
            options={options}
            value={selectedGroup}
            onChange={handleGroupChange}
          />
          <Button
            children={"Поиск"}
            className={style.btn}
            onClick={handleSearch}
          />
        </div>
        <ul className={style.content}>
          {data &&
            data?.map((data) => {
              return (
                <li key={data?.id} className={style.descr}>
                  <p className={style.date}>{data?.date}</p>
                  <p className={style.time}>{data?.time}</p>
                  <p className={style.time}>{data?.group}</p>
                  <h3 className={style.title}>{data?.type}</h3>
                  <p className={style.teacher}>{data?.teacher}</p>
                </li>
              );
            })}
        </ul>
        {role === "curator" ? (
          <Button children={"Добавить расписание"} className={style.add} />
        ) : null}
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
