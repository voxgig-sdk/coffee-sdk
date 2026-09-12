
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Coffee',
        slug: "coffee",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.sampleapis.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      hot: {
      },

      iced: {
      },

    }
  }


  entity = {
    "hot": {
      "fields": [
        {
          "name": "description",
          "short": "Description of the coffee drink",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the coffee drink",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "short": "URL to an image of the coffee drink",
          "type": "`$STRING`"
        },
        {
          "name": "ingredients",
          "short": "List of ingredients used in the coffee drink",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Name of the coffee drink",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "hot",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/coffee/hot",
              "segments": [
                {
                  "lit": "coffee"
                },
                {
                  "lit": "hot"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "coffee",
                "hot"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "iced": {
      "fields": [
        {
          "name": "description",
          "short": "Description of the coffee drink",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the coffee drink",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "short": "URL to an image of the coffee drink",
          "type": "`$STRING`"
        },
        {
          "name": "ingredients",
          "short": "List of ingredients used in the coffee drink",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Name of the coffee drink",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "iced",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/coffee/iced",
              "segments": [
                {
                  "lit": "coffee"
                },
                {
                  "lit": "iced"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "coffee",
                "iced"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

