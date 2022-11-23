/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.model";
function createBaseShardMeta() {
    return {
        shardId: 0,
        peer: "",
        cid: ""
    };
}
export var ShardMeta = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.shardId !== 0) {
            writer.uint32(8).uint64(message.shardId);
        }
        if (message.peer !== "") {
            writer.uint32(18).string(message.peer);
        }
        if (message.cid !== "") {
            writer.uint32(26).string(message.cid);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseShardMeta();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.shardId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.peer = reader.string();
                    break;
                case 3:
                    message.cid = reader.string();
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
            shardId: isSet(object.shardId) ? Number(object.shardId) : 0,
            peer: isSet(object.peer) ? String(object.peer) : "",
            cid: isSet(object.cid) ? String(object.cid) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.shardId !== undefined && (obj.shardId = Math.round(message.shardId));
        message.peer !== undefined && (obj.peer = message.peer);
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseShardMeta();
        var _object_shardId;
        message.shardId = (_object_shardId = object.shardId) !== null && _object_shardId !== void 0 ? _object_shardId : 0;
        var _object_peer;
        message.peer = (_object_peer = object.peer) !== null && _object_peer !== void 0 ? _object_peer : "";
        var _object_cid;
        message.cid = (_object_cid = object.cid) !== null && _object_cid !== void 0 ? _object_cid : "";
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
