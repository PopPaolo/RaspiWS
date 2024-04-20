import React from "react";
import Card from "./Card.js";
import Conjugator from "./Conjugator/Conjugator.js";

const cardStyle = {
    width: '350px',
    height: '550px'
};

function VerbsPage() {
    return (
        <div className="container-sm d-flex justify-content-center p-5">
            <div className="row justify-content-center gap-5">
                <div className="col-12 col-sm-6 col-md-4 mb-4" style={cardStyle}>
                    <Card element={<Conjugator/>} cardTitle={"Coniuga Verbi:"}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-4" style={cardStyle}>
                    <Card element={<Conjugator/>} cardTitle={"Test Card 2"}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-4" style={cardStyle}>
                    <Card element={<Conjugator/>} cardTitle={"Test Card 3"}/>
                </div>
            </div>
        </div>
    );
}


export default VerbsPage;
