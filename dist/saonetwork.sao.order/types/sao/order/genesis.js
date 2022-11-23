/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Order } from "./order";
import { Params } from "./params";
import { Shard } from "./shard";
export var protobufPackage = "saonetwork.sao.order";
function createBaseGenesisState() {
    return {
        params: undefined,
        orderList: [],
        orderCount: 0,
        shardList: [],
        shardCount: 0
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.orderList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Order.encode(v, writer.uint32(18).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (message.orderCount !== 0) {
            writer.uint32(24).uint64(message.orderCount);
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.shardList[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Shard.encode(v1, writer.uint32(34).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        if (message.shardCount !== 0) {
            writer.uint32(40).uint64(message.shardCount);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderList.push(Order.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.orderCount = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.shardList.push(Shard.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.shardCount = longToNumber(reader.uint64());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            orderList: Array.isArray(object === null || object === void 0 ? void 0 : object.orderList) ? object.orderList.map(function(e) {
                return Order.fromJSON(e);
            }) : [],
            orderCount: isSet(object.orderCount) ? Number(object.orderCount) : 0,
            shardList: Array.isArray(object === null || object === void 0 ? void 0 : object.shardList) ? object.shardList.map(function(e) {
                return Shard.fromJSON(e);
            }) : [],
            shardCount: isSet(object.shardCount) ? Number(object.shardCount) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.orderList) {
            obj.orderList = message.orderList.map(function(e) {
                return e ? Order.toJSON(e) : undefined;
            });
        } else {
            obj.orderList = [];
        }
        message.orderCount !== undefined && (obj.orderCount = Math.round(message.orderCount));
        if (message.shardList) {
            obj.shardList = message.shardList.map(function(e) {
                return e ? Shard.toJSON(e) : undefined;
            });
        } else {
            obj.shardList = [];
        }
        message.shardCount !== undefined && (obj.shardCount = Math.round(message.shardCount));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_orderList, _object_shardList;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.orderList = ((_object_orderList = object.orderList) === null || _object_orderList === void 0 ? void 0 : _object_orderList.map(function(e) {
            return Order.fromPartial(e);
        })) || [];
        var _object_orderCount;
        message.orderCount = (_object_orderCount = object.orderCount) !== null && _object_orderCount !== void 0 ? _object_orderCount : 0;
        message.shardList = ((_object_shardList = object.shardList) === null || _object_shardList === void 0 ? void 0 : _object_shardList.map(function(e) {
            return Shard.fromPartial(e);
        })) || [];
        var _object_shardCount;
        message.shardCount = (_object_shardCount = object.shardCount) !== null && _object_shardCount !== void 0 ? _object_shardCount : 0;
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
