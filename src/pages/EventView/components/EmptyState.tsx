import { AirplaneTakeoff } from "phosphor-react";

export function EmptyState() {
  return (
    <div className="flex-1">
      <div 
      className="
        p-8 
        flex 
        h-screen 
        justify-center 
        items-center
          ">
          <div className="flex gap-16">
            <div className="flex-1">
              <h1 className="text-3xl font-bold">
                Você não selecionou nenhum aula do evento.
              </h1>
              <p className="text-lg">
                Selecione no menu de aulas ao lado.
              </p>
              <AirplaneTakeoff size={150} />
            </div>
          </div>
      </div>
    </div>
  )
}