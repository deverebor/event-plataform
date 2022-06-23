export interface IGetLessonBySlugQueryResponse {
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

export interface IGetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}