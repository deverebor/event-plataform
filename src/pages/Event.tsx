import { LessonContent } from '../components/LessonContent/LessonContent';
import { Sidebar } from '../components/Sidebar';
import { Header } from './../components/Header';
import { useParams } from 'react-router-dom';

type Params = {
  slug: string;
}

export function Event() {
  const { slug } = useParams<Params>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/* @todo:make an EmptyState component */}
        { slug 
            ? <LessonContent lessonSlug={slug} /> 
            : <div className='flex-1'></div> 
        }
        <Sidebar />
      </main>
   </div>
  )
}