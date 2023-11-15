import React, { useState } from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import axios from "axios";

import Heading from "../../shared/Heading/Heading";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import avatar from "../../../assets/imgs/peronalArea/avatarMan.svg";

import style from "./style.module.scss";
import Subtitle from "../../shared/Subtitle/Subtitle";

const Rating = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("Nikita");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`http://localhost:8087/${value}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        alert("Мы не нашли пользователя с таким именем");
        console.error(error.message);
      });
  };

  return (
    <div className='container'>
      <Header />

      <div className={style.schedule}>
        <Heading text={"Рейтинг"} className={style.heading} />
        <div className={style.selects}>
          <Input
            id='name'
            label='Name'
            className={style.input}
            onChange={handleChange}
          />
          <Button
            onClick={handleSearch}
            children={"Поиск"}
            className={style.btn}
          />
        </div>
        {data && (
          <div className={style.student}>
            <div className={style.about}>
              <img className={style.img} src={avatar} alt='' />
              <p className={style.name}>{data?.name}</p>
            </div>
            <div className={style.descr}>
              <Subtitle text={data?.course} className={style.submit} />
              <div className={style.progress}>
                <div className={style.circle}>
                  <p className={style.ready}>Просмотренно</p>
                  <p className={style.done}>{data?.check}</p>
                  <p className={style.exercise}>Лекций</p>
                </div>
                <div className={style.circle2}>
                  <p className={style.ready}>Выполнено</p>
                  <p className={style.done}>{data?.complete}</p>
                  <p className={style.exercise}>Заданий</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Rating;
