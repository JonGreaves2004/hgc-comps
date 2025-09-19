import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ruleTopic',
  title: 'Rule Topic',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'effective_date', title: 'Effective Date', type: 'date' }),
    defineField({ name: 'version', type: 'string' }),
    defineField({ name: 'summary', type: 'text' }),
    defineField({ name: 'body', type: 'array', of: [{type:'block'}] })
  ]
})
