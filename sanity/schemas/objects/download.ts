import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'download',
  title: 'Download',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'file', type: 'file', options: { storeOriginalFilename: true } }),
    defineField({ name: 'description', type: 'text' })
  ]
})
