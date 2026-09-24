
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CoffeeSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CoffeeSDK.test()
    equal(testsdk instanceof CoffeeSDK, true,
      'CoffeeSDK.test() must return a client synchronously')
  })

})
