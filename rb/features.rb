# Coffee SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CoffeeFeatures
  def self.make_feature(name)
    case name
    when "base"
      CoffeeBaseFeature.new
    when "ratelimit"
      CoffeeRatelimitFeature.new
    when "retry"
      CoffeeRetryFeature.new
    when "test"
      CoffeeTestFeature.new
    when "timeout"
      CoffeeTimeoutFeature.new
    else
      CoffeeBaseFeature.new
    end
  end
end
