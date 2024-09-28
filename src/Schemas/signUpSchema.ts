import {z} from "zod";

export const usernameValidation = z
    .string()
    .min(6, "Username must be at least 6 characters long")
    .max(8, "Username must be at most 8 characters long")
    .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers");
    

    export const signUpSchema = z.object({
        username: usernameValidation,
        email:z.string().email({message: "Invalid email address"}),
        password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
    })