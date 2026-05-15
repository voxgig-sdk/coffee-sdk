# Coffee SDK utility: make_context
require_relative '../core/context'
module CoffeeUtilities
  MakeContext = ->(ctxmap, basectx) {
    CoffeeContext.new(ctxmap, basectx)
  }
end
