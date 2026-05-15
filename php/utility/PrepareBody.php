<?php
declare(strict_types=1);

// Coffee SDK utility: prepare_body

class CoffeePrepareBody
{
    public static function call(CoffeeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
