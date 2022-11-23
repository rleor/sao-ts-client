/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
export var protobufPackage = "tendermint.types";
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined
    };
}
export var ConsensusParams = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.block = BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = VersionParams.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
            evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
            version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
        return message;
    }
};
function createBaseBlockParams() {
    return {
        maxBytes: 0,
        maxGas: 0,
        timeIotaMs: 0
    };
}
export var BlockParams = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.maxBytes !== 0) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== 0) {
            writer.uint32(16).int64(message.maxGas);
        }
        if (message.timeIotaMs !== 0) {
            writer.uint32(24).int64(message.timeIotaMs);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.maxBytes = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxGas = longToNumber(reader.int64());
                    break;
                case 3:
                    message.timeIotaMs = longToNumber(reader.int64());
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
            maxBytes: isSet(object.maxBytes) ? Number(object.maxBytes) : 0,
            maxGas: isSet(object.maxGas) ? Number(object.maxGas) : 0,
            timeIotaMs: isSet(object.timeIotaMs) ? Number(object.timeIotaMs) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.maxBytes !== undefined && (obj.maxBytes = Math.round(message.maxBytes));
        message.maxGas !== undefined && (obj.maxGas = Math.round(message.maxGas));
        message.timeIotaMs !== undefined && (obj.timeIotaMs = Math.round(message.timeIotaMs));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseBlockParams();
        var _object_maxBytes;
        message.maxBytes = (_object_maxBytes = object.maxBytes) !== null && _object_maxBytes !== void 0 ? _object_maxBytes : 0;
        var _object_maxGas;
        message.maxGas = (_object_maxGas = object.maxGas) !== null && _object_maxGas !== void 0 ? _object_maxGas : 0;
        var _object_timeIotaMs;
        message.timeIotaMs = (_object_timeIotaMs = object.timeIotaMs) !== null && _object_timeIotaMs !== void 0 ? _object_timeIotaMs : 0;
        return message;
    }
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: 0,
        maxAgeDuration: undefined,
        maxBytes: 0
    };
}
export var EvidenceParams = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.maxAgeNumBlocks !== 0) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxBytes !== 0) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidenceParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.maxAgeNumBlocks = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxAgeDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = longToNumber(reader.int64());
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
            maxAgeNumBlocks: isSet(object.maxAgeNumBlocks) ? Number(object.maxAgeNumBlocks) : 0,
            maxAgeDuration: isSet(object.maxAgeDuration) ? Duration.fromJSON(object.maxAgeDuration) : undefined,
            maxBytes: isSet(object.maxBytes) ? Number(object.maxBytes) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.maxAgeNumBlocks !== undefined && (obj.maxAgeNumBlocks = Math.round(message.maxAgeNumBlocks));
        message.maxAgeDuration !== undefined && (obj.maxAgeDuration = message.maxAgeDuration ? Duration.toJSON(message.maxAgeDuration) : undefined);
        message.maxBytes !== undefined && (obj.maxBytes = Math.round(message.maxBytes));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEvidenceParams();
        var _object_maxAgeNumBlocks;
        message.maxAgeNumBlocks = (_object_maxAgeNumBlocks = object.maxAgeNumBlocks) !== null && _object_maxAgeNumBlocks !== void 0 ? _object_maxAgeNumBlocks : 0;
        message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : undefined;
        var _object_maxBytes;
        message.maxBytes = (_object_maxBytes = object.maxBytes) !== null && _object_maxBytes !== void 0 ? _object_maxBytes : 0;
        return message;
    }
};
function createBaseValidatorParams() {
    return {
        pubKeyTypes: []
    };
}
export var ValidatorParams = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.pubKeyTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(10).string(v);
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
        var message = createBaseValidatorParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pubKeyTypes.push(reader.string());
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
            pubKeyTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.pubKeyTypes) ? object.pubKeyTypes.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.pubKeyTypes) {
            obj.pubKeyTypes = message.pubKeyTypes.map(function(e) {
                return e;
            });
        } else {
            obj.pubKeyTypes = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_pubKeyTypes;
        var message = createBaseValidatorParams();
        message.pubKeyTypes = ((_object_pubKeyTypes = object.pubKeyTypes) === null || _object_pubKeyTypes === void 0 ? void 0 : _object_pubKeyTypes.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseVersionParams() {
    return {
        appVersion: 0
    };
}
export var VersionParams = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.appVersion !== 0) {
            writer.uint32(8).uint64(message.appVersion);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVersionParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.appVersion = longToNumber(reader.uint64());
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
            appVersion: isSet(object.appVersion) ? Number(object.appVersion) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.appVersion !== undefined && (obj.appVersion = Math.round(message.appVersion));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseVersionParams();
        var _object_appVersion;
        message.appVersion = (_object_appVersion = object.appVersion) !== null && _object_appVersion !== void 0 ? _object_appVersion : 0;
        return message;
    }
};
function createBaseHashedParams() {
    return {
        blockMaxBytes: 0,
        blockMaxGas: 0
    };
}
export var HashedParams = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.blockMaxBytes !== 0) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (message.blockMaxGas !== 0) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHashedParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.blockMaxBytes = longToNumber(reader.int64());
                    break;
                case 2:
                    message.blockMaxGas = longToNumber(reader.int64());
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
            blockMaxBytes: isSet(object.blockMaxBytes) ? Number(object.blockMaxBytes) : 0,
            blockMaxGas: isSet(object.blockMaxGas) ? Number(object.blockMaxGas) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.blockMaxBytes !== undefined && (obj.blockMaxBytes = Math.round(message.blockMaxBytes));
        message.blockMaxGas !== undefined && (obj.blockMaxGas = Math.round(message.blockMaxGas));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseHashedParams();
        var _object_blockMaxBytes;
        message.blockMaxBytes = (_object_blockMaxBytes = object.blockMaxBytes) !== null && _object_blockMaxBytes !== void 0 ? _object_blockMaxBytes : 0;
        var _object_blockMaxGas;
        message.blockMaxGas = (_object_blockMaxGas = object.blockMaxGas) !== null && _object_blockMaxGas !== void 0 ? _object_blockMaxGas : 0;
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
