import { useSelector } from "react-redux";

import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Heading from "../../UI/Heading/Heading";
import ActiveLink from "../../UI/ActiveLink/ActiveLink";
import useFetch from "../../../hooks/useFetch";
import Subtitle from "../../UI/Subtitle/Subtitle";
import corses from "../../../assets/imgs/course/courses.svg";
import Button from "../../UI/Button/Button";
import style from "./style.module.scss";

const Courses = () => {
  const { data } = useFetch("http://localhost:8085/lectures"); // заменить на url с бека
  const role = useSelector((state) => state.role.role);

  return (
    <div className='container'>
      <Header />
      <div className={style.course}>
        <Heading text={"Курсы"} className={style.title} />
        <div>
          <ul className={style.courses}>
            {data &&
              data.map((course) => {
                return (
                  <li key={course?.id}>
                    <div className={style.content}>
                      <div className={style.descr}>
                        <Subtitle
                          text={course?.name}
                          className={style.subtitle}
                        />
                        <ActiveLink
                          text={"Посмотреть"}
                          path={`/courses/${course?.id}`}
                        />
                      </div>
                      <div>
                        <img className={style.img} src={corses} alt='course' />
                      </div>
                    </div>
                  </li>
                );
              })}
            {role === "teacher" ? <Button children={"Добавить курс"} /> : null}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
