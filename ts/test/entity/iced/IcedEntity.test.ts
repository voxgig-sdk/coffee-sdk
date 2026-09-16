

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CoffeeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('IcedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COFFEE_TEST_LIVE=TRUE.
  afterEach(liveDelay('COFFEE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CoffeeSDK.test()
    const ent = testsdk.Iced()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COFFEE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iced.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Description of the coffee drink","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique identifier for the coffee drink","type":"`$INTEGER`","index$":1},{"active":true,"name":"image","req":false,"short":"URL to an image of the coffee drink","type":"`$STRING`","index$":2},{"active":true,"name":"ingredients","req":false,"short":"List of ingredients used in the coffee drink","type":"`$ARRAY`","index$":3},{"active":true,"name":"title","req":false,"short":"Name of the coffee drink","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"iced","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /coffee/iced","json":"{\"operationId\":\"getIcedCoffee\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the coffee drink\",\"example\":\"A strong, concentrated coffee brewed by forcing hot water through finely-ground coffee beans\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the coffee drink\",\"example\":1,\"type\":\"integer\"},\"image\":{\"description\":\"URL to an image of the coffee drink\",\"example\":\"https://example.com/espresso.jpg\",\"type\":\"string\"},\"ingredients\":{\"description\":\"List of ingredients used in the coffee drink\",\"example\":[\"Coffee beans\",\"Water\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Name of the coffee drink\",\"example\":\"Espresso\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/coffee/iced","segments":[{"lit":"coffee"},{"lit":"iced"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"iced","name__orig":"iced","Name":"Iced","name_":"iced","name-":"iced","NAME":"ICED","index$":1}, {"active":true,"entity":"iced","key$":"BasicIcedFlow","kind":"basic","name":"BasicIcedFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"iced_ref01"}}],"index$":0}]}, 'Iced')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iced_ref01_data = Object.values(setup.data.existing.iced)[0] as any

    // LIST
    const iced_ref01_ent = client.Iced()
    const iced_ref01_match: any = {}

    const iced_ref01_list = (await iced_ref01_ent.list(iced_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iced/IcedTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CoffeeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['iced01','iced02','iced03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COFFEE_TEST_ICED_ENTID': idmap,
    'COFFEE_TEST_LIVE': 'FALSE',
    'COFFEE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['COFFEE_TEST_ICED_ENTID']

  const live = 'TRUE' === env.COFFEE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COFFEE_TEST_ICED_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CoffeeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.COFFEE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
