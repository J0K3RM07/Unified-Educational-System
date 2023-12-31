import { Link } from "react-router-dom";

import logo from "../../../assets/imgs/header/logo.svg"
import style from "./style.module.scss";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={style.wrapper}>
				<div className={style.contactsBox}>
					<Link to={"#"} >
						<span className={style.contact}>Телефон: +79990022331</span>
					</Link>
					<Link to={"#"}>
						<span className={style.contact}>Email: tvorchestvo@gmail.com</span>
					</Link>
				</div>
				<div>
				<Link to={"/"} className={style.logo}>
					<img src={logo} alt="logo" />
				</Link>
				</div>
				<div className={style.securityBox}>
					<Link to={"#"}>
						<span className={style.security}>Информационная безопасность</span>
					</Link>
					<p className={style.rights}>©2023 Все права защищены</p>
				</div>
			</div>
		</div>
	)
}

export default Footer