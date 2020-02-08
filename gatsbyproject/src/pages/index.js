import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header1 from "../components/header1"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useIdentityContext, IdentityContextProvider } from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'

const IndexPage = ({ data }) => {
  const url='https://sharp-shannon-7a933d.netlify.com/'
  

  return (
    <div>
      <IdentityContextProvider url={url}>
      <Header1>
        <SEO title="PubQuiz" />
      </Header1>
      {/*više slika*/}
      <div className="mainphoto-container">
        <Img
          className="homephoto"
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        />
        <div className="textonphoto">
          <p className="nasl">PUB QUIZ: TINEL </p>
          <p className="datumkviza">28/12/2019 </p>
          <div className="buttonsonphoto">
            <Link to="/prijave-za-pub-quiz-tinel">
              <button className="buttonmore">SAZNAJ VIŠE</button>
            </Link>
            <Link to="/prijava-na-kviz">
              <button className="buttonprijavise">PRIJAVI EKIPU</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
      
      </IdentityContextProvider>
    </div>
    
  )
}

export default IndexPage

export const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "//content/images//" } }
      sort: { fields: dir }
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
`
