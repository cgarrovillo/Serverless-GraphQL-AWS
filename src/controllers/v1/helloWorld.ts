import { Context } from 'koa'

const helloWorld = async (ctx: Context) => {
  ctx.response.body = 'Hello!'
  return (ctx.response.status = 200)
}

export default helloWorld
