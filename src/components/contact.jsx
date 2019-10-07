import React from 'react';

import PreOperations from "../contact/preOperations.jsx";

import "../css/contact/main.css";

export default class Contact extends React.Component{
    render(){
        let controlPanel = new PreOperations();
        controlPanel.check();
        let data = controlPanel.giveData();
        return(<div className = "contact">
            <div className = "contactWay phone">{data[0]}</div>
            <div className = "contactWay email">{data[1]}</div>
        </div>);
    }
}