
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
              "parts": [
                "coffee",
                "hot"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "coffee",
                "iced"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

