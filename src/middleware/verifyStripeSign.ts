import { Context, Next } from 'koa'

const sampleMiddleware = (ctx: Context, next: Next) => {
  next()
}

export default sampleMiddleware
