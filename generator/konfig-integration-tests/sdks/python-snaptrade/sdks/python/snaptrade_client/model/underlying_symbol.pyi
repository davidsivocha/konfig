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


class UnderlyingSymbol(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    Underlying Symbol
    """


    class MetaOapg:
        
        class properties:
            id = schemas.UUIDSchema
            symbol = schemas.StrSchema
            
            
            class description(
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, str, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'description':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
        
            @staticmethod
            def currency() -> typing.Type['Currency']:
                return Currency
        
            @staticmethod
            def exchange() -> typing.Type['USExchange']:
                return USExchange
        
            @staticmethod
            def type() -> typing.Type['SecurityType']:
                return SecurityType
            
            
            class currencies(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['Currency']:
                        return Currency
            
                def __new__(
                    cls,
                    arg: typing.Union[typing.Tuple['Currency'], typing.List['Currency']],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'currencies':
                    return super().__new__(
                        cls,
                        arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> 'Currency':
                    return super().__getitem__(i)
            
            
            class figi_code(
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, str, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'figi_code':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            __annotations__ = {
                "id": id,
                "symbol": symbol,
                "description": description,
                "currency": currency,
                "exchange": exchange,
                "type": type,
                "currencies": currencies,
                "figi_code": figi_code,
            }
        additional_properties = schemas.AnyTypeSchema
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["symbol"]) -> MetaOapg.properties.symbol: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["description"]) -> MetaOapg.properties.description: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["currency"]) -> 'Currency': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["exchange"]) -> 'USExchange': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["type"]) -> 'SecurityType': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["currencies"]) -> MetaOapg.properties.currencies: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["figi_code"]) -> MetaOapg.properties.figi_code: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> MetaOapg.additional_properties: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["symbol"], typing_extensions.Literal["description"], typing_extensions.Literal["currency"], typing_extensions.Literal["exchange"], typing_extensions.Literal["type"], typing_extensions.Literal["currencies"], typing_extensions.Literal["figi_code"], str, ]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["symbol"]) -> typing.Union[MetaOapg.properties.symbol, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["description"]) -> typing.Union[MetaOapg.properties.description, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["currency"]) -> typing.Union['Currency', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["exchange"]) -> typing.Union['USExchange', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["type"]) -> typing.Union['SecurityType', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["currencies"]) -> typing.Union[MetaOapg.properties.currencies, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["figi_code"]) -> typing.Union[MetaOapg.properties.figi_code, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["symbol"], typing_extensions.Literal["description"], typing_extensions.Literal["currency"], typing_extensions.Literal["exchange"], typing_extensions.Literal["type"], typing_extensions.Literal["currencies"], typing_extensions.Literal["figi_code"], str, ]):
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        id: typing.Union[MetaOapg.properties.id, str, uuid.UUID, schemas.Unset] = schemas.unset,
        symbol: typing.Union[MetaOapg.properties.symbol, str, schemas.Unset] = schemas.unset,
        description: typing.Union[MetaOapg.properties.description, None, str, schemas.Unset] = schemas.unset,
        currency: typing.Union['Currency', schemas.Unset] = schemas.unset,
        exchange: typing.Union['USExchange', schemas.Unset] = schemas.unset,
        type: typing.Union['SecurityType', schemas.Unset] = schemas.unset,
        currencies: typing.Union[MetaOapg.properties.currencies, list, tuple, schemas.Unset] = schemas.unset,
        figi_code: typing.Union[MetaOapg.properties.figi_code, None, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'UnderlyingSymbol':
        return super().__new__(
            cls,
            *args,
            id=id,
            symbol=symbol,
            description=description,
            currency=currency,
            exchange=exchange,
            type=type,
            currencies=currencies,
            figi_code=figi_code,
            _configuration=_configuration,
            **kwargs,
        )

from snaptrade_client.model.currency import Currency
from snaptrade_client.model.security_type import SecurityType
from snaptrade_client.model.us_exchange import USExchange