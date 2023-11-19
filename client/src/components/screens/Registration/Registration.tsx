import { Link } from "react-router-dom";

import {Layout} from "../../layout/Layout/Layout";
import Button from "../../UI/Button/Button";
import {Input} from "../../UI/Input/Input";

import styles from "./styles.module.scss";

export const Registration = () => {
    return (
		<Layout>
			<div className={styles.reg}>
				<form className={styles.form}>
					<span className={styles.title}>Регистрация</span>
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

					<Input 
						className={styles.input}
						label={'Подтверждение пароля'}
						type={'password'}
						placeholder={'Подтвердите пароль'}
					/>

					<Button 
						className={styles.submit}
						children={'Войти'}
					
					/>

				</form>
				<div className={styles.authBox}>
					<span>Есть аккаунт? </span>
					<Link to={'/auth'} className={styles.auth}>
						Войти
					</Link>
				</div>
			</div>
		</Layout>
    )
}