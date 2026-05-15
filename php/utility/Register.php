<?php
declare(strict_types=1);

// Coffee SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CoffeeUtility::setRegistrar(function (CoffeeUtility $u): void {
    $u->clean = [CoffeeClean::class, 'call'];
    $u->done = [CoffeeDone::class, 'call'];
    $u->make_error = [CoffeeMakeError::class, 'call'];
    $u->feature_add = [CoffeeFeatureAdd::class, 'call'];
    $u->feature_hook = [CoffeeFeatureHook::class, 'call'];
    $u->feature_init = [CoffeeFeatureInit::class, 'call'];
    $u->fetcher = [CoffeeFetcher::class, 'call'];
    $u->make_fetch_def = [CoffeeMakeFetchDef::class, 'call'];
    $u->make_context = [CoffeeMakeContext::class, 'call'];
    $u->make_options = [CoffeeMakeOptions::class, 'call'];
    $u->make_request = [CoffeeMakeRequest::class, 'call'];
    $u->make_response = [CoffeeMakeResponse::class, 'call'];
    $u->make_result = [CoffeeMakeResult::class, 'call'];
    $u->make_point = [CoffeeMakePoint::class, 'call'];
    $u->make_spec = [CoffeeMakeSpec::class, 'call'];
    $u->make_url = [CoffeeMakeUrl::class, 'call'];
    $u->param = [CoffeeParam::class, 'call'];
    $u->prepare_auth = [CoffeePrepareAuth::class, 'call'];
    $u->prepare_body = [CoffeePrepareBody::class, 'call'];
    $u->prepare_headers = [CoffeePrepareHeaders::class, 'call'];
    $u->prepare_method = [CoffeePrepareMethod::class, 'call'];
    $u->prepare_params = [CoffeePrepareParams::class, 'call'];
    $u->prepare_path = [CoffeePreparePath::class, 'call'];
    $u->prepare_query = [CoffeePrepareQuery::class, 'call'];
    $u->result_basic = [CoffeeResultBasic::class, 'call'];
    $u->result_body = [CoffeeResultBody::class, 'call'];
    $u->result_headers = [CoffeeResultHeaders::class, 'call'];
    $u->transform_request = [CoffeeTransformRequest::class, 'call'];
    $u->transform_response = [CoffeeTransformResponse::class, 'call'];
});
