/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export var protobufPackage = "saonetwork.sao.node";
function createBasePool() {
    return {
        denom: undefined,
        coinPerShare: "",
        lastRewardBlock: 0,
        totalReward: undefined
    };
}
export var Pool = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.denom !== undefined) {
            Coin.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        if (message.coinPerShare !== "") {
            writer.uint32(18).string(message.coinPerShare);
        }
        if (message.lastRewardBlock !== 0) {
            writer.uint32(24).int64(message.lastRewardBlock);
        }
        if (message.totalReward !== undefined) {
            Coin.encode(message.totalReward, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePool();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.coinPerShare = reader.string();
                    break;
                case 3:
                    message.lastRewardBlock = longToNumber(reader.int64());
                    break;
                case 4:
                    message.totalReward = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function fromJSON(object) {
        return {
            denom: isSet(object.denom) ? Coin.fromJSON(object.denom) : undefined,
            coinPerShare: isSet(object.coinPerShare) ? String(object.coinPerShare) : "",
            lastRewardBlock: isSet(object.lastRewardBlock) ? Number(object.lastRewardBlock) : 0,
            totalReward: isSet(object.totalReward) ? Coin.fromJSON(object.totalReward) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom ? Coin.toJSON(message.denom) : undefined);
        message.coinPerShare !== undefined && (obj.coinPerShare = message.coinPerShare);
        message.lastRewardBlock !== undefined && (obj.lastRewardBlock = Math.round(message.lastRewardBlock));
        message.totalReward !== undefined && (obj.totalReward = message.totalReward ? Coin.toJSON(message.totalReward) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBasePool();
        message.denom = object.denom !== undefined && object.denom !== null ? Coin.fromPartial(object.denom) : undefined;
        var _object_coinPerShare;
        message.coinPerShare = (_object_coinPerShare = object.coinPerShare) !== null && _object_coinPerShare !== void 0 ? _object_coinPerShare : "";
        var _object_lastRewardBlock;
        message.lastRewardBlock = (_object_lastRewardBlock = object.lastRewardBlock) !== null && _object_lastRewardBlock !== void 0 ? _object_lastRewardBlock : 0;
        message.totalReward = object.totalReward !== undefined && object.totalReward !== null ? Coin.fromPartial(object.totalReward) : undefined;
        return message;
    }
};
var globalThis = function() {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
}();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
