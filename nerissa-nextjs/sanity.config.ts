import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'



export default defineConfig({
  name: 'default',
  title: 'Nerissa-Nextjs',

  projectId: '9levuvmz',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),muxInput()],

  schema: {
    types: schemaTypes,
  },
})
