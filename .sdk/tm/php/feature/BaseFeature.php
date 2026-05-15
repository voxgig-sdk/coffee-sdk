<?php
declare(strict_types=1);

// Coffee SDK base feature

class CoffeeBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CoffeeContext $ctx, array $options): void {}
    public function PostConstruct(CoffeeContext $ctx): void {}
    public function PostConstructEntity(CoffeeContext $ctx): void {}
    public function SetData(CoffeeContext $ctx): void {}
    public function GetData(CoffeeContext $ctx): void {}
    public function GetMatch(CoffeeContext $ctx): void {}
    public function SetMatch(CoffeeContext $ctx): void {}
    public function PrePoint(CoffeeContext $ctx): void {}
    public function PreSpec(CoffeeContext $ctx): void {}
    public function PreRequest(CoffeeContext $ctx): void {}
    public function PreResponse(CoffeeContext $ctx): void {}
    public function PreResult(CoffeeContext $ctx): void {}
    public function PreDone(CoffeeContext $ctx): void {}
    public function PreUnexpected(CoffeeContext $ctx): void {}
}
