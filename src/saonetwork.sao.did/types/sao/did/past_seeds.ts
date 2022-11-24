/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "saonetwork.sao.did";

export interface PastSeeds {
  did: string;
  seeds: string[];
}

function createBasePastSeeds(): PastSeeds {
  return { did: "", seeds: [] };
}

export const PastSeeds = {
  encode(message: PastSeeds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    for (const v of message.seeds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PastSeeds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePastSeeds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.seeds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PastSeeds {
    return {
      did: isSet(object.did) ? String(object.did) : "",
      seeds: Array.isArray(object?.seeds) ? object.seeds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PastSeeds): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    if (message.seeds) {
      obj.seeds = message.seeds.map((e) => e);
    } else {
      obj.seeds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PastSeeds>, I>>(object: I): PastSeeds {
    const message = createBasePastSeeds();
    message.did = object.did ?? "";
    message.seeds = object.seeds?.map((e) => e) || [];
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
