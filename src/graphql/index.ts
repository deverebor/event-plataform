import { useQuery } from "@apollo/client";
import { IGetLessonBySlugQueryResponse, IGetLessonsQueryResponse } from "./interfaces";
import { GET_LESSON_BY_SLUG_QUERY, GET_LESSONS_QUERY } from "./queries";

export function GetLessonBySlugQuery(lessonSlug: string) {
  const { data } = useQuery<IGetLessonBySlugQueryResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    }
  })

  return data;
}

export function GetLessonsQuery() {
  const { data } = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return data;
}