-- Coffee SDK error

local CoffeeError = {}
CoffeeError.__index = CoffeeError


function CoffeeError.new(code, msg, ctx)
  local self = setmetatable({}, CoffeeError)
  self.is_sdk_error = true
  self.sdk = "Coffee"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CoffeeError:error()
  return self.msg
end


function CoffeeError:__tostring()
  return self.msg
end


return CoffeeError
