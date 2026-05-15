<?php
declare(strict_types=1);

// Coffee SDK utility: feature_add

class CoffeeFeatureAdd
{
    public static function call(CoffeeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
