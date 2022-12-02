/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.did";
function createBaseSidDocuments() {
    return {
        id: 0,
        creator: ""
    };
}
export var SidDocuments = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSidDocuments();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.creator = reader.string();
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
            id: isSet(object.id) ? Number(object.id) : 0,
            creator: isSet(object.creator) ? String(object.creator) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseSidDocuments();
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : 0;
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
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
