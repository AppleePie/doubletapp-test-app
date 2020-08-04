import React from 'react';
import SearchLine from './SearchLine';
import SortSelector from './SortSelector';
import './index.css';


export default function SearchAndSort(props) {
    return (
        props.isDefaultScreen
            ? 
                <div className="search-container">
                    <SearchLine/>
                    <SortSelector/>
                </div>
            : null
    );
}