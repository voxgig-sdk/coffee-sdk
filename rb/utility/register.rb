# Coffee SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CoffeeUtility.registrar = ->(u) {
  u.clean = CoffeeUtilities::Clean
  u.done = CoffeeUtilities::Done
  u.make_error = CoffeeUtilities::MakeError
  u.feature_add = CoffeeUtilities::FeatureAdd
  u.feature_hook = CoffeeUtilities::FeatureHook
  u.feature_init = CoffeeUtilities::FeatureInit
  u.fetcher = CoffeeUtilities::Fetcher
  u.make_fetch_def = CoffeeUtilities::MakeFetchDef
  u.make_context = CoffeeUtilities::MakeContext
  u.make_options = CoffeeUtilities::MakeOptions
  u.make_request = CoffeeUtilities::MakeRequest
  u.make_response = CoffeeUtilities::MakeResponse
  u.make_result = CoffeeUtilities::MakeResult
  u.make_point = CoffeeUtilities::MakePoint
  u.make_spec = CoffeeUtilities::MakeSpec
  u.make_url = CoffeeUtilities::MakeUrl
  u.param = CoffeeUtilities::Param
  u.prepare_auth = CoffeeUtilities::PrepareAuth
  u.prepare_body = CoffeeUtilities::PrepareBody
  u.prepare_headers = CoffeeUtilities::PrepareHeaders
  u.prepare_method = CoffeeUtilities::PrepareMethod
  u.prepare_params = CoffeeUtilities::PrepareParams
  u.prepare_path = CoffeeUtilities::PreparePath
  u.prepare_query = CoffeeUtilities::PrepareQuery
  u.result_basic = CoffeeUtilities::ResultBasic
  u.result_body = CoffeeUtilities::ResultBody
  u.result_headers = CoffeeUtilities::ResultHeaders
  u.transform_request = CoffeeUtilities::TransformRequest
  u.transform_response = CoffeeUtilities::TransformResponse
}
