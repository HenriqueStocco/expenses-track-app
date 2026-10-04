import { z } from 'zod/v4-mini'

const usernameSchema = z.string()

type Username = z.infer<typeof usernameSchema>

export { usernameSchema, type Username }
