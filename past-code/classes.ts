class Person {
  _name: string
  _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  get name(): string {
    return this._name.toUpperCase()
  }

  set name(newName: string) {
    this._name = newName
  }

  get age(): number {
    return this._age
  }

  set age(newAge: number) {
    this._age = newAge
  }

  greet(): string {
    return `Hello, I am ${this._name} and I'm ${this._age} years old.`
  }
}

class Developer extends Person {
  _language: string

  constructor(name: string, age: number, language: string) {
    super(name, age)
    this._language = language
  }

  get language(): string {
    return this._language.toUpperCase()
  }

  set language(newLang: string) {
    this._language = newLang
  }

  code(): string {
    return `${this._name}, ${this._age} years old, is coding in ${this._language}`
  }
}

const person = new Person("Lulu", 32)
const dev = new Developer("Luciano", 53, "TypeScript")

console.log(dev.language)
console.log(dev.name)
console.log(dev.age)
console.log(dev.code())
console.log(dev.greet())
