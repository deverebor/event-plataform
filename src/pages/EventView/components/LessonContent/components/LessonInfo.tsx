
interface LessonInfoProp {
  title: string
  description: string
  teacherAvatarURL: string
  teacherName: string
  teacherBio: string
}

export function LessonInfo(prop: LessonInfoProp) {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">
        {prop.title}
      </h1>
      <p className="mt-4 text-gray-200 leading-relaxed">
        {prop.description}
      </p>

      <div className="flex items-center gap-4 mt-6">
        <img 
          className="h-16 w-16 rounded-full border-2 border-blue-500"
          src={prop.teacherAvatarURL} 
          alt="Foto do professor da aula" 
        />

        <div className="leading-relaxed">
          <strong className="font-bold text-2xl block">
            {prop.teacherName}
          </strong>
          <span className="text-gray-200 text-sm block">
            {prop.teacherBio}
          </span>
        </div>
      </div>
    </div>
  )
}