import Link from "next/link"

export default function Menu() {
  return (
    <div className="card4 flex hover:bg-emerald-600 flex-row m-auto w-96 bg-transparent gap-4 text-white p-2">
      <Link href="/">Home</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/sobre">Sobre</Link>
    </div>
  )
}
