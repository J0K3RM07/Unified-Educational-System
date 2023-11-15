import { useState, useRef, forwardRef } from "react";

import style from "./style.module.scss";
import Button from "../../../shared/Button/Button";

const server = "server"; // заменить на сервер с бэка

const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

const UpLoadFile = () => {
  const filePicker = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("homework", selectedFile); //заменить на имя с бэка
    const res = await fetch(server, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
  };

  return (
    <>
      <Button children={"Прикрепить ДЗ"} onClick={handlePick} />
      <div className={style.ul}>
        <Input
          ref={filePicker}
          type={"file"}
          onChange={handleChange}
          className={style.hidden}
        />
      </div>
      <Button children={"Отправить ДЗ"} onClick={handleUpload} />
    </>
  );
};

export default UpLoadFile;
