# Coffee SDK feature factory

from feature.base_feature import CoffeeBaseFeature
from feature.test_feature import CoffeeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CoffeeBaseFeature(),
        "test": lambda: CoffeeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
