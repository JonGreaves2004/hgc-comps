import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import schemas from './schemas'

const projectId = process.env.SANITY_PROJECT_ID!
const dataset = process.env.SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'HGC Competitions',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas }
})
