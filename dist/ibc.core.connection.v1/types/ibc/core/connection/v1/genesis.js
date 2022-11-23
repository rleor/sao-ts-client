/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ConnectionPaths, IdentifiedConnection, Params } from "./connection";
export var protobufPackage = "ibc.core.connection.v1";
function createBaseGenesisState() {
    return {
        connections: [],
        clientConnectionPaths: [],
        nextConnectionSequence: 0,
        params: undefined
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.connections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
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
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.clientConnectionPaths[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                ConnectionPaths.encode(v1, writer.uint32(18).fork()).ldelim();
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
        if (message.nextConnectionSequence !== 0) {
            writer.uint32(24).uint64(message.nextConnectionSequence);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientConnectionPaths.push(ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextConnectionSequence = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.params = Params.decode(reader, reader.uint32());
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
            connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections) ? object.connections.map(function(e) {
                return IdentifiedConnection.fromJSON(e);
            }) : [],
            clientConnectionPaths: Array.isArray(object === null || object === void 0 ? void 0 : object.clientConnectionPaths) ? object.clientConnectionPaths.map(function(e) {
                return ConnectionPaths.fromJSON(e);
            }) : [],
            nextConnectionSequence: isSet(object.nextConnectionSequence) ? Number(object.nextConnectionSequence) : 0,
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(function(e) {
                return e ? IdentifiedConnection.toJSON(e) : undefined;
            });
        } else {
            obj.connections = [];
        }
        if (message.clientConnectionPaths) {
            obj.clientConnectionPaths = message.clientConnectionPaths.map(function(e) {
                return e ? ConnectionPaths.toJSON(e) : undefined;
            });
        } else {
            obj.clientConnectionPaths = [];
        }
        message.nextConnectionSequence !== undefined && (obj.nextConnectionSequence = Math.round(message.nextConnectionSequence));
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_connections, _object_clientConnectionPaths;
        var message = createBaseGenesisState();
        message.connections = ((_object_connections = object.connections) === null || _object_connections === void 0 ? void 0 : _object_connections.map(function(e) {
            return IdentifiedConnection.fromPartial(e);
        })) || [];
        message.clientConnectionPaths = ((_object_clientConnectionPaths = object.clientConnectionPaths) === null || _object_clientConnectionPaths === void 0 ? void 0 : _object_clientConnectionPaths.map(function(e) {
            return ConnectionPaths.fromPartial(e);
        })) || [];
        var _object_nextConnectionSequence;
        message.nextConnectionSequence = (_object_nextConnectionSequence = object.nextConnectionSequence) !== null && _object_nextConnectionSequence !== void 0 ? _object_nextConnectionSequence : 0;
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
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
