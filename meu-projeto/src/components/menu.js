import Link from "next/link"

export default function Menu() {
  return (
    <div className="card4 flex hover:bg-emerald-600 flex-row m-auto w-96 bg-transparent gap-4 text-white p-2 border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <Link href="/">Home</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/sobre">Sobre</Link>
    </div>
  )
}
