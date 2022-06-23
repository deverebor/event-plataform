import { CaretRight,  FileArrowDown, Image } from "phosphor-react";

interface CardsProps {
  title: string;
  description?: string;
  iconType: 'file' | 'image';
}

export function Cards(props: CardsProps) {
  return (
    <>
      <a 
        className="
        bg-gray-700 
        rounded 
        overflow-hidden 
        flex 
        items-stretch 
        gap-6 
        hover:bg-gray-600 
        transition-colors" 
        href="#"
      >
        <div className="bg-green-700 h-full p-6 flex items-center">
          {
            props.iconType === 'file' 
              ? <FileArrowDown size={40}/> 
              : <Image size={40}/>
          }
        </div>
        <div className="py-6 leading-relaxed">
          <strong className="text-2xl">{props.title}</strong>
          <p className="text-sm text-gray-200 mt-2">
            {props.description}          
          </p>
        </div>
        <div className="h-full p-6 flex items-center">
          <CaretRight size={24} />
        </div>
      </a>
    </>
  )
}