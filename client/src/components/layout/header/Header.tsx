import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../../store/roleReducer/roleReducer.js";
import { useNavigate } from "react-router-dom";

import { links } from "./const.js";

import style from "./style.module.scss";
import ActiveLink from "../../shared/ActiveLink/ActiveLink.tsx";
import Button from "../../shared/Button/Button.tsx";
import Select from "../../shared/Select/Select.tsx";

const Header = () => {
  const nowRole = useSelector((state) => state.role.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = [
    { label: "гость", value: "guest" },
    { label: "студент", value: "student" },
    { label: "учитель", value: "teacher" },
    { label: "куратор", value: "curator" },
  ];
  const [selectedRole, setSelectedRole] = useState("user");
  const handleSelectedRole = (event) => {
    setSelectedRole(event.target.value);
    dispatch(setRole(event.target.value));
  };

  const signOut = () => {
    dispatch(setRole("guest"));
  };

  const signIn = () => {
    navigate("/auth", { replace: true });
  };

  return (
    <div className={style.header}>
      <Link to={"/"} className={style.logo}>
        <p className={style.logoText}>СКБ-Университет</p>
      </Link>
      <ul className={style.ul}>
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link className={style.link} to={link.path}>
                <p className={style.linkText}>{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Select
        defaultValue={nowRole}
        defaultOptions={nowRole}
        options={role}
        value={nowRole}
        onChange={handleSelectedRole}
        className={style.select}
      />
      {nowRole === "guest" ? (
        <Button children={"Войти →"} onClick={signIn} />
      ) : (
        <Button children={"Выйти →"} onClick={signOut} />
      )}
    </div>
  );
};

export default Header;
