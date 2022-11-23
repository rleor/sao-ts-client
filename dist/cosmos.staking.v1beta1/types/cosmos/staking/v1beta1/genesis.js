/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Delegation, Params, Redelegation, UnbondingDelegation, Validator } from "./staking";
export var protobufPackage = "cosmos.staking.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        lastTotalPower: new Uint8Array(),
        lastValidatorPowers: [],
        validators: [],
        delegations: [],
        unbondingDelegations: [],
        redelegations: [],
        exported: false
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastTotalPower.length !== 0) {
            writer.uint32(18).bytes(message.lastTotalPower);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.lastValidatorPowers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
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
            for(var _iterator1 = message.validators[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Validator.encode(v1, writer.uint32(34).fork()).ldelim();
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
            for(var _iterator2 = message.delegations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                Delegation.encode(v2, writer.uint32(42).fork()).ldelim();
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
        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
        try {
            for(var _iterator3 = message.unbondingDelegations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                var v3 = _step3.value;
                UnbondingDelegation.encode(v3, writer.uint32(50).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                }
            } finally{
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
        try {
            for(var _iterator4 = message.redelegations[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var v4 = _step4.value;
                Redelegation.encode(v4, writer.uint32(58).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                }
            } finally{
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
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
                    message.lastTotalPower = reader.bytes();
                    break;
                case 3:
                    message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
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
            lastTotalPower: isSet(object.lastTotalPower) ? bytesFromBase64(object.lastTotalPower) : new Uint8Array(),
            lastValidatorPowers: Array.isArray(object === null || object === void 0 ? void 0 : object.lastValidatorPowers) ? object.lastValidatorPowers.map(function(e) {
                return LastValidatorPower.fromJSON(e);
            }) : [],
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function(e) {
                return Validator.fromJSON(e);
            }) : [],
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations) ? object.delegations.map(function(e) {
                return Delegation.fromJSON(e);
            }) : [],
            unbondingDelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingDelegations) ? object.unbondingDelegations.map(function(e) {
                return UnbondingDelegation.fromJSON(e);
            }) : [],
            redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations) ? object.redelegations.map(function(e) {
                return Redelegation.fromJSON(e);
            }) : [],
            exported: isSet(object.exported) ? Boolean(object.exported) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.lastTotalPower !== undefined && (obj.lastTotalPower = base64FromBytes(message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array()));
        if (message.lastValidatorPowers) {
            obj.lastValidatorPowers = message.lastValidatorPowers.map(function(e) {
                return e ? LastValidatorPower.toJSON(e) : undefined;
            });
        } else {
            obj.lastValidatorPowers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(function(e) {
                return e ? Validator.toJSON(e) : undefined;
            });
        } else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(function(e) {
                return e ? Delegation.toJSON(e) : undefined;
            });
        } else {
            obj.delegations = [];
        }
        if (message.unbondingDelegations) {
            obj.unbondingDelegations = message.unbondingDelegations.map(function(e) {
                return e ? UnbondingDelegation.toJSON(e) : undefined;
            });
        } else {
            obj.unbondingDelegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(function(e) {
                return e ? Redelegation.toJSON(e) : undefined;
            });
        } else {
            obj.redelegations = [];
        }
        message.exported !== undefined && (obj.exported = message.exported);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_lastValidatorPowers, _object_validators, _object_delegations, _object_unbondingDelegations, _object_redelegations;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        var _object_lastTotalPower;
        message.lastTotalPower = (_object_lastTotalPower = object.lastTotalPower) !== null && _object_lastTotalPower !== void 0 ? _object_lastTotalPower : new Uint8Array();
        message.lastValidatorPowers = ((_object_lastValidatorPowers = object.lastValidatorPowers) === null || _object_lastValidatorPowers === void 0 ? void 0 : _object_lastValidatorPowers.map(function(e) {
            return LastValidatorPower.fromPartial(e);
        })) || [];
        message.validators = ((_object_validators = object.validators) === null || _object_validators === void 0 ? void 0 : _object_validators.map(function(e) {
            return Validator.fromPartial(e);
        })) || [];
        message.delegations = ((_object_delegations = object.delegations) === null || _object_delegations === void 0 ? void 0 : _object_delegations.map(function(e) {
            return Delegation.fromPartial(e);
        })) || [];
        message.unbondingDelegations = ((_object_unbondingDelegations = object.unbondingDelegations) === null || _object_unbondingDelegations === void 0 ? void 0 : _object_unbondingDelegations.map(function(e) {
            return UnbondingDelegation.fromPartial(e);
        })) || [];
        message.redelegations = ((_object_redelegations = object.redelegations) === null || _object_redelegations === void 0 ? void 0 : _object_redelegations.map(function(e) {
            return Redelegation.fromPartial(e);
        })) || [];
        var _object_exported;
        message.exported = (_object_exported = object.exported) !== null && _object_exported !== void 0 ? _object_exported : false;
        return message;
    }
};
function createBaseLastValidatorPower() {
    return {
        address: "",
        power: 0
    };
}
export var LastValidatorPower = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== 0) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLastValidatorPower();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = longToNumber(reader.int64());
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
            power: isSet(object.power) ? Number(object.power) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = Math.round(message.power));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseLastValidatorPower();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        var _object_power;
        message.power = (_object_power = object.power) !== null && _object_power !== void 0 ? _object_power : 0;
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
