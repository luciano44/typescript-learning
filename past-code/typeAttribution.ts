type DbConfig = {
  db?: string
  url: string
}

// Force a type (assure the type will be as set, no check needed)
const conn1 = { db: "postgres", url: "postgres://user:pwd" } as DbConfig

// use DbConfig as reference (no inference)
const conn2: DbConfig = { db: "mongo", url: "mongo://user:pwd" }

// use DbConfig as reference and infers type
const conn3 = { db: "mysql", url: "mysql://user:pwd" } satisfies DbConfig
