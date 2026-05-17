package voxgigcoffeesdk

import (
	"github.com/voxgig-sdk/coffee-sdk/go/core"
	"github.com/voxgig-sdk/coffee-sdk/go/entity"
	"github.com/voxgig-sdk/coffee-sdk/go/feature"
	_ "github.com/voxgig-sdk/coffee-sdk/go/utility"
)

// Type aliases preserve external API.
type CoffeeSDK = core.CoffeeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CoffeeEntity = core.CoffeeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CoffeeError = core.CoffeeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewHotEntityFunc = func(client *core.CoffeeSDK, entopts map[string]any) core.CoffeeEntity {
		return entity.NewHotEntity(client, entopts)
	}
	core.NewIcedEntityFunc = func(client *core.CoffeeSDK, entopts map[string]any) core.CoffeeEntity {
		return entity.NewIcedEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCoffeeSDK = core.NewCoffeeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
