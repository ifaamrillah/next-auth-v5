"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { name, email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser) return { error: "Email already user!" };

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification token email

  return { success: "User created!" };
}
