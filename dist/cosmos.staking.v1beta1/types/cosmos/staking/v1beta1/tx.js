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
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../base/v1beta1/coin";
import { CommissionRates, Description } from "./staking";
export var protobufPackage = "cosmos.staking.v1beta1";
function createBaseMsgCreateValidator() {
    return {
        description: undefined,
        commission: undefined,
        minSelfDelegation: "",
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: undefined,
        value: undefined
    };
}
export var MsgCreateValidator = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(26).string(message.minSelfDelegation);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(34).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(42).string(message.validatorAddress);
        }
        if (message.pubkey !== undefined) {
            Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateValidator();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minSelfDelegation = reader.string();
                    break;
                case 4:
                    message.delegatorAddress = reader.string();
                    break;
                case 5:
                    message.validatorAddress = reader.string();
                    break;
                case 6:
                    message.pubkey = Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = Coin.decode(reader, reader.uint32());
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
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
            value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgCreateValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
        var _object_minSelfDelegation;
        message.minSelfDelegation = (_object_minSelfDelegation = object.minSelfDelegation) !== null && _object_minSelfDelegation !== void 0 ? _object_minSelfDelegation : "";
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
        message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
        return message;
    }
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
export var MsgCreateValidatorResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateValidatorResponse();
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
        var message = createBaseMsgCreateValidatorResponse();
        return message;
    }
};
function createBaseMsgEditValidator() {
    return {
        description: undefined,
        validatorAddress: "",
        commissionRate: "",
        minSelfDelegation: ""
    };
}
export var MsgEditValidator = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(message.commissionRate);
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(34).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgEditValidator();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.commissionRate = reader.string();
                    break;
                case 4:
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
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgEditValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        var _object_commissionRate;
        message.commissionRate = (_object_commissionRate = object.commissionRate) !== null && _object_commissionRate !== void 0 ? _object_commissionRate : "";
        var _object_minSelfDelegation;
        message.minSelfDelegation = (_object_minSelfDelegation = object.minSelfDelegation) !== null && _object_minSelfDelegation !== void 0 ? _object_minSelfDelegation : "";
        return message;
    }
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
export var MsgEditValidatorResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgEditValidatorResponse();
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
        var message = createBaseMsgEditValidatorResponse();
        return message;
    }
};
function createBaseMsgDelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: undefined
    };
}
export var MsgDelegate = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelegate();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgDelegate();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    }
};
function createBaseMsgDelegateResponse() {
    return {};
}
export var MsgDelegateResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelegateResponse();
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
        var message = createBaseMsgDelegateResponse();
        return message;
    }
};
function createBaseMsgBeginRedelegate() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        amount: undefined
    };
}
export var MsgBeginRedelegate = {
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
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBeginRedelegate();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgBeginRedelegate();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorSrcAddress;
        message.validatorSrcAddress = (_object_validatorSrcAddress = object.validatorSrcAddress) !== null && _object_validatorSrcAddress !== void 0 ? _object_validatorSrcAddress : "";
        var _object_validatorDstAddress;
        message.validatorDstAddress = (_object_validatorDstAddress = object.validatorDstAddress) !== null && _object_validatorDstAddress !== void 0 ? _object_validatorDstAddress : "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    }
};
function createBaseMsgBeginRedelegateResponse() {
    return {
        completionTime: undefined
    };
}
export var MsgBeginRedelegateResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBeginRedelegateResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgBeginRedelegateResponse();
        var _object_completionTime;
        message.completionTime = (_object_completionTime = object.completionTime) !== null && _object_completionTime !== void 0 ? _object_completionTime : undefined;
        return message;
    }
};
function createBaseMsgUndelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: undefined
    };
}
export var MsgUndelegate = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUndelegate();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUndelegate();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    }
};
function createBaseMsgUndelegateResponse() {
    return {
        completionTime: undefined
    };
}
export var MsgUndelegateResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUndelegateResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUndelegateResponse();
        var _object_completionTime;
        message.completionTime = (_object_completionTime = object.completionTime) !== null && _object_completionTime !== void 0 ? _object_completionTime : undefined;
        return message;
    }
};
function createBaseMsgCancelUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: undefined,
        creationHeight: 0
    };
}
export var MsgCancelUnbondingDelegation = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.creationHeight !== 0) {
            writer.uint32(32).int64(message.creationHeight);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelUnbondingDelegation();
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
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.creationHeight = longToNumber(reader.int64());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgCancelUnbondingDelegation();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        var _object_creationHeight;
        message.creationHeight = (_object_creationHeight = object.creationHeight) !== null && _object_creationHeight !== void 0 ? _object_creationHeight : 0;
        return message;
    }
};
function createBaseMsgCancelUnbondingDelegationResponse() {
    return {};
}
export var MsgCancelUnbondingDelegationResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelUnbondingDelegationResponse();
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
        var message = createBaseMsgCancelUnbondingDelegationResponse();
        return message;
    }
};
export var MsgClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function MsgClientImpl(rpc) {
        _classCallCheck(this, MsgClientImpl);
        this.rpc = rpc;
        this.CreateValidator = this.CreateValidator.bind(this);
        this.EditValidator = this.EditValidator.bind(this);
        this.Delegate = this.Delegate.bind(this);
        this.BeginRedelegate = this.BeginRedelegate.bind(this);
        this.Undelegate = this.Undelegate.bind(this);
        this.CancelUnbondingDelegation = this.CancelUnbondingDelegation.bind(this);
    }
    var _proto = MsgClientImpl.prototype;
    _proto.CreateValidator = function CreateValidator(request) {
        var data = MsgCreateValidator.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then(function(data) {
            return MsgCreateValidatorResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.EditValidator = function EditValidator(request) {
        var data = MsgEditValidator.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then(function(data) {
            return MsgEditValidatorResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Delegate = function Delegate(request) {
        var data = MsgDelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then(function(data) {
            return MsgDelegateResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.BeginRedelegate = function BeginRedelegate(request) {
        var data = MsgBeginRedelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then(function(data) {
            return MsgBeginRedelegateResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Undelegate = function Undelegate(request) {
        var data = MsgUndelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then(function(data) {
            return MsgUndelegateResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.CancelUnbondingDelegation = function CancelUnbondingDelegation(request) {
        var data = MsgCancelUnbondingDelegation.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
        return promise.then(function(data) {
            return MsgCancelUnbondingDelegationResponse.decode(new _m0.Reader(data));
        });
    };
    return MsgClientImpl;
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
