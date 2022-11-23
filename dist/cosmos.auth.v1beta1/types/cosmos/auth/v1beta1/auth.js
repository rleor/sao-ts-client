/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export var protobufPackage = "cosmos.auth.v1beta1";
function createBaseBaseAccount() {
    return {
        address: "",
        pubKey: undefined,
        accountNumber: 0,
        sequence: 0
    };
}
export var BaseAccount = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountNumber !== 0) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (message.sequence !== 0) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBaseAccount();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountNumber = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.sequence = longToNumber(reader.uint64());
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
            address: isSet(object.address) ? String(object.address) : "",
            pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
            accountNumber: isSet(object.accountNumber) ? Number(object.accountNumber) : 0,
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
        message.accountNumber !== undefined && (obj.accountNumber = Math.round(message.accountNumber));
        message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseBaseAccount();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
        var _object_accountNumber;
        message.accountNumber = (_object_accountNumber = object.accountNumber) !== null && _object_accountNumber !== void 0 ? _object_accountNumber : 0;
        var _object_sequence;
        message.sequence = (_object_sequence = object.sequence) !== null && _object_sequence !== void 0 ? _object_sequence : 0;
        return message;
    }
};
function createBaseModuleAccount() {
    return {
        baseAccount: undefined,
        name: "",
        permissions: []
    };
}
export var ModuleAccount = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.permissions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(26).string(v);
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
        var message = createBaseModuleAccount();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
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
            baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
            name: isSet(object.name) ? String(object.name) : "",
            permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map(function(e) {
                return e;
            });
        } else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_permissions;
        var message = createBaseModuleAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        message.permissions = ((_object_permissions = object.permissions) === null || _object_permissions === void 0 ? void 0 : _object_permissions.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseParams() {
    return {
        maxMemoCharacters: 0,
        txSigLimit: 0,
        txSizeCostPerByte: 0,
        sigVerifyCostEd25519: 0,
        sigVerifyCostSecp256k1: 0
    };
}
export var Params = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.maxMemoCharacters !== 0) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (message.txSigLimit !== 0) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (message.txSizeCostPerByte !== 0) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (message.sigVerifyCostEd25519 !== 0) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (message.sigVerifyCostSecp256k1 !== 0) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.maxMemoCharacters = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.txSigLimit = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.txSizeCostPerByte = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = longToNumber(reader.uint64());
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
            maxMemoCharacters: isSet(object.maxMemoCharacters) ? Number(object.maxMemoCharacters) : 0,
            txSigLimit: isSet(object.txSigLimit) ? Number(object.txSigLimit) : 0,
            txSizeCostPerByte: isSet(object.txSizeCostPerByte) ? Number(object.txSizeCostPerByte) : 0,
            sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519) ? Number(object.sigVerifyCostEd25519) : 0,
            sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1) ? Number(object.sigVerifyCostSecp256k1) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.maxMemoCharacters !== undefined && (obj.maxMemoCharacters = Math.round(message.maxMemoCharacters));
        message.txSigLimit !== undefined && (obj.txSigLimit = Math.round(message.txSigLimit));
        message.txSizeCostPerByte !== undefined && (obj.txSizeCostPerByte = Math.round(message.txSizeCostPerByte));
        message.sigVerifyCostEd25519 !== undefined && (obj.sigVerifyCostEd25519 = Math.round(message.sigVerifyCostEd25519));
        message.sigVerifyCostSecp256k1 !== undefined && (obj.sigVerifyCostSecp256k1 = Math.round(message.sigVerifyCostSecp256k1));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseParams();
        var _object_maxMemoCharacters;
        message.maxMemoCharacters = (_object_maxMemoCharacters = object.maxMemoCharacters) !== null && _object_maxMemoCharacters !== void 0 ? _object_maxMemoCharacters : 0;
        var _object_txSigLimit;
        message.txSigLimit = (_object_txSigLimit = object.txSigLimit) !== null && _object_txSigLimit !== void 0 ? _object_txSigLimit : 0;
        var _object_txSizeCostPerByte;
        message.txSizeCostPerByte = (_object_txSizeCostPerByte = object.txSizeCostPerByte) !== null && _object_txSizeCostPerByte !== void 0 ? _object_txSizeCostPerByte : 0;
        var _object_sigVerifyCostEd25519;
        message.sigVerifyCostEd25519 = (_object_sigVerifyCostEd25519 = object.sigVerifyCostEd25519) !== null && _object_sigVerifyCostEd25519 !== void 0 ? _object_sigVerifyCostEd25519 : 0;
        var _object_sigVerifyCostSecp256k1;
        message.sigVerifyCostSecp256k1 = (_object_sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1) !== null && _object_sigVerifyCostSecp256k1 !== void 0 ? _object_sigVerifyCostSecp256k1 : 0;
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
