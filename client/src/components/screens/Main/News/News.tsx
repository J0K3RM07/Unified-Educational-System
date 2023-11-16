import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

import Subtitle from "../../../UI/Subtitle/Subtitle";
import style from "./style.module.scss";
import ActiveLink from "../../../UI/ActiveLink/ActiveLink";

import { Link } from "react-router-dom";

const News = () => {
  const key = "61667a39-a309-4fcf-bd7a-8f503bf6d796";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://content.guardianapis.com/search?q=sport&api-key=${key}&page=1&page-size=6`,
      )
      .then((res) => {
        setData([...res.data.response.results]);
      });
  }, []);

  return (
    <div className={style.news}>
      <div className={style.wrapper}>
        <Subtitle text={"Новости"} className={style.subtitle} />
        <ActiveLink text={"Все"} path={"/news"}></ActiveLink>
      </div>
      <ul className={style.ul}>
        {data?.map((news) => {
          const date = news.webPublicationDate;
          const formattedDate = format(new Date(date), "dd.MM.yyyy");

          return (
            <Link to={news.webUrl} key={news.id}>
              <li className={style.li}>
                <div>
                  <img className={style.img} src={news.img} alt={news.alt} />
                </div>
                <div className={style.content}>
                  <p className={style.date}>{formattedDate}</p>
                  <h4 className={style.text}>{news.webTitle}</h4>
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

export default News;
