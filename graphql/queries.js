import gql from 'graphql-tag'

// ─── Home / Landing Page ──────────────────────────────────────────────────────

export const SITE_DATA_QUERY = gql`
  query SiteData {
    siteData(where: { siteDataSlug: "sitedata" }) {
      aboutMe
      profileImage {
        url
      }
      resumeLink {
        url
      }
      developmentMode
      text1
      text2
      text3
      text4
    }
  }
`

export const ALL_TOOLS_QUERY = gql`
  query AllTools {
    tools {
      id
      name
      image {
        url
      }
    }
  }
`

// ─── Blog ─────────────────────────────────────────────────────────────────────

export const ALL_POSTS_QUERY = gql`
  query AllPosts {
    posts(orderBy: id_DESC) {
      id
      slug
      coverImage {
        url
      }
      title
      excerpt
      publishedAt
      author {
        name
      }
      category {
        name
      }
    }
  }
`

export const POST_QUERY = gql`
  query Post($slug: String) {
    post(where: { slug: $slug }) {
      coverImage {
        url
      }
      title
      publishedAt
      excerpt
      category {
        name
      }
      date
      author {
        name
      }
      content {
        markdown
      }
    }
  }
`

export const ALL_CATEGORIES_QUERY = gql`
  query AllCategories {
    categories {
      id
      name
    }
  }
`

// ─── Projects ─────────────────────────────────────────────────────────────────

export const ALL_PROJECTS_QUERY = gql`
  query AllProjects {
    projects {
      id
      name
      image {
        url
      }
      subtitle
      slug
      tools {
        id
        name
        image {
          url
        }
      }
    }
  }
`

export const PROJECT_QUERY = gql`
  query Project($slug: String = "") {
    project(where: { slug: $slug }) {
      name
      description
      slug
      url
      image {
        id
        url
      }
      tools {
        name
        image {
          url
        }
      }
      project_image {
        url
      }
      project_videos
    }
  }
`

// ─── Certificates ─────────────────────────────────────────────────────────────

export const ALL_CERTIFICATES_QUERY = gql`
  query AllCertificates {
    certificates {
      id
      title
      image {
        url
      }
      certUrl
    }
  }
`

// ─── Contact (kept for future implementation) ─────────────────────────────────

export const SEND_MESSAGE = gql`
  mutation SendMessage(
    $email: String!
    $fullName: String!
    $message: String!
    $mobile: String!
    $subject: String!
  ) {
    createMessage(
      data: {
        email: $email
        fullName: $fullName
        message: $message
        mobile: $mobile
        subject: $subject
      }
    ) {
      id
    }
  }
`
