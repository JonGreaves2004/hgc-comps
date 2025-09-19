import { sanityClient } from '@/lib/sanity.client'
import { rulesTopicsQuery } from '@/lib/queries'
import Link from 'next/link'

type Rule = { _id:string; title:string; slug:{current:string}; summary?:string }

export default async function RulesPage() {
  const topics: Rule[] = await sanityClient.fetch(rulesTopicsQuery)
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Rules & Procedures</h1>
      <ul className="space-y-3">
        {topics?.map(t => (
          <li key={t._id} className="border rounded-2xl p-4">
            <h3 className="font-semibold"><Link href={`/rules/${t.slug.current}`} className="underline">{t.title}</Link></h3>
            {t.summary && <p className="text-sm text-slate-600">{t.summary}</p>}
          </li>
        )) || <p>No rule topics yet.</p>}
      </ul>
    </section>
  )
}
