import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'competition',
  title: 'Competition',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'type', type: 'string', options: { list: ['medal','stableford','trophy','knockout'] }, validation: r => r.required() }),
    defineField({ name: 'effective_date', title: 'Effective Date', type: 'date' }),
    defineField({ name: 'version', type: 'string' }),
    defineField({ name: 'format', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'eligibility', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'schedule', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'handicap_rules', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'entry_booking', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'withdrawals_no_shows', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'tees_times', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'prizes_sweeps', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'body', type: 'array', of: [{type:'block'}] })
  ]
})
