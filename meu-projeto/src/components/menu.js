import Link from "next/link"

export default function Menu() {
  return (
    <div className="card4 flex flex-row m-auto w-80 bg-transparent gap-4 text-white p-2">
      <Link href="/" className="hover:bg-amber-500">Home</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/sobre">Sobre</Link>
    </div>
  )
}
