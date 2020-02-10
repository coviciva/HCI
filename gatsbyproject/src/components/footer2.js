import React from "react"
import { Link } from "gatsby"
import Twitter from "../images/twitter.gif"

const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="contact">
        <div className="citat">
          "Pub kviz? To vam je znanje, zabava i - pivo." - Dean Kotiga
        </div>
        <div className="followus">
          <Link to="/">
            <img src={Twitter}></img>
          </Link>
        </div>
        <div className="contactus">
          <div style={{ color: "#b3e3f5" }}>KONTAKTIRAJTE NAS:</div>
          <div>
            +385 98 765 4321 <br />
            pubquiz@gmail.com
          </div>
        </div>
      </div>
      <div className="f2">&copy;2019 Pub Quiz</div>
    </div>
  )
}

export default Footer2

/**
 
<div className="contact">
        <div className="citat">
          "Pub kviz? To vam je znanje, zabava i - pivo." - Dean Kotiga
        </div>

        <div className="followus">
          <Link to="/">
            <img src={Twitter}></img>
          </Link>
        </div>
        <div className="contactus">
          Kontaktirajte nas: <br />
          +385 98 765 4321 <br />
          pubquiz@gmail.com
        </div>

*/
