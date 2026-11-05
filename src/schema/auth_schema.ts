import {z} from 'zod';

export const signUpSchema = z.object({
    body: z.object({
        email: z.email({
            message: "Email is required and valid email address"
        }),
        password: z
            .string({message: "Password is required."})
            .min(8,"Password must be at least 8 characters")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            )
    })
})

export const signInSchema = z.object({
    body: z.object({
        email: z.email("Email is require"),
        password: z.string().min(1,"Password is require")
    })
})

export const refreshTokenSchema = z.object({
    body: z.object({
        refreshToken: z.string().optional()
    })
})

export type signUp = z.infer<typeof signUpSchema>["body"];
export type signIn = z.infer<typeof signInSchema>["body"];
export type refreshToken = z.infer<typeof refreshTokenSchema>["body"]