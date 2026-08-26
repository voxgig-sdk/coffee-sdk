-- Coffee SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Coffee",
      slug = "coffee",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.sampleapis.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["hot"] = {},
        ["iced"] = {},
      },
    },
    entity = {
      ["hot"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Description of the coffee drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the coffee drink",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to an image of the coffee drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ingredients",
            ["short"] = "List of ingredients used in the coffee drink",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["short"] = "Name of the coffee drink",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "hot",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/coffee/hot",
                ["parts"] = {
                  "coffee",
                  "hot",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["iced"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Description of the coffee drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the coffee drink",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to an image of the coffee drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ingredients",
            ["short"] = "List of ingredients used in the coffee drink",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["short"] = "Name of the coffee drink",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "iced",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/coffee/iced",
                ["parts"] = {
                  "coffee",
                  "iced",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
