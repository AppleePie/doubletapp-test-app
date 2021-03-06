import React, { useState } from 'react';
import InputField from './InputField';
import SelectorField from './SelectorField';
import ColorsSelector from './ColorCircles';
import SpecAndGroup from './SpecAndGroup';
import Avatar from './Avatar';
import './Form.css';

export default function Form(props) {
    const [data, setData] = useState({
        "ФИО": "",
        "Email": "",
        "Специальность": "",
        "Группа": "",
        "Рейтинг": "",
        "Возраст": "",
        "Пол": "",
        "Любимый цвет": "",
        avatar: ''
    });
    const [isValid, setIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (name, value) => {
        const temp = data;
        temp[name] = value;
        setData(temp);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (hasPassedValidation()) {
            const dataForResponse = new FormData();
            for (const field in data) {
                dataForResponse.append(field, data[field]);
            };
            if (!isLoading) {
                setIsLoading(true);
                fetch('/api/post', { 
                    method: 'POST',
                    body: dataForResponse
                })
                    .then(() => {
                        props.handleClick(true);
                        setIsLoading(false);
                    })
                    .catch(err => console.error(err));
            }
        } else {
            setIsValid(false);
        }
    };

    const hasPassedValidation = () => !Object.values(data).includes('');

    return (
        <>
            <Avatar isValid={isValid} setAvatar={handleChange}/>
            <div className="form-container">
                <InputField
                    name="ФИО" 
                    handleChange={handleChange}
                    isValid={isValid} 
                    placeholder="Фамилия Имя Отчество" 
                    type="text"
                />
                <InputField 
                    name="Email" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    placeholder="proverka@example.com" 
                    type="email"
                />
                <SpecAndGroup 
                    handleChange={handleChange}
                    isValid={isValid} 
                    setIsValid={setIsValid}
                />
                <InputField 
                    name="Рейтинг" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    placeholder="0" 
                    type="text" 
                />
                <InputField 
                    name="Возраст" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    placeholder="0" 
                    type="text"
                />
                <SelectorField 
                    name="Пол" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    items={['Мужской', 'Женский']}
                />
                <ColorsSelector
                    name="Любимый цвет" 
                    handleChange={handleChange}
                    isValid={isValid} 
                />
            </div>
            <button  className="submit" type="submit" onClick={handleSubmit}>
                <label className="submit-text">Создать</label>
            </button>
        </>
    );
}