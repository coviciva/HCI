import React from "react"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import Footer2 from "../components/footer2"

const RezultatiPage = () => (
  <div className="rezultatibody">
    <Header1>
      <SEO title="Rezultati" />
    </Header1>

    <div id="container">
      <div className="rezultati">
        <div className="cont">
          <h4>PUB QUIZ: DOMAĆIN </h4>
          <div className="vrijeme">
            <h4>10/10/2019</h4>
          </div>
        </div>
        <p>1. MJESTO: TEAM A</p>
        <p>2. MJESTO: TEAM B</p>
        <p>3. MJESTO: TEAM C</p>
      </div>

      <div className="rezultati">
        <div className="cont">
          <h4>PUB QUIZ: RETRO </h4>
          <div className="vrijeme">
            <h4>12/9/2019</h4>
          </div>
        </div>
        <p>1. MJESTO: TEAM A</p>
        <p>2. MJESTO: TEAM B</p>
        <p>3. MJESTO: TEAM C</p>
      </div>

      <div className="rezultati">
        <div className="cont">
          <h4>PUB QUIZ: ACADEMIA </h4>
          <div className="vrijeme">
            <h4>10/9/2019</h4>
          </div>
        </div>
        <p>1. MJESTO: TEAM A</p>
        <p>2. MJESTO: TEAM B</p>
        <p>3. MJESTO: TEAM C</p>
      </div>

      <div className="rezultati">
        <div className="cont">
          <h4>PUB QUIZ: DREAMERS </h4>
          <div className="vrijeme">
            <h4>3/9/2019</h4>
          </div>
        </div>
        <p>1. MJESTO: TEAM A</p>
        <p>2. MJESTO: TEAM B</p>
        <p>3. MJESTO: TEAM C</p>
      </div>

      <div className="rezultati">
        <div className="cont">
          <h4>PUB QUIZ: TINEL </h4>
          <div className="vrijeme">
            <h4>25/8/2019</h4>
          </div>
        </div>
        <p>1. MJESTO: TEAM A</p>
        <p>2. MJESTO: TEAM B</p>
        <p>3. MJESTO: TEAM C</p>
      </div>
    </div>
    <Footer2></Footer2>
  </div>
)

export default RezultatiPage
