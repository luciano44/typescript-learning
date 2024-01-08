type Address = {
  street: string
  number: number
}

type User = {
  name?: string
  age: number
  address: Address
}

const user: User = {
  name: "john doe",
  age: 52,
  address: {
    street: "St. whatever",
    number: 523,
  },
}

function pickUserProperty<T extends Record<string, any>>(
  user: T,
  userProperty: keyof T
) {
  return user[userProperty]
}

console.log(pickUserProperty({ color: "red", size: 14 }, "size"))
