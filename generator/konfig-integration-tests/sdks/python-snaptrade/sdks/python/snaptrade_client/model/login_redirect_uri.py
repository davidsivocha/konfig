# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from snaptrade_client import schemas  # noqa: F401


class LoginRedirectURI(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    Redirect uri upon successful login
    """


    class MetaOapg:
        
        class properties:
            redirectURI = schemas.AnyTypeSchema
            sessionId = schemas.StrSchema
            __annotations__ = {
                "redirectURI": redirectURI,
                "sessionId": sessionId,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["redirectURI"]) -> MetaOapg.properties.redirectURI: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["sessionId"]) -> MetaOapg.properties.sessionId: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["redirectURI", "sessionId", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["redirectURI"]) -> typing.Union[MetaOapg.properties.redirectURI, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["sessionId"]) -> typing.Union[MetaOapg.properties.sessionId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["redirectURI", "sessionId", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        redirectURI: typing.Union[MetaOapg.properties.redirectURI, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, schemas.Unset] = schemas.unset,
        sessionId: typing.Union[MetaOapg.properties.sessionId, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'LoginRedirectURI':
        return super().__new__(
            cls,
            *args,
            redirectURI=redirectURI,
            sessionId=sessionId,
            _configuration=_configuration,
            **kwargs,
        )