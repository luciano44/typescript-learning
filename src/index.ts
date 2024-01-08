import { ZodError, z } from "zod"

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome precisa ter no minimo 3 caracteres" })
    .max(10, { message: "Nome opde ter no maximo 10 caracteres" })
    .transform((name) => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: "Você precisa ser maior de idade." }),
  employed: z.boolean(),
})

type User = z.infer<typeof userSchema>

const user: User = {
  name: "John Doe",
  age: 25,
  employed: false,
}

function saveUserToDB(user: User) {
  // save user to database

  try {
    const userParsed = userSchema.parse(user)
    console.log(userParsed)
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e.issues[0].message)
    }
  }
}

saveUserToDB(user)
