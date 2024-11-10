"use server";

import { z } from "zod";

import { LoginSchema } from "@/schemas";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields) return { error: "Invalid fields!" };

  return { success: "Email sent!" };
}
