/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "tendermint.version";
function createBaseApp() {
    return {
        protocol: 0,
        software: ""
    };
}
export var App = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.protocol !== 0) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseApp();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.protocol = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.software = reader.string();
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
            protocol: isSet(object.protocol) ? Number(object.protocol) : 0,
            software: isSet(object.software) ? String(object.software) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.protocol !== undefined && (obj.protocol = Math.round(message.protocol));
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseApp();
        var _object_protocol;
        message.protocol = (_object_protocol = object.protocol) !== null && _object_protocol !== void 0 ? _object_protocol : 0;
        var _object_software;
        message.software = (_object_software = object.software) !== null && _object_software !== void 0 ? _object_software : "";
        return message;
    }
};
function createBaseConsensus() {
    return {
        block: 0,
        app: 0
    };
}
export var Consensus = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.block !== 0) {
            writer.uint32(8).uint64(message.block);
        }
        if (message.app !== 0) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensus();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.block = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.app = longToNumber(reader.uint64());
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
            block: isSet(object.block) ? Number(object.block) : 0,
            app: isSet(object.app) ? Number(object.app) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.block !== undefined && (obj.block = Math.round(message.block));
        message.app !== undefined && (obj.app = Math.round(message.app));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseConsensus();
        var _object_block;
        message.block = (_object_block = object.block) !== null && _object_block !== void 0 ? _object_block : 0;
        var _object_app;
        message.app = (_object_app = object.app) !== null && _object_app !== void 0 ? _object_app : 0;
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
