import React from 'react'
import StatusTag from './statusTag'
import './style.css'
import { filterTypes } from '../../../../actions/actionTypes';

const Filters = () =>{
    return (
        <div style={{marginTop:20,textAlign:'right'}}>
            <StatusTag filter={filterTypes.ALL}>{filterTypes.ALL}</StatusTag>
            <StatusTag filter={filterTypes.COMPLETED}>{filterTypes.COMPLETED}</StatusTag>
            <StatusTag filter={filterTypes.UNCOMPLETED}>{filterTypes.UNCOMPLETED}</StatusTag>
        </div>
    )
}

export default Filters