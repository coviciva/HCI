import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./header1.css"

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "//content/images/odbor/" } }
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
    </div>
  )
}

export default Footer
