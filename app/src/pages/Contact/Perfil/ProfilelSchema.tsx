import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
  email: z.string().min(1, { message: "Por favor digite o email de contato" }),
  fone: z.string().max(11),
});

export type ProfileData = z.infer<typeof ProfileSchema >;
