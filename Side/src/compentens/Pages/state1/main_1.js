import React , { useState,createContext } from 'react';

import'../../../assets/state1/main.css';
import'../../../assets/state1/caender.css';
import Calendar from 'react-calendar';
import Aside from '../fix/aside';
import Header from '../fix/header';
import CalendarS from './Caender';
const Main_1 =() => {
    

 
    return (
        <>
        <Aside/>
        
        <Header/>
       <CalendarS/>
    </>
    )
}

export default Main_1;