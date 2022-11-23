/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AccountAuth } from "./account_auth";
import { AccountList } from "./account_list";
import { DidBindingProofs } from "./did_binding_proofs";
import { Params } from "./params";

export const protobufPackage = "saonetwork.sao.did";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetDidBindingProofsRequest {
  accountId: string;
}

export interface QueryGetDidBindingProofsResponse {
  didBindingProofs: DidBindingProofs | undefined;
}

export interface QueryAllDidBindingProofsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDidBindingProofsResponse {
  didBindingProofs: DidBindingProofs[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAccountListRequest {
  did: string;
}

export interface QueryGetAccountListResponse {
  accountList: AccountList | undefined;
}

export interface QueryAllAccountListRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAccountListResponse {
  accountList: AccountList[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAccountAuthRequest {
  accountDid: string;
}

export interface QueryGetAccountAuthResponse {
  accountAuth: AccountAuth | undefined;
}

export interface QueryAllAccountAuthRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAccountAuthResponse {
  accountAuth: AccountAuth[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAllAccountAuthsRequest {
  did: string;
}

export interface QueryGetAllAccountAuthsResponse {
  accountAuths: AccountAuth[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDidBindingProofsRequest(): QueryGetDidBindingProofsRequest {
  return { accountId: "" };
}

export const QueryGetDidBindingProofsRequest = {
  encode(message: QueryGetDidBindingProofsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidBindingProofsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidBindingProofsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidBindingProofsRequest {
    return { accountId: isSet(object.accountId) ? String(object.accountId) : "" };
  },

  toJSON(message: QueryGetDidBindingProofsRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidBindingProofsRequest>, I>>(
    object: I,
  ): QueryGetDidBindingProofsRequest {
    const message = createBaseQueryGetDidBindingProofsRequest();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseQueryGetDidBindingProofsResponse(): QueryGetDidBindingProofsResponse {
  return { didBindingProofs: undefined };
}

export const QueryGetDidBindingProofsResponse = {
  encode(message: QueryGetDidBindingProofsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didBindingProofs !== undefined) {
      DidBindingProofs.encode(message.didBindingProofs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidBindingProofsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidBindingProofsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didBindingProofs = DidBindingProofs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidBindingProofsResponse {
    return {
      didBindingProofs: isSet(object.didBindingProofs) ? DidBindingProofs.fromJSON(object.didBindingProofs) : undefined,
    };
  },

  toJSON(message: QueryGetDidBindingProofsResponse): unknown {
    const obj: any = {};
    message.didBindingProofs !== undefined && (obj.didBindingProofs = message.didBindingProofs
      ? DidBindingProofs.toJSON(message.didBindingProofs)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidBindingProofsResponse>, I>>(
    object: I,
  ): QueryGetDidBindingProofsResponse {
    const message = createBaseQueryGetDidBindingProofsResponse();
    message.didBindingProofs = (object.didBindingProofs !== undefined && object.didBindingProofs !== null)
      ? DidBindingProofs.fromPartial(object.didBindingProofs)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDidBindingProofsRequest(): QueryAllDidBindingProofsRequest {
  return { pagination: undefined };
}

export const QueryAllDidBindingProofsRequest = {
  encode(message: QueryAllDidBindingProofsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidBindingProofsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidBindingProofsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDidBindingProofsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllDidBindingProofsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidBindingProofsRequest>, I>>(
    object: I,
  ): QueryAllDidBindingProofsRequest {
    const message = createBaseQueryAllDidBindingProofsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDidBindingProofsResponse(): QueryAllDidBindingProofsResponse {
  return { didBindingProofs: [], pagination: undefined };
}

export const QueryAllDidBindingProofsResponse = {
  encode(message: QueryAllDidBindingProofsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.didBindingProofs) {
      DidBindingProofs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidBindingProofsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidBindingProofsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didBindingProofs.push(DidBindingProofs.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDidBindingProofsResponse {
    return {
      didBindingProofs: Array.isArray(object?.didBindingProofs)
        ? object.didBindingProofs.map((e: any) => DidBindingProofs.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDidBindingProofsResponse): unknown {
    const obj: any = {};
    if (message.didBindingProofs) {
      obj.didBindingProofs = message.didBindingProofs.map((e) => e ? DidBindingProofs.toJSON(e) : undefined);
    } else {
      obj.didBindingProofs = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidBindingProofsResponse>, I>>(
    object: I,
  ): QueryAllDidBindingProofsResponse {
    const message = createBaseQueryAllDidBindingProofsResponse();
    message.didBindingProofs = object.didBindingProofs?.map((e) => DidBindingProofs.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAccountListRequest(): QueryGetAccountListRequest {
  return { did: "" };
}

export const QueryGetAccountListRequest = {
  encode(message: QueryGetAccountListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountListRequest {
    return { did: isSet(object.did) ? String(object.did) : "" };
  },

  toJSON(message: QueryGetAccountListRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAccountListRequest>, I>>(object: I): QueryGetAccountListRequest {
    const message = createBaseQueryGetAccountListRequest();
    message.did = object.did ?? "";
    return message;
  },
};

function createBaseQueryGetAccountListResponse(): QueryGetAccountListResponse {
  return { accountList: undefined };
}

export const QueryGetAccountListResponse = {
  encode(message: QueryGetAccountListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountList !== undefined) {
      AccountList.encode(message.accountList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountList = AccountList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountListResponse {
    return { accountList: isSet(object.accountList) ? AccountList.fromJSON(object.accountList) : undefined };
  },

  toJSON(message: QueryGetAccountListResponse): unknown {
    const obj: any = {};
    message.accountList !== undefined
      && (obj.accountList = message.accountList ? AccountList.toJSON(message.accountList) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAccountListResponse>, I>>(object: I): QueryGetAccountListResponse {
    const message = createBaseQueryGetAccountListResponse();
    message.accountList = (object.accountList !== undefined && object.accountList !== null)
      ? AccountList.fromPartial(object.accountList)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAccountListRequest(): QueryAllAccountListRequest {
  return { pagination: undefined };
}

export const QueryAllAccountListRequest = {
  encode(message: QueryAllAccountListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccountListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountListRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAccountListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAccountListRequest>, I>>(object: I): QueryAllAccountListRequest {
    const message = createBaseQueryAllAccountListRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAccountListResponse(): QueryAllAccountListResponse {
  return { accountList: [], pagination: undefined };
}

export const QueryAllAccountListResponse = {
  encode(message: QueryAllAccountListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountList) {
      AccountList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccountListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountList.push(AccountList.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountListResponse {
    return {
      accountList: Array.isArray(object?.accountList)
        ? object.accountList.map((e: any) => AccountList.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAccountListResponse): unknown {
    const obj: any = {};
    if (message.accountList) {
      obj.accountList = message.accountList.map((e) => e ? AccountList.toJSON(e) : undefined);
    } else {
      obj.accountList = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAccountListResponse>, I>>(object: I): QueryAllAccountListResponse {
    const message = createBaseQueryAllAccountListResponse();
    message.accountList = object.accountList?.map((e) => AccountList.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAccountAuthRequest(): QueryGetAccountAuthRequest {
  return { accountDid: "" };
}

export const QueryGetAccountAuthRequest = {
  encode(message: QueryGetAccountAuthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountDid !== "") {
      writer.uint32(10).string(message.accountDid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountAuthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountAuthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountAuthRequest {
    return { accountDid: isSet(object.accountDid) ? String(object.accountDid) : "" };
  },

  toJSON(message: QueryGetAccountAuthRequest): unknown {
    const obj: any = {};
    message.accountDid !== undefined && (obj.accountDid = message.accountDid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAccountAuthRequest>, I>>(object: I): QueryGetAccountAuthRequest {
    const message = createBaseQueryGetAccountAuthRequest();
    message.accountDid = object.accountDid ?? "";
    return message;
  },
};

function createBaseQueryGetAccountAuthResponse(): QueryGetAccountAuthResponse {
  return { accountAuth: undefined };
}

export const QueryGetAccountAuthResponse = {
  encode(message: QueryGetAccountAuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAuth !== undefined) {
      AccountAuth.encode(message.accountAuth, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountAuthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuth = AccountAuth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountAuthResponse {
    return { accountAuth: isSet(object.accountAuth) ? AccountAuth.fromJSON(object.accountAuth) : undefined };
  },

  toJSON(message: QueryGetAccountAuthResponse): unknown {
    const obj: any = {};
    message.accountAuth !== undefined
      && (obj.accountAuth = message.accountAuth ? AccountAuth.toJSON(message.accountAuth) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAccountAuthResponse>, I>>(object: I): QueryGetAccountAuthResponse {
    const message = createBaseQueryGetAccountAuthResponse();
    message.accountAuth = (object.accountAuth !== undefined && object.accountAuth !== null)
      ? AccountAuth.fromPartial(object.accountAuth)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAccountAuthRequest(): QueryAllAccountAuthRequest {
  return { pagination: undefined };
}

export const QueryAllAccountAuthRequest = {
  encode(message: QueryAllAccountAuthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccountAuthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountAuthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountAuthRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAccountAuthRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAccountAuthRequest>, I>>(object: I): QueryAllAccountAuthRequest {
    const message = createBaseQueryAllAccountAuthRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAccountAuthResponse(): QueryAllAccountAuthResponse {
  return { accountAuth: [], pagination: undefined };
}

export const QueryAllAccountAuthResponse = {
  encode(message: QueryAllAccountAuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountAuth) {
      AccountAuth.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccountAuthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuth.push(AccountAuth.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountAuthResponse {
    return {
      accountAuth: Array.isArray(object?.accountAuth)
        ? object.accountAuth.map((e: any) => AccountAuth.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAccountAuthResponse): unknown {
    const obj: any = {};
    if (message.accountAuth) {
      obj.accountAuth = message.accountAuth.map((e) => e ? AccountAuth.toJSON(e) : undefined);
    } else {
      obj.accountAuth = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAccountAuthResponse>, I>>(object: I): QueryAllAccountAuthResponse {
    const message = createBaseQueryAllAccountAuthResponse();
    message.accountAuth = object.accountAuth?.map((e) => AccountAuth.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllAccountAuthsRequest(): QueryGetAllAccountAuthsRequest {
  return { did: "" };
}

export const QueryGetAllAccountAuthsRequest = {
  encode(message: QueryGetAllAccountAuthsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllAccountAuthsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllAccountAuthsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllAccountAuthsRequest {
    return { did: isSet(object.did) ? String(object.did) : "" };
  },

  toJSON(message: QueryGetAllAccountAuthsRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllAccountAuthsRequest>, I>>(
    object: I,
  ): QueryGetAllAccountAuthsRequest {
    const message = createBaseQueryGetAllAccountAuthsRequest();
    message.did = object.did ?? "";
    return message;
  },
};

function createBaseQueryGetAllAccountAuthsResponse(): QueryGetAllAccountAuthsResponse {
  return { accountAuths: [] };
}

export const QueryGetAllAccountAuthsResponse = {
  encode(message: QueryGetAllAccountAuthsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountAuths) {
      AccountAuth.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllAccountAuthsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllAccountAuthsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuths.push(AccountAuth.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllAccountAuthsResponse {
    return {
      accountAuths: Array.isArray(object?.accountAuths)
        ? object.accountAuths.map((e: any) => AccountAuth.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryGetAllAccountAuthsResponse): unknown {
    const obj: any = {};
    if (message.accountAuths) {
      obj.accountAuths = message.accountAuths.map((e) => e ? AccountAuth.toJSON(e) : undefined);
    } else {
      obj.accountAuths = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllAccountAuthsResponse>, I>>(
    object: I,
  ): QueryGetAllAccountAuthsResponse {
    const message = createBaseQueryGetAllAccountAuthsResponse();
    message.accountAuths = object.accountAuths?.map((e) => AccountAuth.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a DidBindingProofs by index. */
  DidBindingProofs(request: QueryGetDidBindingProofsRequest): Promise<QueryGetDidBindingProofsResponse>;
  /** Queries a list of DidBindingProofs items. */
  DidBindingProofsAll(request: QueryAllDidBindingProofsRequest): Promise<QueryAllDidBindingProofsResponse>;
  /** Queries a AccountList by index. */
  AccountList(request: QueryGetAccountListRequest): Promise<QueryGetAccountListResponse>;
  /** Queries a list of AccountList items. */
  AccountListAll(request: QueryAllAccountListRequest): Promise<QueryAllAccountListResponse>;
  /** Queries a AccountAuth by index. */
  AccountAuth(request: QueryGetAccountAuthRequest): Promise<QueryGetAccountAuthResponse>;
  /** Queries a list of AccountAuth items. */
  AccountAuthAll(request: QueryAllAccountAuthRequest): Promise<QueryAllAccountAuthResponse>;
  /** Queries a list of GetAllAccountAuth items. */
  GetAllAccountAuths(request: QueryGetAllAccountAuthsRequest): Promise<QueryGetAllAccountAuthsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.DidBindingProofs = this.DidBindingProofs.bind(this);
    this.DidBindingProofsAll = this.DidBindingProofsAll.bind(this);
    this.AccountList = this.AccountList.bind(this);
    this.AccountListAll = this.AccountListAll.bind(this);
    this.AccountAuth = this.AccountAuth.bind(this);
    this.AccountAuthAll = this.AccountAuthAll.bind(this);
    this.GetAllAccountAuths = this.GetAllAccountAuths.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  DidBindingProofs(request: QueryGetDidBindingProofsRequest): Promise<QueryGetDidBindingProofsResponse> {
    const data = QueryGetDidBindingProofsRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "DidBindingProofs", data);
    return promise.then((data) => QueryGetDidBindingProofsResponse.decode(new _m0.Reader(data)));
  }

  DidBindingProofsAll(request: QueryAllDidBindingProofsRequest): Promise<QueryAllDidBindingProofsResponse> {
    const data = QueryAllDidBindingProofsRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "DidBindingProofsAll", data);
    return promise.then((data) => QueryAllDidBindingProofsResponse.decode(new _m0.Reader(data)));
  }

  AccountList(request: QueryGetAccountListRequest): Promise<QueryGetAccountListResponse> {
    const data = QueryGetAccountListRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "AccountList", data);
    return promise.then((data) => QueryGetAccountListResponse.decode(new _m0.Reader(data)));
  }

  AccountListAll(request: QueryAllAccountListRequest): Promise<QueryAllAccountListResponse> {
    const data = QueryAllAccountListRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "AccountListAll", data);
    return promise.then((data) => QueryAllAccountListResponse.decode(new _m0.Reader(data)));
  }

  AccountAuth(request: QueryGetAccountAuthRequest): Promise<QueryGetAccountAuthResponse> {
    const data = QueryGetAccountAuthRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "AccountAuth", data);
    return promise.then((data) => QueryGetAccountAuthResponse.decode(new _m0.Reader(data)));
  }

  AccountAuthAll(request: QueryAllAccountAuthRequest): Promise<QueryAllAccountAuthResponse> {
    const data = QueryAllAccountAuthRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "AccountAuthAll", data);
    return promise.then((data) => QueryAllAccountAuthResponse.decode(new _m0.Reader(data)));
  }

  GetAllAccountAuths(request: QueryGetAllAccountAuthsRequest): Promise<QueryGetAllAccountAuthsResponse> {
    const data = QueryGetAllAccountAuthsRequest.encode(request).finish();
    const promise = this.rpc.request("saonetwork.sao.did.Query", "GetAllAccountAuths", data);
    return promise.then((data) => QueryGetAllAccountAuthsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
