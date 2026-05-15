# Coffee SDK utility: feature_add
module CoffeeUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
