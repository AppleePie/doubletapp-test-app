import React from 'react';
import NewStudentButton from './NewStudentButton';
import './index.css';


export default function UnderHeaderContainer(props) {
    return (
        props.isDefaultScreen 
            ? 
                <div className="container">
                    <label className="text-students-body">Студенты</label>
                    <NewStudentButton handleClick={props.handleClick}/>
                </div>
            :
                <div className="container">
                    <label className="text-students-body">Новый студент</label>
                </div>
    );
}