import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Heading from "../../shared/Heading/Heading";
import style from "./style.module.scss";
import Subtitle from "../../shared/Subtitle/Subtitle";
import ActiveLink from "../../shared/ActiveLink/ActiveLink";

const News = () => {
  const key = "61667a39-a309-4fcf-bd7a-8f503bf6d796";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://content.guardianapis.com/search?q=sport&api-key=${key}&page=1&page-size=10`,
      )
      .then((res) => {
        setData([...res.data.response.results]);
      });
  }, []);

  return (
    <div className='container'>
      <Header />
      <div className={style.news}>
        <Heading text={"Новости"} className={style.title} />
        <div>
          <ul className={style.novelty}>
            {data?.map((news) => {
              const uri = encodeURIComponent(news?.id);
              const date = news?.webPublicationDate;
              const formattedDate = format(new Date(date), "dd.MM.yyyy");
              return (
                <li key={uri}>
                  <div className={style.content}>
                    <div className={style.descr}>
                      <p className={style.data}>{formattedDate}</p>
                      <Subtitle
                        text={news?.webTitle}
                        className={style.subtitle}
                      />
                      <ActiveLink text={"Посмотреть"} path={news?.webUrl} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
