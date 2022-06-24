import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface ILessonProps {
  title: string;
  slug: string; 
  availableAt: Date;
  type: 'live' | 'class'
}

type LessonSlug = {
  slug: string;
}

export function Lesson(props: ILessonProps) {
  const { slug } = useParams<LessonSlug>()

  const isLessonAvailable = isPast(props.availableAt);
  const availabeDateFormat = format(
      props.availableAt, 
      "EEEE ' • ' d 'de' MMMM ' • ' k'h'mm",
      { locale: ptBr }
    );

  const isActiveLesson = slug === props.slug

  return(
    <Link className='group' to={`/event/lesson/${props.slug}`}>
      <span className="text-gray-300">
        {availabeDateFormat}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500' ,{
        'bg-green-500': isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('flex items-center gap-2 text-sm font-medium', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
            <Lock size={20} />
            Em breve
          </span>
          )}
          <span 
          className={
              classNames('text-xs text-white font-bold border rounded py-[0.125rem] px-2', {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
              })
            }>
            {props.type === 'live' 
            ? 'AO VIVO' 
            : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}