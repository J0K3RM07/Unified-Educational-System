import { Link } from "react-router-dom";

import {Layout} from "../../layout/Layout/Layout";
import Button from "../../UI/Button/Button";
import {Input} from "../../UI/Input/Input";

import styles from "./styles.module.scss"

export const Authorization = () => {
    return (
		<Layout>
			<div className={styles.auth}>
				<form className={styles.form}>
					<span className={styles.title}>Авторизация</span>
					<Input 
						className={styles.input}
						label={'ФИО'}
						placeholder={'Введите ваше ФИО'}
					/>

					<Input 
						className={styles.input}
						label={'Пароль'}
						type={'password'}
						placeholder={'Введите пароль'}
					/>

					<Button 
						className={styles.submit}
						children={'Войти'}
					/>

				</form>
				<div className={styles.regBox}>
					<span>Еще нет аккаунта? </span>
					<Link to={'/reg'} className={styles.reg}>
						Зарегистрироваться
					</Link>
				</div>
			</div>
		</Layout>
    )
}
