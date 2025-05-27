import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center min-w-[375px] items-center bg-primary-950">
      <div className='flex flex-col items-center justify-center p-10 gap-8 sm:flex-row sm:w-full sm:justify-between sm:px-12 sm:py-10'>
        <Link href="/" className="flex text-2xl text-secondary-300 sm:text-4xl">
          <div>MÉTODO</div>
          <div className="font-extralight">|</div>
          <div className="font-bold">FONTOURA</div>
        </Link>
        <div className='flex flex-col text-right text-white'>
          <p>Feito por: Murilo, Pedro Mota, Matheus Teixeira,  Pedro e Gabriel.</p>
          <p>Todo conteúdo é fictício e foi feito para fins educativos e cômicos.</p>
        </div>
      </div>
    </footer>
  )
}
