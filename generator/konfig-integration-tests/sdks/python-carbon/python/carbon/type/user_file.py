# coding: utf-8

"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from carbon.type.chunk_properties_nullable import ChunkPropertiesNullable
from carbon.type.data_source_type import DataSourceType
from carbon.type.external_file_sync_statuses import ExternalFileSyncStatuses
from carbon.type.file_statistics_nullable import FileStatisticsNullable
from carbon.type.user_file_embedding_properties import UserFileEmbeddingProperties

class RequiredUserFile(TypedDict):
    tags: typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]

    id: int

    source: DataSourceType

    organization_id: int

    organization_supplied_user_id: str

    organization_user_data_source_id: typing.Optional[int]

    external_file_id: str

    external_url: typing.Optional[str]

    sync_status: ExternalFileSyncStatuses

    sync_error_message: typing.Optional[str]

    last_sync: typing.Optional[datetime]

    file_statistics: FileStatisticsNullable

    file_metadata: typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]

    embedding_properties: UserFileEmbeddingProperties

    chunk_size: typing.Optional[int]

    chunk_overlap: typing.Optional[int]

    chunk_properties: ChunkPropertiesNullable

    name: typing.Optional[str]

    parent_id: typing.Optional[int]

    enable_auto_sync: typing.Optional[bool]

    presigned_url: typing.Optional[str]

    parsed_text_url: typing.Optional[str]

    additional_presigned_urls: typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]

    skip_embedding_generation: bool

    source_created_at: typing.Optional[datetime]

    generate_sparse_vectors: typing.Optional[bool]

    created_at: datetime

    updated_at: datetime

class OptionalUserFile(TypedDict, total=False):
    pass

class UserFile(RequiredUserFile, OptionalUserFile):
    pass