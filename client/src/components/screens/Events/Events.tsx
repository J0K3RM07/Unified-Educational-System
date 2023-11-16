import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Heading from "../../UI/Heading/Heading";
import style from "./style.module.scss";
import Subtitle from "../../UI/Subtitle/Subtitle";
import ActiveLink from "../../UI/ActiveLink/ActiveLink";

const Events = () => {
  const key = "61667a39-a309-4fcf-bd7a-8f503bf6d796";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://content.guardianapis.com/search?q=event&api-key=${key}&page=1&page-size=10`,
      )
      .then((res) => {
        setData([...res.data.response.results]);
      });
  }, []);

  return (
    <div className='container'>
      <Header />
      <div className={style.events}>
        <Heading text={"Мероприятия"} className={style.title} />
        <div>
          <ul className={style.event}>
            {data?.map((event) => {
              const date = event?.webPublicationDate;
              const formattedDate = format(new Date(date), "dd.MM.yyyy");
              const uri = encodeURIComponent(event?.id);
              return (
                <li key={uri}>
                  <div className={style.content}>
                    <div className={style.descr}>
                      <p className={style.data}>{formattedDate}</p>
                      <Subtitle
                        text={event?.webTitle}
                        className={style.subtitle}
                      />
                      <ActiveLink text={"Посмотреть"} path={event?.webUrl} />
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

export default Events;
