import { useRef, useState } from "react";

import Input from "../../../shared/Input/Input";
import Select from "../../../shared/Select/Select";
import yes from "../../../../assets/imgs/applications/yesIcon.png";
import no from "../../../../assets/imgs/applications/noIcon.png";
import style from "./style.module.scss"

const Application = ({ data, deleteFunction, editApplication }) => {
    const { id, name, nameBoss, subdivision, jobTitle, experience, status } = data

    const statusApplication = [
        { label: 'новая', value: 'новая' },
        { label: 'в работе', value: 'в работе' },
        { label: 'завершенная', value: 'завершенная' },
    ]
    const [selectedStatus, setSelectedStatus] = useState(status)

    const formRef = useRef();


    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value)
        editApplication(id, event.target.value, data);
    }

    function saveFunction() {
        const data_to_send = {
            name: formRef.current[1].value,
            nameBoss: formRef.current[2].value,
            subdivision: formRef.current[3].value,
            jobTitle: formRef.current[4].value,
            experience: formRef.current[5].value,
            status: formRef.current[6].value,
            benefits: data.benefits,
            message: data.message,
        };
        editApplication(id, data_to_send);
    }

    return (
        <form ref={formRef} onSubmit={() => { }}>
            <div className={style.application}>
                <Input defaultValue={id} className={style.id} id={"id"} disabled />
                <Input defaultValue={name} className={style.name} id={"name"} />
                <Input defaultValue={nameBoss} className={style.nameBoss} id={"nameBoss"} />
                <Input defaultValue={subdivision} className={style.subdivision} id={"subdivision"} />
                <Input defaultValue={jobTitle} className={style.job} id={"jobTitle"} />
                <Input defaultValue={experience} className={style.experience} id={"experience"} />
                <Select className={style.status} options={statusApplication} value={selectedStatus} onChange={handleStatusChange} />
                <img src={yes} onClick={() => saveFunction()} className={style.save_button} />
                <img src={no} onClick={() => deleteFunction(id)} className={style.delete_button} />
            </div>
        </form>
    );
}

export default Application;

