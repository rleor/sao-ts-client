/* eslint-disable */ function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { ConsensusStateWithHeight, Height, IdentifiedClientState, Params } from "./client";
export var protobufPackage = "ibc.core.client.v1";
function createBaseQueryClientStateRequest() {
    return {
        clientId: ""
    };
}
export var QueryClientStateRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStateRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientId = reader.string();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClientStateRequest();
        var _object_clientId;
        message.clientId = (_object_clientId = object.clientId) !== null && _object_clientId !== void 0 ? _object_clientId : "";
        return message;
    }
};
function createBaseQueryClientStateResponse() {
    return {
        clientState: undefined,
        proof: new Uint8Array(),
        proofHeight: undefined
    };
}
export var QueryClientStateResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStateResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientState = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClientStateResponse();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        var _object_proof;
        message.proof = (_object_proof = object.proof) !== null && _object_proof !== void 0 ? _object_proof : new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    }
};
function createBaseQueryClientStatesRequest() {
    return {
        pagination: undefined
    };
}
export var QueryClientStatesRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStatesRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClientStatesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryClientStatesResponse() {
    return {
        clientStates: [],
        pagination: undefined
    };
}
export var QueryClientStatesResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.clientStates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStatesResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            clientStates: Array.isArray(object === null || object === void 0 ? void 0 : object.clientStates) ? object.clientStates.map(function(e) {
                return IdentifiedClientState.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.clientStates) {
            obj.clientStates = message.clientStates.map(function(e) {
                return e ? IdentifiedClientState.toJSON(e) : undefined;
            });
        } else {
            obj.clientStates = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_clientStates;
        var message = createBaseQueryClientStatesResponse();
        message.clientStates = ((_object_clientStates = object.clientStates) === null || _object_clientStates === void 0 ? void 0 : _object_clientStates.map(function(e) {
            return IdentifiedClientState.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryConsensusStateRequest() {
    return {
        clientId: "",
        revisionNumber: 0,
        revisionHeight: 0,
        latestHeight: false
    };
}
export var QueryConsensusStateRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.revisionNumber !== 0) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== 0) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            writer.uint32(32).bool(message.latestHeight);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStateRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.revisionHeight = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.latestHeight = reader.bool();
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
            revisionNumber: isSet(object.revisionNumber) ? Number(object.revisionNumber) : 0,
            revisionHeight: isSet(object.revisionHeight) ? Number(object.revisionHeight) : 0,
            latestHeight: isSet(object.latestHeight) ? Boolean(object.latestHeight) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.revisionNumber !== undefined && (obj.revisionNumber = Math.round(message.revisionNumber));
        message.revisionHeight !== undefined && (obj.revisionHeight = Math.round(message.revisionHeight));
        message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryConsensusStateRequest();
        var _object_clientId;
        message.clientId = (_object_clientId = object.clientId) !== null && _object_clientId !== void 0 ? _object_clientId : "";
        var _object_revisionNumber;
        message.revisionNumber = (_object_revisionNumber = object.revisionNumber) !== null && _object_revisionNumber !== void 0 ? _object_revisionNumber : 0;
        var _object_revisionHeight;
        message.revisionHeight = (_object_revisionHeight = object.revisionHeight) !== null && _object_revisionHeight !== void 0 ? _object_revisionHeight : 0;
        var _object_latestHeight;
        message.latestHeight = (_object_latestHeight = object.latestHeight) !== null && _object_latestHeight !== void 0 ? _object_latestHeight : false;
        return message;
    }
};
function createBaseQueryConsensusStateResponse() {
    return {
        consensusState: undefined,
        proof: new Uint8Array(),
        proofHeight: undefined
    };
}
export var QueryConsensusStateResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStateResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.consensusState = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryConsensusStateResponse();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        var _object_proof;
        message.proof = (_object_proof = object.proof) !== null && _object_proof !== void 0 ? _object_proof : new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    }
};
function createBaseQueryConsensusStatesRequest() {
    return {
        clientId: "",
        pagination: undefined
    };
}
export var QueryConsensusStatesRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStatesRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryConsensusStatesRequest();
        var _object_clientId;
        message.clientId = (_object_clientId = object.clientId) !== null && _object_clientId !== void 0 ? _object_clientId : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryConsensusStatesResponse() {
    return {
        consensusStates: [],
        pagination: undefined
    };
}
export var QueryConsensusStatesResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.consensusStates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStatesResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            consensusStates: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStates) ? object.consensusStates.map(function(e) {
                return ConsensusStateWithHeight.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.consensusStates) {
            obj.consensusStates = message.consensusStates.map(function(e) {
                return e ? ConsensusStateWithHeight.toJSON(e) : undefined;
            });
        } else {
            obj.consensusStates = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_consensusStates;
        var message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = ((_object_consensusStates = object.consensusStates) === null || _object_consensusStates === void 0 ? void 0 : _object_consensusStates.map(function(e) {
            return ConsensusStateWithHeight.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryConsensusStateHeightsRequest() {
    return {
        clientId: "",
        pagination: undefined
    };
}
export var QueryConsensusStateHeightsRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStateHeightsRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryConsensusStateHeightsRequest();
        var _object_clientId;
        message.clientId = (_object_clientId = object.clientId) !== null && _object_clientId !== void 0 ? _object_clientId : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryConsensusStateHeightsResponse() {
    return {
        consensusStateHeights: [],
        pagination: undefined
    };
}
export var QueryConsensusStateHeightsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.consensusStateHeights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Height.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStateHeightsResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.consensusStateHeights.push(Height.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            consensusStateHeights: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStateHeights) ? object.consensusStateHeights.map(function(e) {
                return Height.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.consensusStateHeights) {
            obj.consensusStateHeights = message.consensusStateHeights.map(function(e) {
                return e ? Height.toJSON(e) : undefined;
            });
        } else {
            obj.consensusStateHeights = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_consensusStateHeights;
        var message = createBaseQueryConsensusStateHeightsResponse();
        message.consensusStateHeights = ((_object_consensusStateHeights = object.consensusStateHeights) === null || _object_consensusStateHeights === void 0 ? void 0 : _object_consensusStateHeights.map(function(e) {
            return Height.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryClientStatusRequest() {
    return {
        clientId: ""
    };
}
export var QueryClientStatusRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStatusRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.clientId = reader.string();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClientStatusRequest();
        var _object_clientId;
        message.clientId = (_object_clientId = object.clientId) !== null && _object_clientId !== void 0 ? _object_clientId : "";
        return message;
    }
};
function createBaseQueryClientStatusResponse() {
    return {
        status: ""
    };
}
export var QueryClientStatusResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStatusResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.status = reader.string();
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
            status: isSet(object.status) ? String(object.status) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClientStatusResponse();
        var _object_status;
        message.status = (_object_status = object.status) !== null && _object_status !== void 0 ? _object_status : "";
        return message;
    }
};
function createBaseQueryClientParamsRequest() {
    return {};
}
export var QueryClientParamsRequest = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientParamsRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function fromJSON(_) {
        return {};
    },
    toJSON: function toJSON(_) {
        var obj = {};
        return obj;
    },
    fromPartial: function fromPartial(_) {
        var message = createBaseQueryClientParamsRequest();
        return message;
    }
};
function createBaseQueryClientParamsResponse() {
    return {
        params: undefined
    };
}
export var QueryClientParamsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientParamsResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClientParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
export var QueryUpgradedClientStateRequest = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedClientStateRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function fromJSON(_) {
        return {};
    },
    toJSON: function toJSON(_) {
        var obj = {};
        return obj;
    },
    fromPartial: function fromPartial(_) {
        var message = createBaseQueryUpgradedClientStateRequest();
        return message;
    }
};
function createBaseQueryUpgradedClientStateResponse() {
    return {
        upgradedClientState: undefined
    };
}
export var QueryUpgradedClientStateResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.upgradedClientState !== undefined) {
            Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedClientStateResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.upgradedClientState = Any.decode(reader, reader.uint32());
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
            upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryUpgradedClientStateResponse();
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
export var QueryUpgradedConsensusStateRequest = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedConsensusStateRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function fromJSON(_) {
        return {};
    },
    toJSON: function toJSON(_) {
        var obj = {};
        return obj;
    },
    fromPartial: function fromPartial(_) {
        var message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: undefined
    };
}
export var QueryUpgradedConsensusStateResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.upgradedConsensusState !== undefined) {
            Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedConsensusStateResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.upgradedConsensusState = Any.decode(reader, reader.uint32());
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
            upgradedConsensusState: isSet(object.upgradedConsensusState) ? Any.fromJSON(object.upgradedConsensusState) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = message.upgradedConsensusState ? Any.toJSON(message.upgradedConsensusState) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null ? Any.fromPartial(object.upgradedConsensusState) : undefined;
        return message;
    }
};
export var QueryClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function QueryClientImpl(rpc) {
        _classCallCheck(this, QueryClientImpl);
        this.rpc = rpc;
        this.ClientState = this.ClientState.bind(this);
        this.ClientStates = this.ClientStates.bind(this);
        this.ConsensusState = this.ConsensusState.bind(this);
        this.ConsensusStates = this.ConsensusStates.bind(this);
        this.ConsensusStateHeights = this.ConsensusStateHeights.bind(this);
        this.ClientStatus = this.ClientStatus.bind(this);
        this.ClientParams = this.ClientParams.bind(this);
        this.UpgradedClientState = this.UpgradedClientState.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    }
    var _proto = QueryClientImpl.prototype;
    _proto.ClientState = function ClientState(request) {
        var data = QueryClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
        return promise.then(function(data) {
            return QueryClientStateResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ClientStates = function ClientStates(request) {
        var data = QueryClientStatesRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
        return promise.then(function(data) {
            return QueryClientStatesResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ConsensusState = function ConsensusState(request) {
        var data = QueryConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
        return promise.then(function(data) {
            return QueryConsensusStateResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ConsensusStates = function ConsensusStates(request) {
        var data = QueryConsensusStatesRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
        return promise.then(function(data) {
            return QueryConsensusStatesResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ConsensusStateHeights = function ConsensusStateHeights(request) {
        var data = QueryConsensusStateHeightsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
        return promise.then(function(data) {
            return QueryConsensusStateHeightsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ClientStatus = function ClientStatus(request) {
        var data = QueryClientStatusRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
        return promise.then(function(data) {
            return QueryClientStatusResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ClientParams = function ClientParams(request) {
        var data = QueryClientParamsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
        return promise.then(function(data) {
            return QueryClientParamsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpgradedClientState = function UpgradedClientState(request) {
        var data = QueryUpgradedClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
        return promise.then(function(data) {
            return QueryUpgradedClientStateResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpgradedConsensusState = function UpgradedConsensusState(request) {
        var data = QueryUpgradedConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
        return promise.then(function(data) {
            return QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data));
        });
    };
    return QueryClientImpl;
}();
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
