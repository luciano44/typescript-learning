import express, { NextFunction, Request, Response } from "express"

const app = express()

app.use(express.json())

declare module "express-serve-static-core" {
  interface Request {
    myProp?: number
  }
}

const midw1 = (req: Request, res: Response, next: NextFunction) => {
  req.myProp = 100
  next()
}

const midw2 = (req: Request, res: Response, next: NextFunction) => {
  console.log("custom prop value is: " + req.myProp)
  req.myProp = 600
  next()
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    res.send({ error: "There was an error please try again later." })
  }
}

app.use(midw1)
app.use(midw2)

const routeCb = (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: `the value is ${req.myProp}` })
}

app.use(errorHandler)

app.get("/", routeCb)

app.listen(3000, () => {
  console.log("App running on PORT 3000 🔥")
})
