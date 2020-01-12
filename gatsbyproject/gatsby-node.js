const slugify = function(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}

const combinations = function(array) {
  return new Array(1 << array.length)
    .fill()
    .map((e1, i) => array.filter((e2, j) => i & (1 << j)))
}

const concatarray = function(array) {
  return array.join("+")
}

const path = require(`path`)
const _ = require(`lodash`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugfromtitle = slugify(node.frontmatter.title)

    createNodeField({
      node,
      name: "slug",
      value: slugfromtitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    singlePostTemplate: path.resolve("src/templates/blog-template.js"),
    tagsPageTemplate: path.resolve("src/templates/tags.js"),
    taggedPosts: path.resolve("src/templates/tagged-posts.js"),
    postList: path.resolve("src/templates/pagination.js"),
    filterTemplate: path.resolve("src/templates/filter-template.js"),
  }
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePostTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })
    tags = _.uniq(tags)

    createPage({
      path: "/tags",
      component: templates.tagsPageTemplate,
      context: {
        tags,
        tagPostCounts,
      },
    })

    let tagsLists = combinations(tags).filter(a => a.length >= 2)

    tagsLists.forEach(taglist => {
      createPage({
        path: `/tags/${concatarray(taglist)}`,
        component: templates.filterTemplate,
        context: {
          taglist,
        },
      })
    })

    tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag)}`,
        component: templates.taggedPosts,
        context: {
          tag,
        },
      })
    })
    const postPerPage = 6
    const numberOfPages = Math.ceil(posts.length / postPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return
      createPage({
        path: `blog/pages/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postPerPage,
          skip: index * postPerPage,
          currentPage,
          numberOfPages,
        },
      })
    })
  })
}
