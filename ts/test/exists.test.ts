
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CoffeeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CoffeeSDK.test()
    equal(null !== testsdk, true)
  })

})
