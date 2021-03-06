import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Header1 from "../components/header1"
import { Link } from "gatsby"
import ArrowLink from "../components/arrow"
import Footer2 from "../components/footer2"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.markdownRemark.frontmatter
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <Header1></Header1>
      <div className="blog-post">
        <h2>{post.title}</h2>
        <div className="datum">
          <span>{post.date}</span>
        </div>
        <Img
          className="slika-u-postu"
          fluid={post.postimage.childImageSharp.fluid}
        />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="autor">
          <span>{post.author}</span>
        </div>
        <div className="arrowdiv">
          <ArrowLink />
        </div>
      </div>
      <Footer2 />
    </div>
  )
}

export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "DD MM YYYY")
        tags
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        postimage {
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
