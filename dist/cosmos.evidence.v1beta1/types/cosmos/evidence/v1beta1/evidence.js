/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
export var protobufPackage = "cosmos.evidence.v1beta1";
function createBaseEquivocation() {
    return {
        height: 0,
        time: undefined,
        power: 0,
        consensusAddress: ""
    };
}
export var Equivocation = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== 0) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEquivocation();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = longToNumber(reader.int64());
                    break;
                case 4:
                    message.consensusAddress = reader.string();
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
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            power: isSet(object.power) ? Number(object.power) : 0,
            consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.power !== undefined && (obj.power = Math.round(message.power));
        message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEquivocation();
        var _object_height;
        message.height = (_object_height = object.height) !== null && _object_height !== void 0 ? _object_height : 0;
        var _object_time;
        message.time = (_object_time = object.time) !== null && _object_time !== void 0 ? _object_time : undefined;
        var _object_power;
        message.power = (_object_power = object.power) !== null && _object_power !== void 0 ? _object_power : 0;
        var _object_consensusAddress;
        message.consensusAddress = (_object_consensusAddress = object.consensusAddress) !== null && _object_consensusAddress !== void 0 ? _object_consensusAddress : "";
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
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = date.getTime() % 1000 * 1000000;
    return {
        seconds: seconds,
        nanos: nanos
    };
}
function fromTimestamp(t) {
    var millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (_instanceof(o, Date)) {
        return o;
    } else if (typeof o === "string") {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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
