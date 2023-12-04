import { z } from 'zod'

export const ContactSchema = z.object({
    name: z.string().min(1, { message: 'Por favor digite seu nome' }),
    email: z.string().min(1, { message: 'Por favor digite seu email ' }),
    fone: z.string().max(11, { message: 'telefone maior que o esperado' })
})

export type ContactData = z.infer<typeof ContactSchema>