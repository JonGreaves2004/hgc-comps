import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'question' }, validation: r => r.required() }),
    defineField({ name: 'answer', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'tags', type: 'array', of: [{ type:'string' }] })
  ]
})
