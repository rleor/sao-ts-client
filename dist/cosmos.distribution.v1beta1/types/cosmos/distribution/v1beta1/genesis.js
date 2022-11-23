/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../base/v1beta1/coin";
import { DelegatorStartingInfo, FeePool, Params, ValidatorAccumulatedCommission, ValidatorCurrentRewards, ValidatorHistoricalRewards, ValidatorSlashEvent } from "./distribution";
export var protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return {
        delegatorAddress: "",
        withdrawAddress: ""
    };
}
export var DelegatorWithdrawInfo = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorWithdrawInfo();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
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
            withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDelegatorWithdrawInfo();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_withdrawAddress;
        message.withdrawAddress = (_object_withdrawAddress = object.withdrawAddress) !== null && _object_withdrawAddress !== void 0 ? _object_withdrawAddress : "";
        return message;
    }
};
function createBaseValidatorOutstandingRewardsRecord() {
    return {
        validatorAddress: "",
        outstandingRewards: []
    };
}
export var ValidatorOutstandingRewardsRecord = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.outstandingRewards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseValidatorOutstandingRewardsRecord();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.outstandingRewards.push(DecCoin.decode(reader, reader.uint32()));
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards) ? object.outstandingRewards.map(function(e) {
                return DecCoin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map(function(e) {
                return e ? DecCoin.toJSON(e) : undefined;
            });
        } else {
            obj.outstandingRewards = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_outstandingRewards;
        var message = createBaseValidatorOutstandingRewardsRecord();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.outstandingRewards = ((_object_outstandingRewards = object.outstandingRewards) === null || _object_outstandingRewards === void 0 ? void 0 : _object_outstandingRewards.map(function(e) {
            return DecCoin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return {
        validatorAddress: "",
        accumulated: undefined
    };
}
export var ValidatorAccumulatedCommissionRecord = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorAccumulatedCommissionRecord();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseValidatorAccumulatedCommissionRecord();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
        return message;
    }
};
function createBaseValidatorHistoricalRewardsRecord() {
    return {
        validatorAddress: "",
        period: 0,
        rewards: undefined
    };
}
export var ValidatorHistoricalRewardsRecord = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorHistoricalRewardsRecord();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.period = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            period: isSet(object.period) ? Number(object.period) : 0,
            rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.period !== undefined && (obj.period = Math.round(message.period));
        message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseValidatorHistoricalRewardsRecord();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        var _object_period;
        message.period = (_object_period = object.period) !== null && _object_period !== void 0 ? _object_period : 0;
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
        return message;
    }
};
function createBaseValidatorCurrentRewardsRecord() {
    return {
        validatorAddress: "",
        rewards: undefined
    };
}
export var ValidatorCurrentRewardsRecord = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorCurrentRewardsRecord();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseValidatorCurrentRewardsRecord();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
        return message;
    }
};
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        startingInfo: undefined
    };
}
export var DelegatorStartingInfoRecord = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorStartingInfoRecord();
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
                    message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32());
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
            startingInfo: isSet(object.startingInfo) ? DelegatorStartingInfo.fromJSON(object.startingInfo) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.startingInfo !== undefined && (obj.startingInfo = message.startingInfo ? DelegatorStartingInfo.toJSON(message.startingInfo) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDelegatorStartingInfoRecord();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.startingInfo = object.startingInfo !== undefined && object.startingInfo !== null ? DelegatorStartingInfo.fromPartial(object.startingInfo) : undefined;
        return message;
    }
};
function createBaseValidatorSlashEventRecord() {
    return {
        validatorAddress: "",
        height: 0,
        period: 0,
        validatorSlashEvent: undefined
    };
}
export var ValidatorSlashEventRecord = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.height !== 0) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== 0) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEventRecord();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.period = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.validatorSlashEvent = ValidatorSlashEvent.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            period: isSet(object.period) ? Number(object.period) : 0,
            validatorSlashEvent: isSet(object.validatorSlashEvent) ? ValidatorSlashEvent.fromJSON(object.validatorSlashEvent) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.period !== undefined && (obj.period = Math.round(message.period));
        message.validatorSlashEvent !== undefined && (obj.validatorSlashEvent = message.validatorSlashEvent ? ValidatorSlashEvent.toJSON(message.validatorSlashEvent) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseValidatorSlashEventRecord();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        var _object_height;
        message.height = (_object_height = object.height) !== null && _object_height !== void 0 ? _object_height : 0;
        var _object_period;
        message.period = (_object_period = object.period) !== null && _object_period !== void 0 ? _object_period : 0;
        message.validatorSlashEvent = object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null ? ValidatorSlashEvent.fromPartial(object.validatorSlashEvent) : undefined;
        return message;
    }
};
function createBaseGenesisState() {
    return {
        params: undefined,
        feePool: undefined,
        delegatorWithdrawInfos: [],
        previousProposer: "",
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: []
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.delegatorWithdrawInfos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
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
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.outstandingRewards[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                ValidatorOutstandingRewardsRecord.encode(v1, writer.uint32(42).fork()).ldelim();
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
            for(var _iterator2 = message.validatorAccumulatedCommissions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                ValidatorAccumulatedCommissionRecord.encode(v2, writer.uint32(50).fork()).ldelim();
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
            for(var _iterator3 = message.validatorHistoricalRewards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                var v3 = _step3.value;
                ValidatorHistoricalRewardsRecord.encode(v3, writer.uint32(58).fork()).ldelim();
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
            for(var _iterator4 = message.validatorCurrentRewards[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var v4 = _step4.value;
                ValidatorCurrentRewardsRecord.encode(v4, writer.uint32(66).fork()).ldelim();
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
        var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
        try {
            for(var _iterator5 = message.delegatorStartingInfos[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                var v5 = _step5.value;
                DelegatorStartingInfoRecord.encode(v5, writer.uint32(74).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                }
            } finally{
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
        var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
        try {
            for(var _iterator6 = message.validatorSlashEvents[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                var v6 = _step6.value;
                ValidatorSlashEventRecord.encode(v6, writer.uint32(82).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                    _iterator6.return();
                }
            } finally{
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
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
                    message.feePool = FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previousProposer = reader.string();
                    break;
                case 5:
                    message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            feePool: isSet(object.feePool) ? FeePool.fromJSON(object.feePool) : undefined,
            delegatorWithdrawInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorWithdrawInfos) ? object.delegatorWithdrawInfos.map(function(e) {
                return DelegatorWithdrawInfo.fromJSON(e);
            }) : [],
            previousProposer: isSet(object.previousProposer) ? String(object.previousProposer) : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards) ? object.outstandingRewards.map(function(e) {
                return ValidatorOutstandingRewardsRecord.fromJSON(e);
            }) : [],
            validatorAccumulatedCommissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorAccumulatedCommissions) ? object.validatorAccumulatedCommissions.map(function(e) {
                return ValidatorAccumulatedCommissionRecord.fromJSON(e);
            }) : [],
            validatorHistoricalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorHistoricalRewards) ? object.validatorHistoricalRewards.map(function(e) {
                return ValidatorHistoricalRewardsRecord.fromJSON(e);
            }) : [],
            validatorCurrentRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorCurrentRewards) ? object.validatorCurrentRewards.map(function(e) {
                return ValidatorCurrentRewardsRecord.fromJSON(e);
            }) : [],
            delegatorStartingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorStartingInfos) ? object.delegatorStartingInfos.map(function(e) {
                return DelegatorStartingInfoRecord.fromJSON(e);
            }) : [],
            validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorSlashEvents) ? object.validatorSlashEvents.map(function(e) {
                return ValidatorSlashEventRecord.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.feePool !== undefined && (obj.feePool = message.feePool ? FeePool.toJSON(message.feePool) : undefined);
        if (message.delegatorWithdrawInfos) {
            obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map(function(e) {
                return e ? DelegatorWithdrawInfo.toJSON(e) : undefined;
            });
        } else {
            obj.delegatorWithdrawInfos = [];
        }
        message.previousProposer !== undefined && (obj.previousProposer = message.previousProposer);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map(function(e) {
                return e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined;
            });
        } else {
            obj.outstandingRewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map(function(e) {
                return e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined;
            });
        } else {
            obj.validatorAccumulatedCommissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map(function(e) {
                return e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined;
            });
        } else {
            obj.validatorHistoricalRewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validatorCurrentRewards = message.validatorCurrentRewards.map(function(e) {
                return e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined;
            });
        } else {
            obj.validatorCurrentRewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegatorStartingInfos = message.delegatorStartingInfos.map(function(e) {
                return e ? DelegatorStartingInfoRecord.toJSON(e) : undefined;
            });
        } else {
            obj.delegatorStartingInfos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map(function(e) {
                return e ? ValidatorSlashEventRecord.toJSON(e) : undefined;
            });
        } else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_delegatorWithdrawInfos, _object_outstandingRewards, _object_validatorAccumulatedCommissions, _object_validatorHistoricalRewards, _object_validatorCurrentRewards, _object_delegatorStartingInfos, _object_validatorSlashEvents;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.feePool = object.feePool !== undefined && object.feePool !== null ? FeePool.fromPartial(object.feePool) : undefined;
        message.delegatorWithdrawInfos = ((_object_delegatorWithdrawInfos = object.delegatorWithdrawInfos) === null || _object_delegatorWithdrawInfos === void 0 ? void 0 : _object_delegatorWithdrawInfos.map(function(e) {
            return DelegatorWithdrawInfo.fromPartial(e);
        })) || [];
        var _object_previousProposer;
        message.previousProposer = (_object_previousProposer = object.previousProposer) !== null && _object_previousProposer !== void 0 ? _object_previousProposer : "";
        message.outstandingRewards = ((_object_outstandingRewards = object.outstandingRewards) === null || _object_outstandingRewards === void 0 ? void 0 : _object_outstandingRewards.map(function(e) {
            return ValidatorOutstandingRewardsRecord.fromPartial(e);
        })) || [];
        message.validatorAccumulatedCommissions = ((_object_validatorAccumulatedCommissions = object.validatorAccumulatedCommissions) === null || _object_validatorAccumulatedCommissions === void 0 ? void 0 : _object_validatorAccumulatedCommissions.map(function(e) {
            return ValidatorAccumulatedCommissionRecord.fromPartial(e);
        })) || [];
        message.validatorHistoricalRewards = ((_object_validatorHistoricalRewards = object.validatorHistoricalRewards) === null || _object_validatorHistoricalRewards === void 0 ? void 0 : _object_validatorHistoricalRewards.map(function(e) {
            return ValidatorHistoricalRewardsRecord.fromPartial(e);
        })) || [];
        message.validatorCurrentRewards = ((_object_validatorCurrentRewards = object.validatorCurrentRewards) === null || _object_validatorCurrentRewards === void 0 ? void 0 : _object_validatorCurrentRewards.map(function(e) {
            return ValidatorCurrentRewardsRecord.fromPartial(e);
        })) || [];
        message.delegatorStartingInfos = ((_object_delegatorStartingInfos = object.delegatorStartingInfos) === null || _object_delegatorStartingInfos === void 0 ? void 0 : _object_delegatorStartingInfos.map(function(e) {
            return DelegatorStartingInfoRecord.fromPartial(e);
        })) || [];
        message.validatorSlashEvents = ((_object_validatorSlashEvents = object.validatorSlashEvents) === null || _object_validatorSlashEvents === void 0 ? void 0 : _object_validatorSlashEvents.map(function(e) {
            return ValidatorSlashEventRecord.fromPartial(e);
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
