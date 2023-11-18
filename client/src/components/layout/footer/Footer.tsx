import style from "./style.module.scss";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={style.wrapper}>
				<div>
					<p>Телефон: +79990022331</p>
					<p>Email: tvorchestvo@gmail.com</p>
				</div>
				<div>

				</div>
				<div>
					<p>Информационная безопасность</p>
					<p>©2023 Все права защищены</p>
				</div>
			</div>
		</div>
	)
}

export default Footer