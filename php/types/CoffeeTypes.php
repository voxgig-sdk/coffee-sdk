<?php
declare(strict_types=1);

// Typed models for the Coffee SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Hot entity data model. */
class Hot
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?string $title = null;
}

/** Request payload for Hot#list. */
class HotListMatch
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?string $title = null;
}

/** Iced entity data model. */
class Iced
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?string $title = null;
}

/** Request payload for Iced#list. */
class IcedListMatch
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?string $title = null;
}

