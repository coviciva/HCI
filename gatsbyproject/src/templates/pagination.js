import React from "react"
import { graphql } from "gatsby"
import Header1 from "../components/header1"
import Post from "../components/Post"
import PaginationLinks from "../components/pagination-links"
import Filter from "../components/blogfilter"
import Footer2 from "../components/footer2"

const Pagination = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = props.pageContext

  return (
    <div className="paginationbody">
      <Header1 />
      <Filter />
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
      <PaginationLinks
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
      <Footer2 />
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
