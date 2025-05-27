import Link from "next/link";

export default function Header() {
  return (
    <header className="flex bg-primary-950 min-w-[375px] text-2xl items-center justify-center sm:text-4xl">
      <div className="flex flex-col sm:flex-row items-center justify-center p-10 gap-8 sm:justify-between sm:w-full sm:px-12 sm:py-10">
        <Link href="/" className="flex text-secondary-300">
          <div>MÉTODO</div>
          <div className="font-extralight">|</div>
          <div className="font-bold">FONTOURA</div>
        </Link>
        <div className="flex flex-col justify-center items-center gap-2 font-bold text-xl sm:flex-row sm:gap-6">
          <Link className="text-white bg-secondary-700 p-3 rounded-md" href="/quemSouEu">QUEM SOU EU</Link>
          <Link className="text-primary-950 bg-primary-400 p-3 rounded-md" href="/subscribe">SUBSCRIBE</Link>
        </div>
      </div>
    </header>
  )
}
