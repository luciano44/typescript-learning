// // KeyOf TypeOf

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

// const prop = pickUserProperty(user, "age")

// console.log(prop)

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

// const video = {
//   title: "How to do something",
//   duration: 250,
// }

// type Video = keyof typeof video

// console.log(video)
