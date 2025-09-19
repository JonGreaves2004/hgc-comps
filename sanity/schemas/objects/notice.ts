import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'published_at', type: 'datetime' }),
    defineField({ name: 'body', type: 'array', of: [{type:'block'}] })
  ]
})
