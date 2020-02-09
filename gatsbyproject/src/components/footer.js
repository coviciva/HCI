import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./header1.css"
import Twitter from "../images/twitter.gif"

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "//content/images/sponzori/" } }
        sort: { fields: base }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="sponzori_images">
      <footer>
        <h1 className="sponzori">SPONZORI</h1>
      </footer>
      <div className="slike_sponzora">
        {data.allFile.edges.map(({ node }) => (
          <Img key={node.id} fluid={node.childImageSharp.fluid} />
        ))}
      </div>

      <div className="contact">
        <div className="citat">
          "Pub kviz? To vam je znanje, zabava i - pivo." - Dean Kotiga
        </div>

        <div className="followus">
          <img src={Twitter}></img>
        </div>
        <div className="contactus">
          Kontaktirajte nas na: <br />
          +385 98 765 4321 <br />
          pubquiz@gmail.com
        </div>
      </div>

      <div className="f2">&copy;2019 Pub Quiz</div>
    </div>
  )
}

export default Footer
