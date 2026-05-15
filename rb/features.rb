# Coffee SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CoffeeFeatures
  def self.make_feature(name)
    case name
    when "base"
      CoffeeBaseFeature.new
    when "test"
      CoffeeTestFeature.new
    else
      CoffeeBaseFeature.new
    end
  end
end
