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
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Header } from "../../../tendermint/types/types";
import { Coin } from "../../base/v1beta1/coin";
export var protobufPackage = "cosmos.staking.v1beta1";
export var BondStatus;
(function(BondStatus) {
    BondStatus[BondStatus[/** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */ "BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    BondStatus[BondStatus[/** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */ "BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    BondStatus[BondStatus[/** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */ "BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    BondStatus[BondStatus[/** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */ "BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (BondStatus = {}));
export function bondStatusFromJSON(object) {
    switch(object){
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
export function bondStatusToJSON(object) {
    switch(object){
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseHistoricalInfo() {
    return {
        header: undefined,
        valset: []
    };
}
export var HistoricalInfo = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.valset[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Validator.encode(v, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseHistoricalInfo();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(Validator.decode(reader, reader.uint32()));
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
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object === null || object === void 0 ? void 0 : object.valset) ? object.valset.map(function(e) {
                return Validator.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map(function(e) {
                return e ? Validator.toJSON(e) : undefined;
            });
        } else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_valset;
        var message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.valset = ((_object_valset = object.valset) === null || _object_valset === void 0 ? void 0 : _object_valset.map(function(e) {
            return Validator.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseCommissionRates() {
    return {
        rate: "",
        maxRate: "",
        maxChangeRate: ""
    };
}
export var CommissionRates = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.rate !== "") {
            writer.uint32(10).string(message.rate);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(message.maxRate);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(message.maxChangeRate);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommissionRates();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.rate = reader.string();
                    break;
                case 2:
                    message.maxRate = reader.string();
                    break;
                case 3:
                    message.maxChangeRate = reader.string();
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
            rate: isSet(object.rate) ? String(object.rate) : "",
            maxRate: isSet(object.maxRate) ? String(object.maxRate) : "",
            maxChangeRate: isSet(object.maxChangeRate) ? String(object.maxChangeRate) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.rate !== undefined && (obj.rate = message.rate);
        message.maxRate !== undefined && (obj.maxRate = message.maxRate);
        message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseCommissionRates();
        var _object_rate;
        message.rate = (_object_rate = object.rate) !== null && _object_rate !== void 0 ? _object_rate : "";
        var _object_maxRate;
        message.maxRate = (_object_maxRate = object.maxRate) !== null && _object_maxRate !== void 0 ? _object_maxRate : "";
        var _object_maxChangeRate;
        message.maxChangeRate = (_object_maxChangeRate = object.maxChangeRate) !== null && _object_maxChangeRate !== void 0 ? _object_maxChangeRate : "";
        return message;
    }
};
function createBaseCommission() {
    return {
        commissionRates: undefined,
        updateTime: undefined
    };
}
export var Commission = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.commissionRates !== undefined) {
            CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommission();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.commissionRates = CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            commissionRates: isSet(object.commissionRates) ? CommissionRates.fromJSON(object.commissionRates) : undefined,
            updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.commissionRates !== undefined && (obj.commissionRates = message.commissionRates ? CommissionRates.toJSON(message.commissionRates) : undefined);
        message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseCommission();
        message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : undefined;
        var _object_updateTime;
        message.updateTime = (_object_updateTime = object.updateTime) !== null && _object_updateTime !== void 0 ? _object_updateTime : undefined;
        return message;
    }
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        securityContact: "",
        details: ""
    };
}
export var Description = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescription();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
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
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            website: isSet(object.website) ? String(object.website) : "",
            securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
            details: isSet(object.details) ? String(object.details) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.securityContact !== undefined && (obj.securityContact = message.securityContact);
        message.details !== undefined && (obj.details = message.details);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDescription();
        var _object_moniker;
        message.moniker = (_object_moniker = object.moniker) !== null && _object_moniker !== void 0 ? _object_moniker : "";
        var _object_identity;
        message.identity = (_object_identity = object.identity) !== null && _object_identity !== void 0 ? _object_identity : "";
        var _object_website;
        message.website = (_object_website = object.website) !== null && _object_website !== void 0 ? _object_website : "";
        var _object_securityContact;
        message.securityContact = (_object_securityContact = object.securityContact) !== null && _object_securityContact !== void 0 ? _object_securityContact : "";
        var _object_details;
        message.details = (_object_details = object.details) !== null && _object_details !== void 0 ? _object_details : "";
        return message;
    }
};
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: undefined,
        unbondingHeight: 0,
        unbondingTime: undefined,
        commission: undefined,
        minSelfDelegation: ""
    };
}
export var Validator = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbondingHeight !== 0) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = reader.string();
                    break;
                case 7:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = longToNumber(reader.int64());
                    break;
                case 9:
                    message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
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
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            unbondingHeight: isSet(object.unbondingHeight) ? Number(object.unbondingHeight) : 0,
            unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
            commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.unbondingHeight !== undefined && (obj.unbondingHeight = Math.round(message.unbondingHeight));
        message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseValidator();
        var _object_operatorAddress;
        message.operatorAddress = (_object_operatorAddress = object.operatorAddress) !== null && _object_operatorAddress !== void 0 ? _object_operatorAddress : "";
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
        var _object_jailed;
        message.jailed = (_object_jailed = object.jailed) !== null && _object_jailed !== void 0 ? _object_jailed : false;
        var _object_status;
        message.status = (_object_status = object.status) !== null && _object_status !== void 0 ? _object_status : 0;
        var _object_tokens;
        message.tokens = (_object_tokens = object.tokens) !== null && _object_tokens !== void 0 ? _object_tokens : "";
        var _object_delegatorShares;
        message.delegatorShares = (_object_delegatorShares = object.delegatorShares) !== null && _object_delegatorShares !== void 0 ? _object_delegatorShares : "";
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        var _object_unbondingHeight;
        message.unbondingHeight = (_object_unbondingHeight = object.unbondingHeight) !== null && _object_unbondingHeight !== void 0 ? _object_unbondingHeight : 0;
        var _object_unbondingTime;
        message.unbondingTime = (_object_unbondingTime = object.unbondingTime) !== null && _object_unbondingTime !== void 0 ? _object_unbondingTime : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
        var _object_minSelfDelegation;
        message.minSelfDelegation = (_object_minSelfDelegation = object.minSelfDelegation) !== null && _object_minSelfDelegation !== void 0 ? _object_minSelfDelegation : "";
        return message;
    }
};
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
export var ValAddresses = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.addresses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
        var message = createBaseValAddresses();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.addresses.push(reader.string());
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
            addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(function(e) {
                return e;
            });
        } else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_addresses;
        var message = createBaseValAddresses();
        message.addresses = ((_object_addresses = object.addresses) === null || _object_addresses === void 0 ? void 0 : _object_addresses.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseDVPair() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
export var DVPair = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDVPair();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDVPair();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        return message;
    }
};
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
export var DVPairs = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DVPair.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseDVPairs();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pairs.push(DVPair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map(function(e) {
                return DVPair.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(function(e) {
                return e ? DVPair.toJSON(e) : undefined;
            });
        } else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_pairs;
        var message = createBaseDVPairs();
        message.pairs = ((_object_pairs = object.pairs) === null || _object_pairs === void 0 ? void 0 : _object_pairs.map(function(e) {
            return DVPair.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseDVVTriplet() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: ""
    };
}
export var DVVTriplet = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDVVTriplet();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDVVTriplet();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorSrcAddress;
        message.validatorSrcAddress = (_object_validatorSrcAddress = object.validatorSrcAddress) !== null && _object_validatorSrcAddress !== void 0 ? _object_validatorSrcAddress : "";
        var _object_validatorDstAddress;
        message.validatorDstAddress = (_object_validatorDstAddress = object.validatorDstAddress) !== null && _object_validatorDstAddress !== void 0 ? _object_validatorDstAddress : "";
        return message;
    }
};
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
export var DVVTriplets = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.triplets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseDVVTriplets();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
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
            triplets: Array.isArray(object === null || object === void 0 ? void 0 : object.triplets) ? object.triplets.map(function(e) {
                return DVVTriplet.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(function(e) {
                return e ? DVVTriplet.toJSON(e) : undefined;
            });
        } else {
            obj.triplets = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_triplets;
        var message = createBaseDVVTriplets();
        message.triplets = ((_object_triplets = object.triplets) === null || _object_triplets === void 0 ? void 0 : _object_triplets.map(function(e) {
            return DVVTriplet.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        shares: ""
    };
}
export var Delegation = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegation();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.shares = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            shares: isSet(object.shares) ? String(object.shares) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.shares !== undefined && (obj.shares = message.shares);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDelegation();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        var _object_shares;
        message.shares = (_object_shares = object.shares) !== null && _object_shares !== void 0 ? _object_shares : "";
        return message;
    }
};
function createBaseUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        entries: []
    };
}
export var UnbondingDelegation = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
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
        var message = createBaseUnbondingDelegation();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function(e) {
                return UnbondingDelegationEntry.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        if (message.entries) {
            obj.entries = message.entries.map(function(e) {
                return e ? UnbondingDelegationEntry.toJSON(e) : undefined;
            });
        } else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_entries;
        var message = createBaseUnbondingDelegation();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.entries = ((_object_entries = object.entries) === null || _object_entries === void 0 ? void 0 : _object_entries.map(function(e) {
            return UnbondingDelegationEntry.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: 0,
        completionTime: undefined,
        initialBalance: "",
        balance: ""
    };
}
export var UnbondingDelegationEntry = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creationHeight !== 0) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingDelegationEntry();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creationHeight = longToNumber(reader.int64());
                    break;
                case 2:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
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
            creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
            initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
            balance: isSet(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseUnbondingDelegationEntry();
        var _object_creationHeight;
        message.creationHeight = (_object_creationHeight = object.creationHeight) !== null && _object_creationHeight !== void 0 ? _object_creationHeight : 0;
        var _object_completionTime;
        message.completionTime = (_object_completionTime = object.completionTime) !== null && _object_completionTime !== void 0 ? _object_completionTime : undefined;
        var _object_initialBalance;
        message.initialBalance = (_object_initialBalance = object.initialBalance) !== null && _object_initialBalance !== void 0 ? _object_initialBalance : "";
        var _object_balance;
        message.balance = (_object_balance = object.balance) !== null && _object_balance !== void 0 ? _object_balance : "";
        return message;
    }
};
function createBaseRedelegationEntry() {
    return {
        creationHeight: 0,
        completionTime: undefined,
        initialBalance: "",
        sharesDst: ""
    };
}
export var RedelegationEntry = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creationHeight !== 0) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(message.sharesDst);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegationEntry();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creationHeight = longToNumber(reader.int64());
                    break;
                case 2:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = reader.string();
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
            creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
            initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
            sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
        message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseRedelegationEntry();
        var _object_creationHeight;
        message.creationHeight = (_object_creationHeight = object.creationHeight) !== null && _object_creationHeight !== void 0 ? _object_creationHeight : 0;
        var _object_completionTime;
        message.completionTime = (_object_completionTime = object.completionTime) !== null && _object_completionTime !== void 0 ? _object_completionTime : undefined;
        var _object_initialBalance;
        message.initialBalance = (_object_initialBalance = object.initialBalance) !== null && _object_initialBalance !== void 0 ? _object_initialBalance : "";
        var _object_sharesDst;
        message.sharesDst = (_object_sharesDst = object.sharesDst) !== null && _object_sharesDst !== void 0 ? _object_sharesDst : "";
        return message;
    }
};
function createBaseRedelegation() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        entries: []
    };
}
export var Redelegation = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
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
        var message = createBaseRedelegation();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function(e) {
                return RedelegationEntry.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
        if (message.entries) {
            obj.entries = message.entries.map(function(e) {
                return e ? RedelegationEntry.toJSON(e) : undefined;
            });
        } else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_entries;
        var message = createBaseRedelegation();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorSrcAddress;
        message.validatorSrcAddress = (_object_validatorSrcAddress = object.validatorSrcAddress) !== null && _object_validatorSrcAddress !== void 0 ? _object_validatorSrcAddress : "";
        var _object_validatorDstAddress;
        message.validatorDstAddress = (_object_validatorDstAddress = object.validatorDstAddress) !== null && _object_validatorDstAddress !== void 0 ? _object_validatorDstAddress : "";
        message.entries = ((_object_entries = object.entries) === null || _object_entries === void 0 ? void 0 : _object_entries.map(function(e) {
            return RedelegationEntry.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseParams() {
    return {
        unbondingTime: undefined,
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: "",
        minCommissionRate: ""
    };
}
export var Params = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.unbondingTime !== undefined) {
            Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        if (message.minCommissionRate !== "") {
            writer.uint32(50).string(message.minCommissionRate);
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
                    message.unbondingTime = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxValidators = reader.uint32();
                    break;
                case 3:
                    message.maxEntries = reader.uint32();
                    break;
                case 4:
                    message.historicalEntries = reader.uint32();
                    break;
                case 5:
                    message.bondDenom = reader.string();
                    break;
                case 6:
                    message.minCommissionRate = reader.string();
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
            unbondingTime: isSet(object.unbondingTime) ? Duration.fromJSON(object.unbondingTime) : undefined,
            maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
            maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
            historicalEntries: isSet(object.historicalEntries) ? Number(object.historicalEntries) : 0,
            bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
            minCommissionRate: isSet(object.minCommissionRate) ? String(object.minCommissionRate) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime ? Duration.toJSON(message.unbondingTime) : undefined);
        message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
        message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
        message.historicalEntries !== undefined && (obj.historicalEntries = Math.round(message.historicalEntries));
        message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
        message.minCommissionRate !== undefined && (obj.minCommissionRate = message.minCommissionRate);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseParams();
        message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Duration.fromPartial(object.unbondingTime) : undefined;
        var _object_maxValidators;
        message.maxValidators = (_object_maxValidators = object.maxValidators) !== null && _object_maxValidators !== void 0 ? _object_maxValidators : 0;
        var _object_maxEntries;
        message.maxEntries = (_object_maxEntries = object.maxEntries) !== null && _object_maxEntries !== void 0 ? _object_maxEntries : 0;
        var _object_historicalEntries;
        message.historicalEntries = (_object_historicalEntries = object.historicalEntries) !== null && _object_historicalEntries !== void 0 ? _object_historicalEntries : 0;
        var _object_bondDenom;
        message.bondDenom = (_object_bondDenom = object.bondDenom) !== null && _object_bondDenom !== void 0 ? _object_bondDenom : "";
        var _object_minCommissionRate;
        message.minCommissionRate = (_object_minCommissionRate = object.minCommissionRate) !== null && _object_minCommissionRate !== void 0 ? _object_minCommissionRate : "";
        return message;
    }
};
function createBaseDelegationResponse() {
    return {
        delegation: undefined,
        balance: undefined
    };
}
export var DelegationResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegation !== undefined) {
            Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegation = Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = Coin.decode(reader, reader.uint32());
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
            delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
            balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
        message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
        return message;
    }
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegationEntry: undefined,
        balance: ""
    };
}
export var RedelegationEntryResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.redelegationEntry !== undefined) {
            RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegationEntryResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
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
            redelegationEntry: isSet(object.redelegationEntry) ? RedelegationEntry.fromJSON(object.redelegationEntry) : undefined,
            balance: isSet(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.redelegationEntry !== undefined && (obj.redelegationEntry = message.redelegationEntry ? RedelegationEntry.toJSON(message.redelegationEntry) : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseRedelegationEntryResponse();
        message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
        var _object_balance;
        message.balance = (_object_balance = object.balance) !== null && _object_balance !== void 0 ? _object_balance : "";
        return message;
    }
};
function createBaseRedelegationResponse() {
    return {
        redelegation: undefined,
        entries: []
    };
}
export var RedelegationResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.redelegation !== undefined) {
            Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseRedelegationResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.redelegation = Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
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
            redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function(e) {
                return RedelegationEntryResponse.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
        if (message.entries) {
            obj.entries = message.entries.map(function(e) {
                return e ? RedelegationEntryResponse.toJSON(e) : undefined;
            });
        } else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_entries;
        var message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = ((_object_entries = object.entries) === null || _object_entries === void 0 ? void 0 : _object_entries.map(function(e) {
            return RedelegationEntryResponse.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBasePool() {
    return {
        notBondedTokens: "",
        bondedTokens: ""
    };
}
export var Pool = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePool();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
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
            notBondedTokens: isSet(object.notBondedTokens) ? String(object.notBondedTokens) : "",
            bondedTokens: isSet(object.bondedTokens) ? String(object.bondedTokens) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.notBondedTokens !== undefined && (obj.notBondedTokens = message.notBondedTokens);
        message.bondedTokens !== undefined && (obj.bondedTokens = message.bondedTokens);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBasePool();
        var _object_notBondedTokens;
        message.notBondedTokens = (_object_notBondedTokens = object.notBondedTokens) !== null && _object_notBondedTokens !== void 0 ? _object_notBondedTokens : "";
        var _object_bondedTokens;
        message.bondedTokens = (_object_bondedTokens = object.bondedTokens) !== null && _object_bondedTokens !== void 0 ? _object_bondedTokens : "";
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
