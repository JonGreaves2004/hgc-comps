import Link from 'next/link'

export default async function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Competition Rules & Procedures</h1>
      <p>Single source of truth for HGC competitions: entries, withdrawals, divisions, tees, prizes, trophies, and knockouts.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Card title="Competitions" href="/competitions" desc="Monthly Medal, Mid‑Week, Trophies, Knockouts" />
        <Card title="Rules" href="/rules" desc="Entry & Booking, Handicaps & Divisions, Prizes & Sweeps" />
      </div>
    </section>
  )
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block rounded-2xl border p-5 hover:shadow-sm transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </Link>
  )
}
