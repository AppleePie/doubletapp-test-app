import React, { useState } from 'react';
import SecondLineContainer from '../SecondLineContainer';
import ThirdLineContainer from '../ThirdLineContainer';
import BackButton from './BackButton';
import Content from '../Content';
import './index.css';

export default function Body() {
    const [isDefaultScreen, setScreen] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState('Имя')
    const [sortOrder, setSortOrder] = useState(true);

    const sortBy = (criterion) => {
        const orderByAscending = (student, nextStudent) => student[criterion] > nextStudent[criterion] ? 1 : -1;
        const orderByDescending = (student, nextStudent) => student[criterion] < nextStudent[criterion] ? 1 : -1;
        return sortOrder ? orderByAscending : orderByDescending;
    };

    const sortTypes = {
        'Имя': sortBy('name'),
        'Специальность': sortBy('speciality'),
        'Группа': sortBy('group'),
        'Возраст': sortBy('age'),
        'Рейтинг': sortBy('rating'),
        'Цвет': sortBy('color'),
    };

    return ( 
        <>
            <BackButton handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
            <div className="body">
                <SecondLineContainer handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
                <ThirdLineContainer
                    isDefaultScreen={isDefaultScreen}
                    setSearchText={setSearchText} 
                    setSortType={setSortType}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
                <Content 
                    isDefaultScreen={isDefaultScreen} 
                    handleClick={setScreen} 
                    searchText={searchText} 
                    sort={sortTypes[sortType]}
                    sortOrder={sortOrder}
                />
            </div>
        </>
    );
}