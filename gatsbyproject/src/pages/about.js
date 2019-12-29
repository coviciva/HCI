import React from "react"
import SEO from "../components/seo"
import Header1 from "../components/header1"

const AboutPage = () => (
  <div>
    <Header1>
      <SEO title="O nama" />
    </Header1>

    <div className="onama">
      <h1>PUB QUIZ SPLIT</h1>
      <p>
        {" "}
        Pub Quiz Split je krovna organizacija svih kvizaša iz Splitsko -
        dalmatinske županije koju su 2013. godine kao neprofitnu udrugu osnovali
        kviz entuzijasti i dugogodišnji pub kvizaši s ciljem promoviranja
        kulture kvizova i povezivanja hrvatskih kvizaša s međunarodnom scenom.
        PQS redovno organizira: Svjetsko kviz prvenstvo, Ekipno državno
        prvenstvo, Prvenstvo Hrvatske u parovima, Juniorsko svjetsko prvenstvo i
        Specijalizirane tematske kvizove. Uz ove službene, PQS organizira brojne
        humanitarne i pub kvizove, od kojih je poseban onaj u Studentskom centru
        koji služi kao platforma za mlade kvizaše.
      </p>

      <h3 className="naslovciljevi">CILJEVI</h3>
      <div className="ciljevi1">
        <div className="ciljevi">
          <li>
            Promoviranje i poticanje kulture kvizova u svim inačicama
            (televizijski, internet, pub i dr.)
          </li>
          <li>
            Promoviranje i poticanje općenito kulture stjecanja širokih područja
            znanja i opće svakodnevne informiranosti
          </li>
          <li>
            Promoviranje i poticanje kritičkog načina razmišljanja i vrednovanja
            primljenih informacija
          </li>
          <li>
            Promoviranje i poticanje ravnopravnosti spolova u kviz kulturi
          </li>
          <li>
            Promoviranje i poticanje kritičkog načina razmišljanja i vrednovanja
            primljenih informacija
          </li>
          <li>
            Promoviranje i poticanje ravnopravnosti spolova u kviz kulturi
          </li>
          <li>
            Promoviranje i poticanje kulture kvizova u svim inačicama
            (televizijski, internet, pub i dr.)
          </li>
        </div>
      </div>

      <h3>UPRAVNI ODBOR</h3>
      <div className="upravniodbor">
        <div className="osoba">
          <img src="1morana.jpeg" alt="morana"></img>
          <p>Morana Zibar</p>
          <p>morana@gmail.com</p>
        </div>
        <div className="osoba">
          <img src="dean.jpg" alt="dean"></img>
          <p>Dean Kotiga</p>
          <p>kotiga@gmail.com</p>
        </div>
        <div className="osoba">
          <img src="tarik.jpg" alt="tarik"></img>
          <p>Tarik Filipović</p>
          <p>tarik@outlook.com</p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutPage