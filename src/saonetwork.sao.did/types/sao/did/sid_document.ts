/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "saonetwork.sao.did";

export interface SidDocument {
  versionId: string;
  signing: string;
  encryption: string;
}

function createBaseSidDocument(): SidDocument {
  return { versionId: "", signing: "", encryption: "" };
}

export const SidDocument = {
  encode(message: SidDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }
    if (message.signing !== "") {
      writer.uint32(18).string(message.signing);
    }
    if (message.encryption !== "") {
      writer.uint32(26).string(message.encryption);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSidDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versionId = reader.string();
          break;
        case 2:
          message.signing = reader.string();
          break;
        case 3:
          message.encryption = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SidDocument {
    return {
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
      signing: isSet(object.signing) ? String(object.signing) : "",
      encryption: isSet(object.encryption) ? String(object.encryption) : "",
    };
  },

  toJSON(message: SidDocument): unknown {
    const obj: any = {};
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.signing !== undefined && (obj.signing = message.signing);
    message.encryption !== undefined && (obj.encryption = message.encryption);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SidDocument>, I>>(object: I): SidDocument {
    const message = createBaseSidDocument();
    message.versionId = object.versionId ?? "";
    message.signing = object.signing ?? "";
    message.encryption = object.encryption ?? "";
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
