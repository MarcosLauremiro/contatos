import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().min(1, { message: "Por favor digite o email de contato" }),
  fone: z.string().max(11),
});

export type ContactData = z.infer<typeof ContactSchema>;
