/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "saonetwork.sao.sao";

export interface Proposal {
  owner: string;
  provider: string;
  groupId: string;
  duration: number;
  replica: number;
  timeout: number;
  alias: string;
  dataId: string;
  commitId: string;
  tags: string[];
  cid: string;
  rule: string;
  isUpdate: boolean;
  extendInfo: string;
}

function createBaseProposal(): Proposal {
  return {
    owner: "",
    provider: "",
    groupId: "",
    duration: 0,
    replica: 0,
    timeout: 0,
    alias: "",
    dataId: "",
    commitId: "",
    tags: [],
    cid: "",
    rule: "",
    isUpdate: false,
    extendInfo: "",
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.groupId !== "") {
      writer.uint32(26).string(message.groupId);
    }
    if (message.duration !== 0) {
      writer.uint32(32).int32(message.duration);
    }
    if (message.replica !== 0) {
      writer.uint32(40).int32(message.replica);
    }
    if (message.timeout !== 0) {
      writer.uint32(48).int32(message.timeout);
    }
    if (message.alias !== "") {
      writer.uint32(58).string(message.alias);
    }
    if (message.dataId !== "") {
      writer.uint32(66).string(message.dataId);
    }
    if (message.commitId !== "") {
      writer.uint32(74).string(message.commitId);
    }
    for (const v of message.tags) {
      writer.uint32(82).string(v!);
    }
    if (message.cid !== "") {
      writer.uint32(90).string(message.cid);
    }
    if (message.rule !== "") {
      writer.uint32(98).string(message.rule);
    }
    if (message.isUpdate === true) {
      writer.uint32(104).bool(message.isUpdate);
    }
    if (message.extendInfo !== "") {
      writer.uint32(114).string(message.extendInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.groupId = reader.string();
          break;
        case 4:
          message.duration = reader.int32();
          break;
        case 5:
          message.replica = reader.int32();
          break;
        case 6:
          message.timeout = reader.int32();
          break;
        case 7:
          message.alias = reader.string();
          break;
        case 8:
          message.dataId = reader.string();
          break;
        case 9:
          message.commitId = reader.string();
          break;
        case 10:
          message.tags.push(reader.string());
          break;
        case 11:
          message.cid = reader.string();
          break;
        case 12:
          message.rule = reader.string();
          break;
        case 13:
          message.isUpdate = reader.bool();
          break;
        case 14:
          message.extendInfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      replica: isSet(object.replica) ? Number(object.replica) : 0,
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      alias: isSet(object.alias) ? String(object.alias) : "",
      dataId: isSet(object.dataId) ? String(object.dataId) : "",
      commitId: isSet(object.commitId) ? String(object.commitId) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      cid: isSet(object.cid) ? String(object.cid) : "",
      rule: isSet(object.rule) ? String(object.rule) : "",
      isUpdate: isSet(object.isUpdate) ? Boolean(object.isUpdate) : false,
      extendInfo: isSet(object.extendInfo) ? String(object.extendInfo) : "",
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.provider !== undefined && (obj.provider = message.provider);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.replica !== undefined && (obj.replica = Math.round(message.replica));
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    message.alias !== undefined && (obj.alias = message.alias);
    message.dataId !== undefined && (obj.dataId = message.dataId);
    message.commitId !== undefined && (obj.commitId = message.commitId);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.cid !== undefined && (obj.cid = message.cid);
    message.rule !== undefined && (obj.rule = message.rule);
    message.isUpdate !== undefined && (obj.isUpdate = message.isUpdate);
    message.extendInfo !== undefined && (obj.extendInfo = message.extendInfo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.owner = object.owner ?? "";
    message.provider = object.provider ?? "";
    message.groupId = object.groupId ?? "";
    message.duration = object.duration ?? 0;
    message.replica = object.replica ?? 0;
    message.timeout = object.timeout ?? 0;
    message.alias = object.alias ?? "";
    message.dataId = object.dataId ?? "";
    message.commitId = object.commitId ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.cid = object.cid ?? "";
    message.rule = object.rule ?? "";
    message.isUpdate = object.isUpdate ?? false;
    message.extendInfo = object.extendInfo ?? "";
    return message;
  },
};

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
