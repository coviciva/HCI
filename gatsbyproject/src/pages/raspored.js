import React from "react"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import Footer2 from "../components/footer2"
import pin from "../assets/pin.png"
import clock from "../assets/clock.png"

const raspored = [
  {
    naslov: "PUB QUIZ: TINEL",
    lokacija: "Cvite Fiskovića 3, Split",
    datum: "20. veljače, 19:30",
  },
  {
    naslov: "PUB QUIZ: RETRO",
    lokacija: "Ruđera Boškovića 23, Split",
    datum: "22. veljače, 19:30",
  },
  {
    naslov: "PUB QUIZ: DOMAĆIN",
    lokacija: "Cvite Fiskovića 3, Split",
    datum: "26. veljače, 19:30",
  },
  {
    naslov: "PUB QUIZ: MALA KAVANA",
    lokacija: "Ruđera Boškovića 13, Split",
    datum: "27. veljače, 20:00",
  },
  {
    naslov: "PUB QUIZ: DREAMERS",
    lokacija: "Prima 3, Split",
    datum: "1. ožujka, 19:30",
  },
]

const RasporedPage = () => (
  <div className="rasporedbody">
    <Header1>
      <SEO title="Raspored" />
    </Header1>

    {raspored.map(item => {
      return (
        <div className="maindiv">
          <div className="raspored2">
            <div className="naslovkviza">{item.naslov}</div>
            <div className="vrijemekviza">
              <div>
                <div className="lokacija">
                  <img src={pin} />
                  <span>{item.lokacija}</span>
                </div>
                <div className="datumkviza2">
                  <img src={clock} />
                  <span> {item.datum}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })}

    <Footer2></Footer2>
  </div>
)

export default RasporedPage
