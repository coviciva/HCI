import React from "react"
import SEO from "../components/SEO"
import Header1 from "../components/header1"

const RasporedPage = () => (
  <div>
    <Header1>
      <SEO title="Raspored" />
    </Header1>

    <div className="maindiv">
      <div className="div2">
        <div className="raspored">
          <h4>TINEL</h4>
          <div className="vrijeme">
            <h4>28/10/2019</h4>
            <h4>21:00</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="maindiv">
      <div className="div2">
        <div className="raspored">
          <h4>DOMAĆIN</h4>
          <div className="vrijeme">
            <h4>03/11/2019</h4>
            <h4>20:30</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="maindiv">
      <div className="div2">
        <div className="raspored">
          <h4>ACADEMIA</h4>
          <div className="vrijeme">
            <h4>11/11/2019</h4>
            <h4>20:00</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="maindiv">
      <div className="div2">
        <div className="raspored">
          <h4>RETRO</h4>
          <div className="vrijeme">
            <h4>16/11/2019</h4>
            <h4>20:30</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="maindiv">
      <div className="div2">
        <div className="raspored">
          <h4>DREAMERS</h4>
          <div className="vrijeme">
            <h4>21/11/2019</h4>
            <h4>20:30</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RasporedPage
