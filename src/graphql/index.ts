import { useMutation, useQuery } from "@apollo/client";
import { IGetLessonBySlugQueryResponse, IGetLessonsQueryResponse } from "./interfaces";
import { CREATE_SUBSCRIBE_MUTATION } from "./mutations";
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

export function CreateSubscriberMutation(name?: string, email?: string) {
  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION)

  return { createSubscriber, loading }
}