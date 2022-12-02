/* eslint-disable */ function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Metadata } from "./metadata";
import { Shard } from "./shard";
export var protobufPackage = "saonetwork.sao.order";
function createBaseOrder() {
    return {
        creator: "",
        owner: "",
        id: 0,
        provider: "",
        cid: "",
        duration: 0,
        expire: 0,
        status: 0,
        replica: 0,
        metadata: undefined,
        shards: {},
        amount: undefined,
        size: 0,
        operation: 0
    };
}
export var Order = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.id !== 0) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.provider !== "") {
            writer.uint32(34).string(message.provider);
        }
        if (message.cid !== "") {
            writer.uint32(42).string(message.cid);
        }
        if (message.duration !== 0) {
            writer.uint32(48).int32(message.duration);
        }
        if (message.expire !== 0) {
            writer.uint32(56).int32(message.expire);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.replica !== 0) {
            writer.uint32(72).int32(message.replica);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(82).fork()).ldelim();
        }
        Object.entries(message.shards).forEach(function(param) {
            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
            Order_ShardsEntry.encode({
                key: key,
                value: value
            }, writer.uint32(90).fork()).ldelim();
        });
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(98).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(104).uint64(message.size);
        }
        if (message.operation !== 0) {
            writer.uint32(112).int32(message.operation);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrder();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.provider = reader.string();
                    break;
                case 5:
                    message.cid = reader.string();
                    break;
                case 6:
                    message.duration = reader.int32();
                    break;
                case 7:
                    message.expire = reader.int32();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.replica = reader.int32();
                    break;
                case 10:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                case 11:
                    var entry11 = Order_ShardsEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.shards[entry11.key] = entry11.value;
                    }
                    break;
                case 12:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.size = longToNumber(reader.uint64());
                    break;
                case 14:
                    message.operation = reader.int32();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
            provider: isSet(object.provider) ? String(object.provider) : "",
            cid: isSet(object.cid) ? String(object.cid) : "",
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            expire: isSet(object.expire) ? Number(object.expire) : 0,
            status: isSet(object.status) ? Number(object.status) : 0,
            replica: isSet(object.replica) ? Number(object.replica) : 0,
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
            shards: isObject(object.shards) ? Object.entries(object.shards).reduce(function(acc, param) {
                var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
                acc[key] = Shard.fromJSON(value);
                return acc;
            }, {}) : {},
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            size: isSet(object.size) ? Number(object.size) : 0,
            operation: isSet(object.operation) ? Number(object.operation) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.owner !== undefined && (obj.owner = message.owner);
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.provider !== undefined && (obj.provider = message.provider);
        message.cid !== undefined && (obj.cid = message.cid);
        message.duration !== undefined && (obj.duration = Math.round(message.duration));
        message.expire !== undefined && (obj.expire = Math.round(message.expire));
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.replica !== undefined && (obj.replica = Math.round(message.replica));
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        obj.shards = {};
        if (message.shards) {
            Object.entries(message.shards).forEach(function(param) {
                var _param = _slicedToArray(param, 2), k = _param[0], v = _param[1];
                obj.shards[k] = Shard.toJSON(v);
            });
        }
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.operation !== undefined && (obj.operation = Math.round(message.operation));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseOrder();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : 0;
        var _object_provider;
        message.provider = (_object_provider = object.provider) !== null && _object_provider !== void 0 ? _object_provider : "";
        var _object_cid;
        message.cid = (_object_cid = object.cid) !== null && _object_cid !== void 0 ? _object_cid : "";
        var _object_duration;
        message.duration = (_object_duration = object.duration) !== null && _object_duration !== void 0 ? _object_duration : 0;
        var _object_expire;
        message.expire = (_object_expire = object.expire) !== null && _object_expire !== void 0 ? _object_expire : 0;
        var _object_status;
        message.status = (_object_status = object.status) !== null && _object_status !== void 0 ? _object_status : 0;
        var _object_replica;
        message.replica = (_object_replica = object.replica) !== null && _object_replica !== void 0 ? _object_replica : 0;
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        var _object_shards;
        message.shards = Object.entries((_object_shards = object.shards) !== null && _object_shards !== void 0 ? _object_shards : {}).reduce(function(acc, param) {
            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
            if (value !== undefined) {
                acc[key] = Shard.fromPartial(value);
            }
            return acc;
        }, {});
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        var _object_size;
        message.size = (_object_size = object.size) !== null && _object_size !== void 0 ? _object_size : 0;
        var _object_operation;
        message.operation = (_object_operation = object.operation) !== null && _object_operation !== void 0 ? _object_operation : 0;
        return message;
    }
};
function createBaseOrder_ShardsEntry() {
    return {
        key: "",
        value: undefined
    };
}
export var Order_ShardsEntry = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Shard.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrder_ShardsEntry();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Shard.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Shard.fromJSON(object.value) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? Shard.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseOrder_ShardsEntry();
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        message.value = object.value !== undefined && object.value !== null ? Shard.fromPartial(object.value) : undefined;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
