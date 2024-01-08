type JobType = "Unemployed" | "DBA" | "Programmer"

export type PersonType = {
  name: string
  age: number
  address: {
    street: string
    cep: string
    number: number
  }
  hobbies: string[]
  job: JobType
  [key: string]: any
}

export function sum(a: number, b: number) {
  return a + b
}
