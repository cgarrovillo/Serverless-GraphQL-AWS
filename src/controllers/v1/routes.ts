import Router from '@koa/router'

import helloWorld from '../v1/helloWorld'

const router = new Router({
  prefix: '/v1',
})

router.get('/', helloWorld)

export default router
