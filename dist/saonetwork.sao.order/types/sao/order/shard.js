/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.order";
function createBaseShard() {
    return {
        id: 0,
        orderId: 0,
        status: 0,
        size: 0,
        cid: "",
        pledge: 0
    };
}
export var Shard = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.orderId !== 0) {
            writer.uint32(16).uint64(message.orderId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.size !== 0) {
            writer.uint32(32).int32(message.size);
        }
        if (message.cid !== "") {
            writer.uint32(42).string(message.cid);
        }
        if (message.pledge !== 0) {
            writer.uint32(48).uint64(message.pledge);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseShard();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.orderId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.size = reader.int32();
                    break;
                case 5:
                    message.cid = reader.string();
                    break;
                case 6:
                    message.pledge = longToNumber(reader.uint64());
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
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
            status: isSet(object.status) ? Number(object.status) : 0,
            size: isSet(object.size) ? Number(object.size) : 0,
            cid: isSet(object.cid) ? String(object.cid) : "",
            pledge: isSet(object.pledge) ? Number(object.pledge) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.cid !== undefined && (obj.cid = message.cid);
        message.pledge !== undefined && (obj.pledge = Math.round(message.pledge));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseShard();
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : 0;
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        var _object_status;
        message.status = (_object_status = object.status) !== null && _object_status !== void 0 ? _object_status : 0;
        var _object_size;
        message.size = (_object_size = object.size) !== null && _object_size !== void 0 ? _object_size : 0;
        var _object_cid;
        message.cid = (_object_cid = object.cid) !== null && _object_cid !== void 0 ? _object_cid : "";
        var _object_pledge;
        message.pledge = (_object_pledge = object.pledge) !== null && _object_pledge !== void 0 ? _object_pledge : 0;
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
