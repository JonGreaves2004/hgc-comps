import { sanityClient } from '@/lib/sanity.client'
import { singleBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'

export default async function RuleDetail({ params }: { params: { slug: string }}) {
  const data = await sanityClient.fetch(singleBySlugQuery, { slug: params.slug })
  if (!data) return <p>Not found</p>
  return (
    <article className="prose prose-slate max-w-none">
      <h1>{data.title}</h1>
      <Meta version={data.version} effective={data.effective_date} />
      {data.body ? <PortableText value={data.body} /> : <p>No content yet.</p>}
    </article>
  )
}

function Meta({version, effective}:{version?:string; effective?:string}){
  if(!version && !effective) return null
  return <p className="text-sm text-slate-500">Version {version || '1.0'}{effective ? ` • Effective ${effective}`:''}</p>
}
