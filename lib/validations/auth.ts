import * as z from "zod";

export const signInSchema = z.object({
  // email: z.string().email({
  //   message: "Please enter a valid email address.",
  // }),
  username: z.string(),
  password: z.string(),
});

export const signUpSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password1: z.string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .max(100)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
         { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' }),
  password2: z.string(),
}).refine((data) => data.password1 === data.password2, {
  message: "Passwords do not match",
  path: ["password2"],
});
