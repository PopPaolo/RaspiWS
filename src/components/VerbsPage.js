import React from "react";
import Card from './Card.js';
import Conjugator from './Conjugator/Conjugator.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function VerbsPage (){
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Card element={<Conjugator/>} cardTitle={"Coniuga Verbi:"}></Card>
                </div>
                <div className="col-sm">
                    <Card element={<Conjugator/>} cardTitle={"Test Card 2"}></Card>
                </div>
                <div className="col-sm">
                    <Card element={<Conjugator/>} cardTitle={"Test Card 3"}></Card>
                </div>
            </div>
        </div>
    )
};

export default VerbsPage;
