import * as z from "zod";

export const signInSchema = z.object({
    // email: z.string().email({
    //   message: "Please enter a valid email address.",
    // }),
    username: z.string(),
    password: z.string(),
  });