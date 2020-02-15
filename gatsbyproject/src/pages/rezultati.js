import React from "react"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import Footer2 from "../components/footer2"

const rez = [
  {
    naslov: "PUB QUIZ: DOMAĆIN",
    datum: "10/10/2019",
    prvi: "TEAM A",
    drugi: "JABLANI",
    treci: "VOJKO",
  },
  {
    naslov: "PUB QUIZ: RETRO",
    datum: "1/10/2019",
    prvi: "SELMA",
    drugi: "1997",
    treci: "TORNADO",
  },
  {
    naslov: "PUB QUIZ: DREAMERS",
    datum: "1/9/2019",
    prvi: "TORNADO",
    drugi: "KAKO TO",
    treci: "LET3",
  },
  {
    naslov: "PUB QUIZ: TINEL",
    datum: "11/8/2019",
    prvi: "JOHNNY",
    drugi: "LUCKY LUKE",
    treci: "BUBA",
  },
  {
    naslov: "PUB QUIZ: ACADEMIA",
    datum: "2/7/2019",
    prvi: "100",
    drugi: "TEAM A",
    treci: "LAVOVI",
  },
]

const RezultatiPage = () => (
  <div className="rezultatibody">
    <Header1>
      <SEO title="Rezultati" />
    </Header1>

    <div id="container">
      {rez.map(el => {
        return (
          <div className="rezultati">
            <div className="cont">
              <h4>{el.naslov} </h4>
              <div className="vrijeme">
                <h4>{el.datum}</h4>
              </div>
            </div>
            <p>{`1. MJESTO: ${el.prvi}`}</p>
            <p>{`2. MJESTO: ${el.drugi}`}</p>
            <p>{`3. MJESTO: ${el.treci}`}</p>
          </div>
        )
      })}
    </div>
    <Footer2></Footer2>
  </div>
)

export default RezultatiPage
