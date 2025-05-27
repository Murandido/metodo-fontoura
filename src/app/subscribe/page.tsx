"use client"

import { useState } from "react"

export default function QuemSouEuPage() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <main className="min-w-[375px] flex flex-col sm:flex-row sm:grow">
        <div className="bg-[url(/compre.png)] h-142 bg-cover bg-center sm:w-[50vw] sm:bg-position-[center_top] sm:h-full"></div>
        <div>
          <div className="bg-secondary-800 text-white flex flex-col gap-10 p-10 sm:h-full sm:w-[50vw] sm:p-24">
            <h1 className="font-bold text-2xl sm:text-4xl">Desbloqueie o Código. Mude de Frequência. Inscreva-se.</h1>
            <div className="sm:text-2xl">
              <p>Você está prestes a acessar um ciclo que poucos têm coragem de iniciar.</p>
              <p>O Método Fontoura™ não é apenas uma estrutura — é uma travessia.</p>
              <p>Preencha os dados abaixo com verdade, intenção e foco.</p>
              <p>Se você sente o chamado, esta é a sua próxima sala.</p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-4">
              <label htmlFor="name">Nome:</label>
              <input className="bg-white text-black p-2 rounded-md" type="text" name="name" id="name" />
              <label htmlFor="email">Email:</label>
              <input className="bg-white text-black p-2 rounded-md" type="email" name="email" id="email" />
              <button onClick={() => setIsActive(!isActive)} className="bg-primary-500 p-3 font-bold text-2xl rounded-sm">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </main>
      <div className={`${!isActive ? "hidden" : "block"} fixed bg-secondary-950 text-white m-5 top-1/2 rounded-md -translate-y-1/2 sm:w-1/2 sm:left-1/2 sm:-translate-x-1/2`}>
        <div className="p-10 flex flex-col gap-8">
          <h1 className="font-bold text-2xl sm:text-4xl">Você deu o passo. Agora o passo te cobra.</h1>
          <div className="sm:text-2xl">
            <p>A inscrição foi registrada com sucesso.</p>
            <br />
            <p>Você acaba de entrar no radar vibracional do Método Fontoura™.</p>
            <br />
            <p>Um e-mail foi enviado para você com os detalhes energéticos e financeiros de cada estrutura do caminho — incluindo os boletos para desbloquear cada etapa.</p>
          </div>
          <div onClick={() => setIsActive(!isActive)} className="absolute right-0 top-0 m-4">
            <svg className="size-8 sm:size-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.7696 1.17157C42.3316 -0.390524 44.8643 -0.390524 46.4264 1.17157C47.9885 2.73367 47.9885 5.26633 46.4264 6.82843L6.82843 46.4264C5.26633 47.9885 2.73367 47.9885 1.17157 46.4264C-0.390524 44.8643 -0.390524 42.3316 1.17157 40.7696L40.7696 1.17157Z" fill="#F7FEEB"/>
              <path d="M1.4264 7.17158C-0.135699 5.60948 -0.135699 3.07682 1.4264 1.51473C2.9885 -0.0473698 5.52116 -0.0473698 7.08325 1.51473L46.6812 41.1127C48.2433 42.6748 48.2433 45.2075 46.6812 46.7696C45.1191 48.3317 42.5865 48.3317 41.0244 46.7696L1.4264 7.17158Z" fill="#F7FEEB"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
