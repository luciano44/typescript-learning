///////////////////////- Utility Types

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

type UserProperties = keyof User

function pickUserProperty(user: User, userProperty: UserProperties) {
  return user[userProperty]
}

type ReturnTypeUserProperty = ReturnType<typeof pickUserProperty>

type UserWithoutAddress = Omit<User, "address" | "name">

type UserNameAndAge = Pick<User, "name" | "age">

type UserPartial = Partial<User>

type UserRequired = Required<User>

type UserReadonly = Readonly<User>

const regularUser: UserReadonly = {
  name: "John Doe",
  age: 24,
  address: {
    street: "St. Anywhere",
    number: 364,
  },
}

// Can't reassign Readonly.
// regularUser.name = 'Another name'

type UserKeys = "name" | "age" | "address"
type UserValues = string | number | object

type UserRecord = Record<UserKeys, UserValues>

type DirectionsTypes = `${"top" | "bottom"}-${"left" | "right"}`

type PersonFruitTypes = `${"🧑" | "👰"}-${"🍎" | "🍍"}`

type LowercaseGreeting = "hello, world"
type Greeting = Capitalize<LowercaseGreeting>
