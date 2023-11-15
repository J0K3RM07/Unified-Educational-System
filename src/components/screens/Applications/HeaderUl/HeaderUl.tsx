import style from "./style.module.scss";

const HeaderUl = () => {
    return (
        <div className={style.header}>
            <p className={style.id}>№ заявки</p>
            <p className={style.name}>ФИО</p>
            <p className={style.nameBoss}>ФИО начальника</p>
            <p className={style.subdivision}>Подразделение</p>
            <p className={style.job} >Должность</p>
            <p className={style.experience}>Стаж</p>
            <p>Статус заявки</p>
        </div>
    );
}

export default HeaderUl;