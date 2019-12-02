import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header1 from "../components/header1"
import SEO from "../components/SEO"


const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
    <Header1>
    <SEO title="PubQuiz"/>
    
    
    </Header1>
    {/*više slika*/}
    <div className="mainphoto-container">
    {data.allFile.edges.map(({node}) => (
      <Img className="homephoto" key={node.id} fluid={node.childImageSharp.fluid}/>
    ))}
    <div className="textonphoto">
        <h1>PUB QUIZ: TINEL</h1>
        <h2>13/12/2019</h2>
        <div className="buttonsonphoto">
          <button className="buttonmore">SAZNAJ VIŠE</button>
          <button className="buttonprijavise"> PRIJAVI SE</button>
        </div>
      </div>
    </div>
    
    <footer><h1>SPONZORI</h1></footer>
    
    </div>
  
  )
}


export default IndexPage

export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//content/images/"}}) {
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

