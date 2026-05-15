<?php
declare(strict_types=1);

// Coffee SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CoffeeMakeContext
{
    public static function call(array $ctxmap, ?CoffeeContext $basectx): CoffeeContext
    {
        return new CoffeeContext($ctxmap, $basectx);
    }
}
