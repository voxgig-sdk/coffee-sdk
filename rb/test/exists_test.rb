# Coffee SDK exists test

require "minitest/autorun"
require_relative "../Coffee_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CoffeeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
