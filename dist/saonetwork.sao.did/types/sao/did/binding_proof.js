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
function createBaseBindingProof() {
    return {
        version: 0,
        message: "",
        signature: "",
        account: "",
        did: "",
        timestamp: 0
    };
}
export var BindingProof = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.version !== 0) {
            writer.uint32(8).int32(message.version);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.signature !== "") {
            writer.uint32(26).string(message.signature);
        }
        if (message.account !== "") {
            writer.uint32(34).string(message.account);
        }
        if (message.did !== "") {
            writer.uint32(42).string(message.did);
        }
        if (message.timestamp !== 0) {
            writer.uint32(48).uint64(message.timestamp);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBindingProof();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.version = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.signature = reader.string();
                    break;
                case 4:
                    message.account = reader.string();
                    break;
                case 5:
                    message.did = reader.string();
                    break;
                case 6:
                    message.timestamp = longToNumber(reader.uint64());
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
            version: isSet(object.version) ? Number(object.version) : 0,
            message: isSet(object.message) ? String(object.message) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
            account: isSet(object.account) ? String(object.account) : "",
            did: isSet(object.did) ? String(object.did) : "",
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.version !== undefined && (obj.version = Math.round(message.version));
        message.message !== undefined && (obj.message = message.message);
        message.signature !== undefined && (obj.signature = message.signature);
        message.account !== undefined && (obj.account = message.account);
        message.did !== undefined && (obj.did = message.did);
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseBindingProof();
        var _object_version;
        message.version = (_object_version = object.version) !== null && _object_version !== void 0 ? _object_version : 0;
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_signature;
        message.signature = (_object_signature = object.signature) !== null && _object_signature !== void 0 ? _object_signature : "";
        var _object_account;
        message.account = (_object_account = object.account) !== null && _object_account !== void 0 ? _object_account : "";
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        var _object_timestamp;
        message.timestamp = (_object_timestamp = object.timestamp) !== null && _object_timestamp !== void 0 ? _object_timestamp : 0;
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
