<?php
declare(strict_types=1);

// Coffee SDK utility: result_headers

class CoffeeResultHeaders
{
    public static function call(CoffeeContext $ctx): ?CoffeeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
