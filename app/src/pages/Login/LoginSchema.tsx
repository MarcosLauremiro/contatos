import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().min(1, { message: 'Por favor digite seu email de login' }),
    password: z.string().min(1, { message: 'Senha é obrigatorio' })
})

export type LoginData = z.infer<typeof loginSchema>