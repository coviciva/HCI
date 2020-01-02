import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header1 from "../components/header1"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
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
          <p>PUB QUIZ: TINEL </p>
          <p>28/12/2019 </p>
          <div className="buttonsonphoto">
            <Link to="/prijave-za-pub-quiz-tinel">
              <button className="buttonmore">SAZNAJ VIŠE</button>
            </Link>
            <button className="buttonprijavise"> PRIJAVI SE</button>
          </div>
        </div>
      </div>
      <Footer />
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
