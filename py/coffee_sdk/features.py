# Coffee SDK feature factory

from coffee_sdk.feature.base_feature import CoffeeBaseFeature
from coffee_sdk.feature.test_feature import CoffeeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CoffeeBaseFeature(),
        "test": lambda: CoffeeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
