import Link from "next/link"

export default function Menu() {
  return (
    <div className="flex flex-row gap-4 text-white p-2">
      <Link href="/">Home</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/sobre">Sobre</Link>
    </div>
  )
}
