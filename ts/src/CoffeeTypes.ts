// Typed models for the Coffee SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Hot {
  description?: string
  id?: number
  image?: string
  ingredient?: any[]
  title?: string
}

export type HotListMatch = Partial<Hot>

export interface Iced {
  description?: string
  id?: number
  image?: string
  ingredient?: any[]
  title?: string
}

export type IcedListMatch = Partial<Iced>

