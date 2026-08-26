<?php
declare(strict_types=1);

// Coffee SDK configuration

class CoffeeConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Coffee",
                "slug" => "coffee",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.sampleapis.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "hot" => [],
                    "iced" => [],
                ],
            ],
            "entity" => [
        'hot' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Description of the coffee drink',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the coffee drink',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'short' => 'URL to an image of the coffee drink',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ingredients',
              'short' => 'List of ingredients used in the coffee drink',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'short' => 'Name of the coffee drink',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'hot',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/coffee/hot',
                  'parts' => [
                    'coffee',
                    'hot',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'iced' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Description of the coffee drink',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the coffee drink',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'short' => 'URL to an image of the coffee drink',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ingredients',
              'short' => 'List of ingredients used in the coffee drink',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'short' => 'Name of the coffee drink',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'iced',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/coffee/iced',
                  'parts' => [
                    'coffee',
                    'iced',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CoffeeFeatures::make_feature($name);
    }
}
