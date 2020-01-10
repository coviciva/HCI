import React from "react";
import Header1 from "../components/header1";

function obavijest(){
    alert("Prijava je uspješno izvršena!")
}

const Prijava = () => (
    <div>
        <Header1></Header1>

        <h2 className="prijava">Prijava na pub kviz Tinel</h2>
        <div className="prijava">
            <input type="text" placeholder="Naziv tima" className="box"></input>
            <input type="text" placeholder="Broj članova tima" className="box"></input>
            <input type="text" placeholder="Broj mobitela" className="box"></input>
            <input type="email" placeholder="Email" className="box"></input>
            <button className="butt" onClick={() => {obavijest()}}>Prijavi se</button>
            
        </div>
    </div>
)

export default Prijava