-- Typed models for the Coffee SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Hot
---@field description? string
---@field id? number
---@field image? string
---@field ingredient? table
---@field title? string

---@class HotListMatch

---@class Iced
---@field description? string
---@field id? number
---@field image? string
---@field ingredient? table
---@field title? string

---@class IcedListMatch

local M = {}

return M
