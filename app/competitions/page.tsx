import { sanityClient } from '@/lib/sanity.client'
import { allCompetitionsQuery } from '@/lib/queries'
import Link from 'next/link'

type Comp = { _id: string; title: string; slug: {current:string}; type: string }

export default async function CompetitionsPage() {
  const comps: Comp[] = await sanityClient.fetch(allCompetitionsQuery)
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Competitions</h1>
      <ul className="space-y-2">
        {comps?.map(c => (
          <li key={c._id}>
            <Link href={`/competitions/${c.slug.current}`} className="underline">{c.title}</Link>
            <span className="ml-2 text-xs uppercase text-slate-500">{c.type}</span>
          </li>
        )) || <p>No competitions yet.</p>}
      </ul>
    </section>
  )
}
