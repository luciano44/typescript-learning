/////////////////////////- Utility Types

// type Address = {
//   street: string
//   number: number
// }

// type User = {
//   name?: string
//   age: number
//   address: Address
// }

// const user: User = {
//   name: "john doe",
//   age: 52,
//   address: {
//     street: "St. whatever",
//     number: 523,
//   },
// }

// type UserProperties = keyof User

// function pickUserProperty(user: User, userProperty: UserProperties) {
//   return user[userProperty]
// }

// type ReturnTypeUserProperty = ReturnType<typeof pickUserProperty>

// type UserWithoutAddress = Omit<User, "address" | "name">

// type UserNameAndAge = Pick<User, "name" | "age">

// type UserPartial = Partial<User>
