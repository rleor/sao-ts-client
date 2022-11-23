/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClientConsensusStates, IdentifiedClientState, Params } from "./client";
export var protobufPackage = "ibc.core.client.v1";
function createBaseGenesisState() {
    return {
        clients: [],
        clientsConsensus: [],
        clientsMetadata: [],
        params: undefined,
        createLocalhost: false,
        nextClientSequence: 0
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.clients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
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
            for(var _iterator1 = message.clientsConsensus[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                ClientConsensusStates.encode(v1, writer.uint32(18).fork()).ldelim();
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
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = message.clientsMetadata[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                IdentifiedGenesisMetadata.encode(v2, writer.uint32(26).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.createLocalhost === true) {
            writer.uint32(40).bool(message.createLocalhost);
        }
        if (message.nextClientSequence !== 0) {
            writer.uint32(48).uint64(message.nextClientSequence);
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
                    message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createLocalhost = reader.bool();
                    break;
                case 6:
                    message.nextClientSequence = longToNumber(reader.uint64());
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
            clients: Array.isArray(object === null || object === void 0 ? void 0 : object.clients) ? object.clients.map(function(e) {
                return IdentifiedClientState.fromJSON(e);
            }) : [],
            clientsConsensus: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsConsensus) ? object.clientsConsensus.map(function(e) {
                return ClientConsensusStates.fromJSON(e);
            }) : [],
            clientsMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsMetadata) ? object.clientsMetadata.map(function(e) {
                return IdentifiedGenesisMetadata.fromJSON(e);
            }) : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            createLocalhost: isSet(object.createLocalhost) ? Boolean(object.createLocalhost) : false,
            nextClientSequence: isSet(object.nextClientSequence) ? Number(object.nextClientSequence) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(function(e) {
                return e ? IdentifiedClientState.toJSON(e) : undefined;
            });
        } else {
            obj.clients = [];
        }
        if (message.clientsConsensus) {
            obj.clientsConsensus = message.clientsConsensus.map(function(e) {
                return e ? ClientConsensusStates.toJSON(e) : undefined;
            });
        } else {
            obj.clientsConsensus = [];
        }
        if (message.clientsMetadata) {
            obj.clientsMetadata = message.clientsMetadata.map(function(e) {
                return e ? IdentifiedGenesisMetadata.toJSON(e) : undefined;
            });
        } else {
            obj.clientsMetadata = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.createLocalhost !== undefined && (obj.createLocalhost = message.createLocalhost);
        message.nextClientSequence !== undefined && (obj.nextClientSequence = Math.round(message.nextClientSequence));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_clients, _object_clientsConsensus, _object_clientsMetadata;
        var message = createBaseGenesisState();
        message.clients = ((_object_clients = object.clients) === null || _object_clients === void 0 ? void 0 : _object_clients.map(function(e) {
            return IdentifiedClientState.fromPartial(e);
        })) || [];
        message.clientsConsensus = ((_object_clientsConsensus = object.clientsConsensus) === null || _object_clientsConsensus === void 0 ? void 0 : _object_clientsConsensus.map(function(e) {
            return ClientConsensusStates.fromPartial(e);
        })) || [];
        message.clientsMetadata = ((_object_clientsMetadata = object.clientsMetadata) === null || _object_clientsMetadata === void 0 ? void 0 : _object_clientsMetadata.map(function(e) {
            return IdentifiedGenesisMetadata.fromPartial(e);
        })) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        var _object_createLocalhost;
        message.createLocalhost = (_object_createLocalhost = object.createLocalhost) !== null && _object_createLocalhost !== void 0 ? _object_createLocalhost : false;
        var _object_nextClientSequence;
        message.nextClientSequence = (_object_nextClientSequence = object.nextClientSequence) !== null && _object_nextClientSequence !== void 0 ? _object_nextClientSequence : 0;
        return message;
    }
};
function createBaseGenesisMetadata() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export var GenesisMetadata = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisMetadata();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseGenesisMetadata();
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : new Uint8Array();
        var _object_value;
        message.value = (_object_value = object.value) !== null && _object_value !== void 0 ? _object_value : new Uint8Array();
        return message;
    }
};
function createBaseIdentifiedGenesisMetadata() {
    return {
        clientId: "",
        clientMetadata: []
    };
}
export var IdentifiedGenesisMetadata = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.clientMetadata[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
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
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIdentifiedGenesisMetadata();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            clientMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientMetadata) ? object.clientMetadata.map(function(e) {
                return GenesisMetadata.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.clientMetadata) {
            obj.clientMetadata = message.clientMetadata.map(function(e) {
                return e ? GenesisMetadata.toJSON(e) : undefined;
            });
        } else {
            obj.clientMetadata = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_clientMetadata;
        var message = createBaseIdentifiedGenesisMetadata();
        var _object_clientId;
        message.clientId = (_object_clientId = object.clientId) !== null && _object_clientId !== void 0 ? _object_clientId : "";
        message.clientMetadata = ((_object_clientMetadata = object.clientMetadata) === null || _object_clientMetadata === void 0 ? void 0 : _object_clientMetadata.map(function(e) {
            return GenesisMetadata.fromPartial(e);
        })) || [];
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
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for(var i = 0; i < bin.length; ++i){
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        var bin = [];
        arr.forEach(function(byte) {
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
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
