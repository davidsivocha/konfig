# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

import unittest
from unittest.mock import patch

import urllib3

import snaptrade_client
from snaptrade_client.paths.accounts_account_id_option_strategy_option_strategy_id_execute import post
from snaptrade_client import configuration, schemas, api_client

from .. import ApiTestMixin


class TestAccountsAccountIdOptionStrategyOptionStrategyIdExecute(ApiTestMixin, unittest.TestCase):
    """
    AccountsAccountIdOptionStrategyOptionStrategyIdExecute unit test stubs
        Place an option strategy order on the brokerage
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200






if __name__ == '__main__':
    unittest.main()