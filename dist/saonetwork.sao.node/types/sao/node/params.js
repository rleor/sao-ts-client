/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.node";
function createBaseParams() {
    return {
        blockReward: 0,
        earnDenom: ""
    };
}
export var Params = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.blockReward !== 0) {
            writer.uint32(8).uint64(message.blockReward);
        }
        if (message.earnDenom !== "") {
            writer.uint32(18).string(message.earnDenom);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.blockReward = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.earnDenom = reader.string();
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
            blockReward: isSet(object.blockReward) ? Number(object.blockReward) : 0,
            earnDenom: isSet(object.earnDenom) ? String(object.earnDenom) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.blockReward !== undefined && (obj.blockReward = Math.round(message.blockReward));
        message.earnDenom !== undefined && (obj.earnDenom = message.earnDenom);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseParams();
        var _object_blockReward;
        message.blockReward = (_object_blockReward = object.blockReward) !== null && _object_blockReward !== void 0 ? _object_blockReward : 0;
        var _object_earnDenom;
        message.earnDenom = (_object_earnDenom = object.earnDenom) !== null && _object_earnDenom !== void 0 ? _object_earnDenom : "";
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
