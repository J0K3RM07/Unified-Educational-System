import Input from "../../../shared/Input/Input";
import Textarea from "../../../shared/Textarea/Textarea";
import Subtitle from "../../../shared/Subtitle/Subtitle";
import Button from "../../../shared/Button/Button";

import style from "./style.module.scss";
import { useRef, useState } from "react";

const Application = ({ active, setActive }) => {
  const formRef = useRef();

  const [buttonActiveFlag, setButtonActiveFlag] = useState(false);

  function handleChange() {
    let active_button_flag_buf = true;
    for (let i = 0; i <= formRef.current.length - 2; i++) {
      if (formRef.current[i].value == "") {
        active_button_flag_buf = false;
      } else {
        formRef.current[i].className = formRef.current[i].className.replace(
          "error_input",
          "",
        );
        formRef.current[i].placeholder = "";
      }
    }
    setButtonActiveFlag(active_button_flag_buf);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // validation
    let validationFlag = true;
    for (let [name, value] of formData) {
      if (value === "") {
        validationFlag = false;
        break;
      }
    }

    if (!validationFlag && buttonActiveFlag !== false) {
      alert("Заполните поля!");

      formRef.current[0].value = "";
      return;
    } else if (buttonActiveFlag !== false) {
      formData.append("status", "новая");

      fetch("http://localhost:8082/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
        .then((response) => {
          if (response.ok) {
            alert("Заявка успешно отправлена!");
          } else {
            console.log(
              "Что-то пошло не так, попробуйте отправить заявку позже",
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setActive(false);
      for (let i = 0; i <= formRef.current.length - 2; i++) {
        formRef.current[i].value = "";
      }
    } else {
      for (let i = 0; i <= formRef.current.length - 2; i++) {
        if (formRef.current[i].value == "") {
          formRef.current[i].placeholder = "Заполните поле! ";
          formRef.current[i].className =
            formRef.current[i].className + " " + style.error_input;
        }
      }
    }
  };

  return (
    <div
      className={
        active ? `${style.application} ${style.active}` : style.application
      }
      onClick={() => setActive(false)}>
      <form
        ref={formRef}
        action=''
        onSubmit={handleSubmit}
        onChange={handleChange}>
        <div className={style.content} onClick={(e) => e.stopPropagation()}>
          <Subtitle text={"Заявка"} className={style.title} />

          <Input id={"name"} label={"ФИО"} />
          <Input id={"nameBoss"} label={"ФИО руководителя"} />
          <Input id={"subdivision"} label={"Подразделение"} />
          <Input id={"jobTitle"} label={"Должность"} />
          <Input id={"experience"} label={"Стаж"} />

          <Textarea
            name={"benefits"}
            id={"benefits"}
            label={"Достижения"}
            cols={"40"}
            rows={"4"}
          />
          <Textarea
            name={"message"}
            id={"message"}
            label={"Мотивационное письмо"}
            cols={"40"}
            rows={"4"}
          />
          {buttonActiveFlag ? (
            <Button
              children={"Отправить заявку на студенчество"}
              className={style.btn}
            />
          ) : (
            <Button
              onClick={() => {}}
              children={"Отправить заявку на студенчество"}
              className={style.btn_error}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Application;
