
import { Context } from './Context'


class CoffeeError extends Error {

  isCoffeeError = true

  sdk = 'Coffee'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CoffeeError
}

