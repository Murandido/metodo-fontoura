export default function Home() {
  return (
    <main className="min-w-[375px]">
      {/* hero */}
      <div className="flex bg-position-[10%_top] text-white items-center text-4xl h-[37rem] font-bold bg-cover bg-[url(/elyas_4x3.png)] sm:h-[96rem] sm:text-6xl">
        <div className="ml-20 flex flex-col gap-2">
          <p className="font-extralight opacity-[16%]">FONTOURA</p>
          <p className="font-light opacity-[32%]">FONTOURA</p>
          <p className="font-normal opacity-[48%]">FONTOURA</p>
          <p className="font-medium opacity-[64%]">FONTOURA</p>
          <p className="font-semibold opacity-[80%]">FONTOURA</p>
          <p>FONTOURA</p>
        </div>
      </div>

      <div className="px-12 text-white flex flex-col gap-8 justify-center items-center py-10 bg-secondary-600 sm:text-2xl">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-bold text-3xl sm:text-4xl">O QUE É O MÉTODO FONTOURA?</h1>
          <p>O Método Fontoura™ é mais que um curso.</p>
          <div>
            <p>É um chamado.</p>
            <p>Um código.</p>
            <p>Um despertar financeiro espiritual performático.</p>
          </div>
          <p>Criado por Elyas Fontoura, o mentor mais jovem que revolucionou o que é ser um coach, esse método te entrega o mapa da mina invisível: o caminho do sucesso sem precisar de lógica, currículo ou CLT.</p>
          <p>Cada etapa do método é um curso, cuidadosamente elaborado para desbloquear áreas da sua vida que você nem sabia que estavam bloqueadas — tudo com frases de impacto, terno verde e promessas ousadas.</p>
          <div>
            <p>Se você já tentou trabalhar, estudar ou empreender…</p>
            <p>e ainda assim está duro:</p>
            <p>o problema é você.</p>
            <p>Por ainda não conhecer o Método Fontoura™.</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start gap-8">
          <h1 className="font-bold text-3xl sm:text-4xl">DEPOIMENTOS</h1>
          <a className="flex justify-center w-80 h-[11.25rem] bg-[url(/depoimento.jpg)] bg-cover bg-center items-center sm:w-160 sm:h-90" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <span>
              <svg className="w-8 h-8 sm:h-32 sm:w-32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="128" height="128" rx="64" fill="#FF0000"/>
                <path d="M47.7128 36.2871L95.7128 63.9999L47.7128 91.7127L47.7128 36.2871Z" fill="#D9D9D9"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
        
      <div className="px-12 text-white flex flex-col gap-8 justify-center items-center py-10 bg-secondary-950 sm:text-2xl">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-bold text-3xl sm:text-4xl">COMO FUNCIONA?</h1>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO 1: Destrave Seu Dinheiro Quântico™</h1>
            <p>Aprenda a ignorar a matemática tradicional e manifeste riqueza com afirmações de manhã e juras à meia-noite. Dinheiro não é sobre trabalho, é sobre frequência. Se você sente que merece um iate, você já tem meio casco.</p>
            <p className="text-xs">VALOR: R$ 497,00</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO 2: Mentalidade de Alfa Multinível™</h1>
            <p>Descubra como pensar como um leão em um mundo de ovelhas. Você não precisa de emprego, precisa de um grupo de 7 pessoas pra recrutar mais 7. Fórmula testada em galáxias paralelas.</p>
            <p className="text-xs">VALOR: R$ 697,00</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO 3: Branding Espiritual: Seja Sua Própria Marca™</h1>
            <p>Aqui você aprende a colocar o seu nome em tudo: curso, ebook, copo térmico e até óleo ungido. Sua cara será sua logo e sua promessa será: &quot;Você vai vencer porque eu venci (no Canva).&quot;</p>
            <p className="text-xs">VALOR: R$ 897,00</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO 4: Influência Magnética no Insta™</h1>
            <p>Stories com frases de impacto, reels com música de rap americano e dancinha profética. Gere autoridade sem precisar ter feito nada de relevante na vida, além de postar de terno no deserto.</p>
            <p className="text-xs">VALOR: R$ 997,00</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO 5: Networking com Seres de Luz™</h1>
            <p>Conecte-se com pessoas que parecem ricas e falam em códigos como “gratidão ativa”, “frequência 5D” e “meu mentor disse”. O segredo do sucesso está nos grupos certos (principalmente se forem pagos).</p>
            <p className="text-xs">VALOR: R$ 1.297,00</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO 6: Linguagem do Pix™</h1>
            <p>Aprenda a se comunicar com seu público de maneira tão sedutora que ele vai sentir vontade de te pagar antes mesmo de entender o que você vende. Copywriting quântico com gatilhos de escassez emocional.</p>
            <p className="text-xs">VALOR: R$ 1.597,00</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO 7: Mentor do Nada™</h1>
            <p>A última etapa. Ensine os outros a ensinar o que você não aprendeu. Vire mentor, venda mentoria, forme novos mentores e crie seu império baseado em frases como “quem sabe faz, quem não sabe, ensina”.</p>
            <p className="text-xs">VALOR: R$ 2.497,00</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl sm:text-4xl">PASSO BONUS: Certificado de Autoproclamação™</h1>
            <p>Ao final de todos os módulos, você recebe um PDF com selo dourado escrito &quot;Aprovado por Elyas Fontoura&quot; (validade: em dimensões superiores apenas).</p>
            <p className="text-xs">VALOR SIMBOLICO: R$ 147,00</p>
          </div>
        </div>
      </div>
    </main>
  );
}
