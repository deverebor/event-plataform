import { gql } from "@apollo/client";

export const GET_LESSON_BY_SLUG_QUERY = gql`
  query ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    description
    videoId
    teacher {
      avatarURL
      bio
      name
    }
  }
}
`
export const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    availableAt
    id
    lessonType
    title
    slug
  }
}
` 