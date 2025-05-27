export default function QuemSouEuPage() {
  return (
    <main className="min-w-[375px] flex flex-col sm:flex-row sm:grow">
      <div>
        <div className="bg-secondary-800 text-white flex flex-col gap-10 p-10 sm:h-full sm:w-[50vw]">
          <h1 className="font-bold text-2xl sm:text-4xl">QUEM SOU EU?</h1>
          <div className="sm:text-2xl">
            <p>Elyas Fontoura, 20 anos, conossoir e criador do Método Fontoura™,  uma sequência de ativações que promete transformar qualquer um em alguém — desde que saiba escutar (e pagar).</p>
            <br />
            <p>Ele acredita na estética, na frequência, e no poder da palavra dita com firmeza. Tem como referência o visionário Mablo Parçal, a quem chama de “um verdadeiro ícone da virada de chave.”, sendo um fiel discípulo.</p>
            <br />
            <p>Hoje, Elyas atua como mentor, estrategista de influência e arquiteto de resultados… não necessariamente nessa ordem.</p>
          </div>
        </div>
      </div>
      <div className="bg-[url(/pessoal.png)] h-142 bg-cover bg-center sm:w-[50vw] sm:bg-position-[center_top] sm:h-full"></div>
    </main>
  )
}
