import { useParams } from "react-router-dom";
import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";

import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Heading from "../../shared/Heading/Heading";
import Subtitle from "../../shared/Subtitle/Subtitle";
import style from "./style.module.scss";
import Button from "../../shared/Button/Button";
import ActiveLink from "../../shared/ActiveLink/ActiveLink";

const Course = () => {
  const { id } = useParams();
  const { data } = useFetch(`http://localhost:8085/lectures/${id}`);
  const [showAbstract, setShowAbstract] = useState(false);

  const handleWatchClick = () => {
    setShowAbstract(!showAbstract);
  };

  return (
    <div className='container'>
      <Header />
      {data && (
        <div className={style.course}>
          <Heading text={data?.name} className={style.title} />
          <div className={style.abstract}>
            <div className={style.wrapper}>
              <Subtitle text={"Конспекты"} className={style.subtitle} />
              <Button
                children={showAbstract ? "Скрыть" : "Смотреть"}
                onClick={handleWatchClick}
              />
            </div>
            {showAbstract && <p className={style.text}>{data?.text}</p>}
          </div>

          <div className={style.content}>
            <Subtitle text={"Видео-материалы"} className={style.subtitle} />
            <ActiveLink text={"Перейти"} path={data?.link} />
          </div>
          <div className={style.content}>
            <Subtitle text={"Задания"} className={style.subtitle} />
            <Button children={"Скачать"} />
          </div>
          <ActiveLink
            text={"Вернуться ко всем курсам"}
            path={"/courses"}
            className={style.backLink}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Course;
