# Coffee SDK exists test

import pytest
from coffee_sdk import CoffeeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CoffeeSDK.test(None, None)
        assert testsdk is not None
