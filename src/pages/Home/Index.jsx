import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

export function Home() {
  const [auth] = useLocalStorage('auth', {})

  if(auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="h-screen bg-red-700 p-6 text-white flex flex-col items-center space-y-6">
      <header className="container flex justify-center max-w-5xl p-4">
        <img src="./images/logo/logo-fundo-vinho.svg" alt="" srcset="" className="w-40"/>
      </header>
      <div className="container max-w-5xl p-4 px-10 flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:flex-1 flex justify-center w-4/5">
          <img src="./images/imagem/img.png" alt="" srcset="" className="w-full max-w-xs md:max-w-sm"/>
        </div>
        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-2xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>

          <a href="./signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </a>
          <a href="./login" className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
