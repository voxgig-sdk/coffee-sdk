<?php
declare(strict_types=1);

// Coffee SDK utility: result_body

class CoffeeResultBody
{
    public static function call(CoffeeContext $ctx): ?CoffeeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
