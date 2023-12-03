import { z } from 'zod'

export const RegisterSchema = z.object({
    name: z.string(),
    email: z.string().min(1, { message: 'Por favor digite seu email de login' }),
    password: z.string().min(1, { message: 'Senha é obrigatorio' }),
    confirmPassword: z.string().min(1, { message: 'A senha deve conter ao menos 8 caracters' }),
    fone: z.string().max(11)
}).partial().refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword']
})

export type RegisterData = z.infer<typeof RegisterSchema>