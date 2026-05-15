package = "voxgig-sdk-coffee"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/coffee-sdk.git"
}
description = {
  summary = "Coffee SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["coffee_sdk"] = "coffee_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
