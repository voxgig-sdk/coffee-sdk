# frozen_string_literal: true

# Typed models for the Coffee SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Hot entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Hot = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# Request payload for Hot#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
HotListMatch = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# Iced entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Iced = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# Request payload for Iced#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
IcedListMatch = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

