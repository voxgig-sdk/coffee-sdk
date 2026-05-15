package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewHotEntityFunc func(client *CoffeeSDK, entopts map[string]any) CoffeeEntity

var NewIcedEntityFunc func(client *CoffeeSDK, entopts map[string]any) CoffeeEntity

