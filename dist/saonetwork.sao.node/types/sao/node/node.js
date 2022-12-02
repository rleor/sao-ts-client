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
function createBaseNode() {
    return {
        creator: "",
        peer: "",
        reputation: 0,
        status: 0,
        lastAliveHeigh: 0
    };
}
export var Node = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.peer !== "") {
            writer.uint32(18).string(message.peer);
        }
        if (message.reputation !== 0) {
            writer.uint32(29).float(message.reputation);
        }
        if (message.status !== 0) {
            writer.uint32(32).uint32(message.status);
        }
        if (message.lastAliveHeigh !== 0) {
            writer.uint32(40).int64(message.lastAliveHeigh);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNode();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.peer = reader.string();
                    break;
                case 3:
                    message.reputation = reader.float();
                    break;
                case 4:
                    message.status = reader.uint32();
                    break;
                case 5:
                    message.lastAliveHeigh = longToNumber(reader.int64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            peer: isSet(object.peer) ? String(object.peer) : "",
            reputation: isSet(object.reputation) ? Number(object.reputation) : 0,
            status: isSet(object.status) ? Number(object.status) : 0,
            lastAliveHeigh: isSet(object.lastAliveHeigh) ? Number(object.lastAliveHeigh) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.peer !== undefined && (obj.peer = message.peer);
        message.reputation !== undefined && (obj.reputation = message.reputation);
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.lastAliveHeigh !== undefined && (obj.lastAliveHeigh = Math.round(message.lastAliveHeigh));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseNode();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_peer;
        message.peer = (_object_peer = object.peer) !== null && _object_peer !== void 0 ? _object_peer : "";
        var _object_reputation;
        message.reputation = (_object_reputation = object.reputation) !== null && _object_reputation !== void 0 ? _object_reputation : 0;
        var _object_status;
        message.status = (_object_status = object.status) !== null && _object_status !== void 0 ? _object_status : 0;
        var _object_lastAliveHeigh;
        message.lastAliveHeigh = (_object_lastAliveHeigh = object.lastAliveHeigh) !== null && _object_lastAliveHeigh !== void 0 ? _object_lastAliveHeigh : 0;
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
