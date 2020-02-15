import React from "react"
import Header1 from "../components/header1"
import MyForm from "../components/prijavazakviz"
import Footer2 from "../components/footer2"
import pin from "../assets/pin.png"
import clock from "../assets/clock.png"
/*
function obavijest(){
    alert("Prijava je uspješno izvršena!")
} */

const Prijava = () => (
  <div className="prijavabody">
    <Header1></Header1>

    <h2 className="prijava">Prijava na pub kviz Tinel</h2>
    <div className="prijavaTinel">
      <div className="divuprijavi">
        <div className="lokacija2">
          <img src={pin} />
          <span>Cvite Fiskovića 3, Split</span>
        </div>
        <div className="datumkviza22">
          <img src={clock} />
          <span> 28. prosinca, 19:30</span>
        </div>
      </div>
    </div>

    <MyForm />
    <Footer2 />
  </div>
)

export default Prijava
