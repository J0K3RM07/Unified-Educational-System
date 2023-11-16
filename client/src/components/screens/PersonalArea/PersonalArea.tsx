import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import avatarMan from "../../../assets/imgs/peronalArea/avatarMan.svg";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Heading from "../../UI/Heading/Heading";
import Button from "../../UI/Button/Button";

import Input from "../../UI/Input/Input";
import Textarea from "../../UI/Textarea/Textarea";
import UpLoadFile from "./UpLoadFile/UpLoadFile";
import Select from "../../UI/Select/Select";
import style from "./style.module.scss";

const PersonalArea = () => {
  const { data } = useFetch("http://localhost:8084/user"); // заменить на url с бека

  const options = [
    { label: data?.group, value: "1" },
    { label: "Группа 2", value: "2" },
    { label: "Группа 3", value: "3" },
  ];
  const [selectedGroup, setSelectedGroup] = useState("");
  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedGroup(event.target.value);

  const gender = [
    { label: data?.gender, value: "муж" },
    { label: "жен", value: "жен" },
  ];
  const [selectedGender, setSelectedGender] = useState("");
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedGender(event.target.value);

  return (
    <div className='container'>
      <Header />
      <div className={style.personal}>
        <Heading text={"Личный кабинет"} className={style.heading} />
        <div className={style.content}>
          <form className={style.form} action='' method='POST'>
            {data && (
              <div className={style.leftSide}>
                <div className={style.container}>
                  <div className={style.imgContainer}>
                    <img className={style.img} src={avatarMan} alt='avatar' />
                    <Button children={"Изменить фото"} className={style.btn} />
                  </div>
                  <div className={style.info}>
                    <Input
                      defaultValue={data?.name}
                      id={"name"}
                      label={"ФИО"}
                    />
                    <div className={style.wrapper}>
                      <Input
                        defaultValue={data?.date}
                        id={"date"}
                        label={"Дата рождения"}
                      />
                      <Select
                        defaultValue={data?.group}
                        defaultOptions={data?.group}
                        options={options}
                        value={selectedGroup}
                        onChange={handleGroupChange}
                      />
                      <Select
                        options={gender}
                        value={selectedGender}
                        onChange={handleGenderChange}
                      />
                    </div>
                    <div className={style.wrapper}>
                      <Input
                        defaultValue={data?.mail}
                        id={"email"}
                        label={"mail"}
                        type={"email"}
                      />
                      <Input
                        defaultValue={data?.rating}
                        id={"rating"}
                        label={"Рейтинг"}
                        disabled
                      />
                    </div>
                    <Textarea
                      defaultValue={data?.about}
                      name={"about"}
                      id={"about"}
                      label={"О себе"}
                      cols={"40"}
                      rows={"10"}
                      className={style.about}
                    />
                    <Button children={"Сохранить"} type={"submit"} />
                  </div>
                </div>
              </div>
            )}
          </form>
          <div className={style.rightSide}>
            <UpLoadFile />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalArea;
