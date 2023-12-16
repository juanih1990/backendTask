import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'username es requerido'
    }),
    email: z.string({
        required_error: 'el email es requerido'
    }).email({
        message: 'email invalido'
    }),
    password: z.string({
        required_error: 'El password es requerido'
    }).min(6, {
        message: 'El password debe tener al menos 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'el email es requerido'
    }).email({
        message: 'email invalido'
    }),
    password: z.string({
        required_error: 'El password es requerido'
    }).min(6, {
        message: 'El password debe tener al menos 6 caracteres'
    })
})