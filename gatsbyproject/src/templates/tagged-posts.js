import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import Footer2 from "../components/footer2"

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `TEMA: ${tag == "izvjestaj" ? "izvještaj" : tag}`

  return (
    <div className="blogbody">
      <Header1>
        <SEO title="Blog" />
      </Header1>
      <div className="naslovteme">{pageHeader}</div>
      <div className="svi-postovi">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            body={node.frontmatter.body}
            tags={node.frontmatter.tags}
            fluid={node.frontmatter.image.childImageSharp.fluid}
          />
        ))}
      </div>
      <Footer2 />
    </div>
  )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM YYYY")
            author
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default tagPosts
