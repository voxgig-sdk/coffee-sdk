<?php
declare(strict_types=1);

// Coffee SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CoffeeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CoffeeBaseFeature();
            case "test":
                return new CoffeeTestFeature();
            default:
                return new CoffeeBaseFeature();
        }
    }
}
