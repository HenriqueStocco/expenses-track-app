import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  driver: 'expo',
  schema: 'src/db/schemas',
  out: 'src/db/migrations',
  verbose: true,
  breakpoints: true,
  introspect: { casing: 'camel' },
})
