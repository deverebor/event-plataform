import { gql, useQuery } from "@apollo/client";
import { LessonVideo } from "./components/LessonVideo";
import { LessonInfo } from "./components/LessonInfo";
import { Anchors } from "../../../../components/Anchors";
import { Cards } from "../../../../components/Cards";
import { Loading } from "../../../../components/Loading";

// @todo: create responsiviness of the app.
// @todo: clean up app, create an file for the querys; create a file for the interfaces and types

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
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

interface IGetLessonBySlugQueryResponse {
  lesson: {
    title: string
    description: string
    videoId: string
    teacher: {
      avatarURL: string
      bio: string
      name: string
    }
  }
}

interface LessonContent {
  lessonSlug: string;
}

export function LessonContent(prop: LessonContent) {
  const { data } = useQuery<IGetLessonBySlugQueryResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: prop.lessonSlug,
    }
  })

  if (!data){
    return <Loading />
  }
  
  return(
    <div className="flex-1">
      <LessonVideo videoId={data.lesson.videoId}  />

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <LessonInfo 
            title={data.lesson.title}
            description={data.lesson.description}
            teacherAvatarURL={data.lesson.teacher.avatarURL}
            teacherName={data.lesson.teacher.name}
            teacherBio={data.lesson.teacher.bio}
          />

          <div className="flex flex-col gap-4">
            <Anchors primary anchorTitle="Comunidade no Discord" />
            <Anchors secondary anchorTitle="Acesse o desafio" />
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <Cards 
            title="Material complementar" 
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            iconType="file"
          />

          <Cards 
            title="Wallpapers exclusivos" 
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            iconType="image"
          />
        </div>
      </div>
    </div>
  )
}