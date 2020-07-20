import React from 'react';
import InputField from './InputField';
import './index.css';
import SortedSelector from './SelectorField';
import ColorsSelector from './ColorCircles';

export default function Content(props) {
    const specialities = [
        'Прикладная информатика',
        'Прикладная математика',
        'Механика',
        'Математика',
        'Компьютерные науки',
        'Фундаментальная информатика'
    ];
    const groups = ['ПИ-101', 'ПИ-102'];

    return (
        !props.isDefaultScreen
            ?
                <>
                    <div className="content-container">
                        <InputField name="ФИО" placeholder="Полное имя" type="text" changeAvatar={props.changeAvatar}/>
                        <InputField name="Email" placeholder="proverka@example.com" type="email"/>
                        <SortedSelector name="Специальность" items={specialities}/>
                        <SortedSelector name="Группа" items={groups}/>
                        <InputField name="Рейтинг" placeholder="0" type="text" />
                        <SortedSelector name="Пол" items={['Мужской', 'Женский']}/>
                        <ColorsSelector name="Любимый цвет"/>
                    </div>
                    <button className="submit">
                        <div className="submit-background">
                            <label className="submit-text">Создать</label>
                        </div>
                    </button>
                </>
            : null
    );
}