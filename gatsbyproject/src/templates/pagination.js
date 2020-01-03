import React from "react"
import { graphql } from "gatsby"
import Header1 from "../components/header1"
import Post from "../components/Post"
import { Link } from "gatsby"

const Pagination = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage } = props.pageContext

  return (
    <div>
      <Header1>{`Page: ${currentPage}`}</Header1>

      <div className="svi-postovi">
        {posts.map(({ node }) => (
          <Post
            key={node.id}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            body={node.frontmatter.body}
            fluid={node.frontmatter.image.childImageSharp.fluid}
            postfluid={node.frontmatter.postimage.childImageSharp.fluid}
            tags={node.frontmatter.tags}
          />
        ))}
      </div>
      <div className="ostale-stranice">
        <Link to="/blog">1</Link>
        <Link to="/blog/pages/2">2</Link>
        <Link to="/blog/pages/3">3</Link>
      </div>
    </div>
  )
}

export const postListQuery = graphql`
  query postListQuerry($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM DD YYYY")
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

export default Pagination
