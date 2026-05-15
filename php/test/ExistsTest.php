<?php
declare(strict_types=1);

// Coffee SDK exists test

require_once __DIR__ . '/../coffee_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CoffeeSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
