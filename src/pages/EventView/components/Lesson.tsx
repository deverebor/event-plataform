import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface ILessonProps {
  title: string;
  slug: string; 
  availableAt: Date;
  type: 'live' | 'class'
}

export function Lesson(props: ILessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availabeDateFormat = format(
      props.availableAt, 
      "EEEE ' • ' d 'de' MMMM ' • ' k'h'mm",
      { locale: ptBr }
    );

  return(
    <Link className='group' to={`/event/lesson/${props.slug}`}>
      <span className="text-gray-300">
        {availabeDateFormat}
      </span>

      <div className="
        rounded 
        border 
        border-gray-500 
        p-4 
        mt-2 
        group-hover:border-green-500
      ">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="
            flex 
            items-center 
            gap-2 
            text-sm 
            text-blue-500 
            font-medium
            ">
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="
          flex 
          items-center 
          gap-2 
          text-sm 
          text-orange-500 
          font-medium
          ">
            <Lock size={20} />
            Em breve
          </span>
          )}
          <span className="
          text-xs 
          text-white 
          font-bold border 
          border-green-300 
          rounded 
          py-[0.125rem] 
          px-2
          ">
            {props.type === 'live' 
            ? 'AO VIVO' 
            : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </Link>
  )
}