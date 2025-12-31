import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-slate-900 text-white">
      <div className="font-cyber text-4xl font-bold tracking-widest text-cyan-400 uppercase">My JP </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
export default Navbar