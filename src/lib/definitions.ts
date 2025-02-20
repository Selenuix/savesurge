import {z} from 'zod'

export const signupFormSchema = z.object({
  firstname: z
    .string()
    .trim(),
  lastname: z
    .string()
    .trim(),
  username: z
    .string()
    .min(3, {message: 'Username must be at least 3 characters long.'})
    .regex(/[A-Za-z0-9]/, {message: "Username must only contain letters and numbers. No special character is allowed."})
    .trim(),
  email: z.string().email({message: 'Please enter a valid email.'}).trim(),
  password: z
    .string()
    .min(8, {message: 'Be at least 8 characters long'})
    .regex(/[a-zA-Z]/, {message: 'Contain at least one letter.'})
    .regex(/[0-9]/, {message: 'Contain at least one number.'})
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})

export const signinFormSchema = z.object({
  email: z.string().email({message: 'Please enter a valid email.'}).trim(),
  password: z
    .string()
    .trim(),
})

export type FormState =
  | {
  errors?: {
    name?: string[]
    username?: string[]
    email?: string[]
    password?: string[]
  }
  message?: string
}
  | undefined
