import { sanityClient } from '@/lib/sanity.client'
import { singleBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'

export default async function CompetitionDetail({ params }: { params: { slug: string }}) {
  const data = await sanityClient.fetch(singleBySlugQuery, { slug: params.slug })
  if (!data) return <p>Not found</p>

  return (
    <article className="prose prose-slate max-w-none">
      <h1>{data.title}</h1>
      <Meta version={data.version} effective={data.effective_date} />
      {data.format && <Section title="Format"><PortableText value={data.format} /></Section>}
      {data.eligibility && <Section title="Eligibility"><PortableText value={data.eligibility} /></Section>}
      {data.schedule && <Section title="Schedule"><PortableText value={data.schedule} /></Section>}
      {data.handicap_rules && <Section title="Handicap Rules"><PortableText value={data.handicap_rules} /></Section>}
      {data.entry_booking && <Section title="Entry & Booking"><PortableText value={data.entry_booking} /></Section>}
      {data.withdrawals_no_shows && <Section title="Withdrawals & No‑Shows"><PortableText value={data.withdrawals_no_shows} /></Section>}
      {data.tees_times && <Section title="Tees & Tee Times"><PortableText value={data.tees_times} /></Section>}
      {data.prizes_sweeps && <Section title="Prizes & Sweeps"><PortableText value={data.prizes_sweeps} /></Section>}
      {data.body && <PortableText value={data.body} />}
    </article>
  )
}

function Section({ title, children }: any) {
  return (
    <section className="my-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="prose"><div>{children}</div></div>
    </section>
  )
}

function Meta({version, effective}:{version?:string; effective?:string}){
  if(!version && !effective) return null
  return <p className="text-sm text-slate-500">Version {version || '1.0'}{effective ? ` • Effective ${effective}`:''}</p>
}
