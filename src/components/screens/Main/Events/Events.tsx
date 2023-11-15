import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

import Subtitle from "../../../shared/Subtitle/Subtitle";
import style from "./style.module.scss";
import ActiveLink from "../../../shared/ActiveLink/ActiveLink";

import { Link } from "react-router-dom";

const Events = () => {
  const key = "61667a39-a309-4fcf-bd7a-8f503bf6d796";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://content.guardianapis.com/search?q=events&api-key=${key}&page=1&page-size=6`,
      )
      .then((res) => {
        setData([...res.data.response.results]);
      });
  }, []);

  return (
    <div className={style.news}>
      <div className={style.wrapper}>
        <Subtitle text={"Мероприятия"} className={style.subtitle} />
        <ActiveLink text={"Все"} path={"/events"}></ActiveLink>
      </div>
      <ul className={style.ul}>
        {data.map((events) => {
          const date = events.webPublicationDate;
          const formattedDate = format(new Date(date), "dd.MM.yyyy");

          return (
            <Link key={events.id}>
              <li className={style.li}>
                <div>
                  <img
                    className={style.img}
                    src={events.img}
                    alt={events.alt}
                  />
                </div>
                <div className={style.content}>
                  <p className={style.date}>{formattedDate}</p>
                  <h4 className={style.text}>{events.webTitle}</h4>
                  <p>Подробнее →</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;
