# Coffee SDK utility: make_context

from coffee_sdk.core.context import CoffeeContext


def make_context_util(ctxmap, basectx):
    return CoffeeContext(ctxmap, basectx)
