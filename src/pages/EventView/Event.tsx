import { LessonContent } from './components/LessonContent/LessonContent';
import { Header } from './components/Header';
import { useParams } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { EmptyState } from './components/EmptyState';

type Params = {
  slug: string;
}

export function Event() {
  const { slug } = useParams<Params>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
            ? <LessonContent lessonSlug={slug} /> 
            : <EmptyState /> 
        }
        <Sidebar />
      </main>
   </div>
  )
}