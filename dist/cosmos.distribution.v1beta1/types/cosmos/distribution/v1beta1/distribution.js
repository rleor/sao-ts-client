/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../base/v1beta1/coin";
export var protobufPackage = "cosmos.distribution.v1beta1";
function createBaseParams() {
    return {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: false
    };
}
export var Params = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.communityTax !== "") {
            writer.uint32(10).string(message.communityTax);
        }
        if (message.baseProposerReward !== "") {
            writer.uint32(18).string(message.baseProposerReward);
        }
        if (message.bonusProposerReward !== "") {
            writer.uint32(26).string(message.bonusProposerReward);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
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
                    message.communityTax = reader.string();
                    break;
                case 2:
                    message.baseProposerReward = reader.string();
                    break;
                case 3:
                    message.bonusProposerReward = reader.string();
                    break;
                case 4:
                    message.withdrawAddrEnabled = reader.bool();
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
            communityTax: isSet(object.communityTax) ? String(object.communityTax) : "",
            baseProposerReward: isSet(object.baseProposerReward) ? String(object.baseProposerReward) : "",
            bonusProposerReward: isSet(object.bonusProposerReward) ? String(object.bonusProposerReward) : "",
            withdrawAddrEnabled: isSet(object.withdrawAddrEnabled) ? Boolean(object.withdrawAddrEnabled) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.communityTax !== undefined && (obj.communityTax = message.communityTax);
        message.baseProposerReward !== undefined && (obj.baseProposerReward = message.baseProposerReward);
        message.bonusProposerReward !== undefined && (obj.bonusProposerReward = message.bonusProposerReward);
        message.withdrawAddrEnabled !== undefined && (obj.withdrawAddrEnabled = message.withdrawAddrEnabled);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseParams();
        var _object_communityTax;
        message.communityTax = (_object_communityTax = object.communityTax) !== null && _object_communityTax !== void 0 ? _object_communityTax : "";
        var _object_baseProposerReward;
        message.baseProposerReward = (_object_baseProposerReward = object.baseProposerReward) !== null && _object_baseProposerReward !== void 0 ? _object_baseProposerReward : "";
        var _object_bonusProposerReward;
        message.bonusProposerReward = (_object_bonusProposerReward = object.bonusProposerReward) !== null && _object_bonusProposerReward !== void 0 ? _object_bonusProposerReward : "";
        var _object_withdrawAddrEnabled;
        message.withdrawAddrEnabled = (_object_withdrawAddrEnabled = object.withdrawAddrEnabled) !== null && _object_withdrawAddrEnabled !== void 0 ? _object_withdrawAddrEnabled : false;
        return message;
    }
};
function createBaseValidatorHistoricalRewards() {
    return {
        cumulativeRewardRatio: [],
        referenceCount: 0
    };
}
export var ValidatorHistoricalRewards = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.cumulativeRewardRatio[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorHistoricalRewards();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.referenceCount = reader.uint32();
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
            cumulativeRewardRatio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulativeRewardRatio) ? object.cumulativeRewardRatio.map(function(e) {
                return DecCoin.fromJSON(e);
            }) : [],
            referenceCount: isSet(object.referenceCount) ? Number(object.referenceCount) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.cumulativeRewardRatio) {
            obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map(function(e) {
                return e ? DecCoin.toJSON(e) : undefined;
            });
        } else {
            obj.cumulativeRewardRatio = [];
        }
        message.referenceCount !== undefined && (obj.referenceCount = Math.round(message.referenceCount));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_cumulativeRewardRatio;
        var message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio = ((_object_cumulativeRewardRatio = object.cumulativeRewardRatio) === null || _object_cumulativeRewardRatio === void 0 ? void 0 : _object_cumulativeRewardRatio.map(function(e) {
            return DecCoin.fromPartial(e);
        })) || [];
        var _object_referenceCount;
        message.referenceCount = (_object_referenceCount = object.referenceCount) !== null && _object_referenceCount !== void 0 ? _object_referenceCount : 0;
        return message;
    }
};
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: 0
    };
}
export var ValidatorCurrentRewards = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.rewards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorCurrentRewards();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = longToNumber(reader.uint64());
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function(e) {
                return DecCoin.fromJSON(e);
            }) : [],
            period: isSet(object.period) ? Number(object.period) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(function(e) {
                return e ? DecCoin.toJSON(e) : undefined;
            });
        } else {
            obj.rewards = [];
        }
        message.period !== undefined && (obj.period = Math.round(message.period));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_rewards;
        var message = createBaseValidatorCurrentRewards();
        message.rewards = ((_object_rewards = object.rewards) === null || _object_rewards === void 0 ? void 0 : _object_rewards.map(function(e) {
            return DecCoin.fromPartial(e);
        })) || [];
        var _object_period;
        message.period = (_object_period = object.period) !== null && _object_period !== void 0 ? _object_period : 0;
        return message;
    }
};
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: []
    };
}
export var ValidatorAccumulatedCommission = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.commission[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseValidatorAccumulatedCommission();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.commission.push(DecCoin.decode(reader, reader.uint32()));
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
            commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map(function(e) {
                return DecCoin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(function(e) {
                return e ? DecCoin.toJSON(e) : undefined;
            });
        } else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_commission;
        var message = createBaseValidatorAccumulatedCommission();
        message.commission = ((_object_commission = object.commission) === null || _object_commission === void 0 ? void 0 : _object_commission.map(function(e) {
            return DecCoin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: []
    };
}
export var ValidatorOutstandingRewards = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.rewards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseValidatorOutstandingRewards();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function(e) {
                return DecCoin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(function(e) {
                return e ? DecCoin.toJSON(e) : undefined;
            });
        } else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_rewards;
        var message = createBaseValidatorOutstandingRewards();
        message.rewards = ((_object_rewards = object.rewards) === null || _object_rewards === void 0 ? void 0 : _object_rewards.map(function(e) {
            return DecCoin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseValidatorSlashEvent() {
    return {
        validatorPeriod: 0,
        fraction: ""
    };
}
export var ValidatorSlashEvent = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.validatorPeriod !== 0) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEvent();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorPeriod = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.fraction = reader.string();
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
            validatorPeriod: isSet(object.validatorPeriod) ? Number(object.validatorPeriod) : 0,
            fraction: isSet(object.fraction) ? String(object.fraction) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.validatorPeriod !== undefined && (obj.validatorPeriod = Math.round(message.validatorPeriod));
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseValidatorSlashEvent();
        var _object_validatorPeriod;
        message.validatorPeriod = (_object_validatorPeriod = object.validatorPeriod) !== null && _object_validatorPeriod !== void 0 ? _object_validatorPeriod : 0;
        var _object_fraction;
        message.fraction = (_object_fraction = object.fraction) !== null && _object_fraction !== void 0 ? _object_fraction : "";
        return message;
    }
};
function createBaseValidatorSlashEvents() {
    return {
        validatorSlashEvents: []
    };
}
export var ValidatorSlashEvents = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.validatorSlashEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseValidatorSlashEvents();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorSlashEvents) ? object.validatorSlashEvents.map(function(e) {
                return ValidatorSlashEvent.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map(function(e) {
                return e ? ValidatorSlashEvent.toJSON(e) : undefined;
            });
        } else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_validatorSlashEvents;
        var message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents = ((_object_validatorSlashEvents = object.validatorSlashEvents) === null || _object_validatorSlashEvents === void 0 ? void 0 : _object_validatorSlashEvents.map(function(e) {
            return ValidatorSlashEvent.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseFeePool() {
    return {
        communityPool: []
    };
}
export var FeePool = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.communityPool[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseFeePool();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
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
            communityPool: Array.isArray(object === null || object === void 0 ? void 0 : object.communityPool) ? object.communityPool.map(function(e) {
                return DecCoin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.communityPool) {
            obj.communityPool = message.communityPool.map(function(e) {
                return e ? DecCoin.toJSON(e) : undefined;
            });
        } else {
            obj.communityPool = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_communityPool;
        var message = createBaseFeePool();
        message.communityPool = ((_object_communityPool = object.communityPool) === null || _object_communityPool === void 0 ? void 0 : _object_communityPool.map(function(e) {
            return DecCoin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseCommunityPoolSpendProposal() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: []
    };
}
export var CommunityPoolSpendProposal = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.amount[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
        var message = createBaseCommunityPoolSpendProposal();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function(e) {
                return Coin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(function(e) {
                return e ? Coin.toJSON(e) : undefined;
            });
        } else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_amount;
        var message = createBaseCommunityPoolSpendProposal();
        var _object_title;
        message.title = (_object_title = object.title) !== null && _object_title !== void 0 ? _object_title : "";
        var _object_description;
        message.description = (_object_description = object.description) !== null && _object_description !== void 0 ? _object_description : "";
        var _object_recipient;
        message.recipient = (_object_recipient = object.recipient) !== null && _object_recipient !== void 0 ? _object_recipient : "";
        message.amount = ((_object_amount = object.amount) === null || _object_amount === void 0 ? void 0 : _object_amount.map(function(e) {
            return Coin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseDelegatorStartingInfo() {
    return {
        previousPeriod: 0,
        stake: "",
        height: 0
    };
}
export var DelegatorStartingInfo = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.previousPeriod !== 0) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorStartingInfo();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.previousPeriod = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = longToNumber(reader.uint64());
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
            previousPeriod: isSet(object.previousPeriod) ? Number(object.previousPeriod) : 0,
            stake: isSet(object.stake) ? String(object.stake) : "",
            height: isSet(object.height) ? Number(object.height) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.previousPeriod !== undefined && (obj.previousPeriod = Math.round(message.previousPeriod));
        message.stake !== undefined && (obj.stake = message.stake);
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDelegatorStartingInfo();
        var _object_previousPeriod;
        message.previousPeriod = (_object_previousPeriod = object.previousPeriod) !== null && _object_previousPeriod !== void 0 ? _object_previousPeriod : 0;
        var _object_stake;
        message.stake = (_object_stake = object.stake) !== null && _object_stake !== void 0 ? _object_stake : "";
        var _object_height;
        message.height = (_object_height = object.height) !== null && _object_height !== void 0 ? _object_height : 0;
        return message;
    }
};
function createBaseDelegationDelegatorReward() {
    return {
        validatorAddress: "",
        reward: []
    };
}
export var DelegationDelegatorReward = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.reward[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
        var message = createBaseDelegationDelegatorReward();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.reward.push(DecCoin.decode(reader, reader.uint32()));
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
            reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward) ? object.reward.map(function(e) {
                return DecCoin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        if (message.reward) {
            obj.reward = message.reward.map(function(e) {
                return e ? DecCoin.toJSON(e) : undefined;
            });
        } else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_reward;
        var message = createBaseDelegationDelegatorReward();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        message.reward = ((_object_reward = object.reward) === null || _object_reward === void 0 ? void 0 : _object_reward.map(function(e) {
            return DecCoin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: ""
    };
}
export var CommunityPoolSpendProposalWithDeposit = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommunityPoolSpendProposalWithDeposit();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseCommunityPoolSpendProposalWithDeposit();
        var _object_title;
        message.title = (_object_title = object.title) !== null && _object_title !== void 0 ? _object_title : "";
        var _object_description;
        message.description = (_object_description = object.description) !== null && _object_description !== void 0 ? _object_description : "";
        var _object_recipient;
        message.recipient = (_object_recipient = object.recipient) !== null && _object_recipient !== void 0 ? _object_recipient : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_deposit;
        message.deposit = (_object_deposit = object.deposit) !== null && _object_deposit !== void 0 ? _object_deposit : "";
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
