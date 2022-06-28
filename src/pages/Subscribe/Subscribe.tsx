import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "components/Logo";
import { useCreateSubscriberMutation } from "graphql/generated";

export function Subscribe() {
  const navigate = useNavigate()

  const [error, setError] = useState<boolean>(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [ createNewUser, { loading } ] = useCreateSubscriberMutation();

  function handleUserName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleUserEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await createNewUser({
        variables: {
          name,
          email
        }
      })

      navigate('/event')

    }catch(error: any) {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center px-5">
      <div className="w-full max-w-[1100px] flex lg:flex-row flex-col items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <b className="text-blue-500">aplicação completa</b>, do zero, com <b className="text-blue-500">React</b>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gary-700 border border-gray-500 bg-gray-700 rounded lg:my-auto my-5">
          <b className="text-2xl mb-6 block">Inscreva-se gratuitamente</b>
          {
            error && 
            <p className="text-red-400 text-sm my-2 block">
              Usuário já cadastrado, utilize um email diferente
            </p>
          }
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo"
              onChange={handleUserName}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email" 
              placeholder="Digite seu email" 
              onChange={handleUserEmail}
            />

            <button 
              type="submit"
              disabled={loading}
              className="
              mt-4 
              bg-green-500 
              uppercase 
              py-4 
              rounded 
              font-bold 
              text-sm 
              hover:bg-green-700 
              transition-colors
              disabled:opacity-50
            ">
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img 
        className="mt-10"
        src="/src/assets/code-mockup.png" 
        alt="Imagem mostrando códigos em React" 
      />
    </div>
  );
}