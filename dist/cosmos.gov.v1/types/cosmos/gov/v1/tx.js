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
import { Coin } from "../../base/v1beta1/coin";
import { voteOptionFromJSON, voteOptionToJSON, WeightedVoteOption } from "./gov";
export var protobufPackage = "cosmos.gov.v1";
function createBaseMsgSubmitProposal() {
    return {
        messages: [],
        initialDeposit: [],
        proposer: "",
        metadata: ""
    };
}
export var MsgSubmitProposal = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Any.encode(v, writer.uint32(10).fork()).ldelim();
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
            for(var _iterator1 = message.initialDeposit[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Coin.encode(v1, writer.uint32(18).fork()).ldelim();
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
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitProposal();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.proposer = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
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
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function(e) {
                return Any.fromJSON(e);
            }) : [],
            initialDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.initialDeposit) ? object.initialDeposit.map(function(e) {
                return Coin.fromJSON(e);
            }) : [],
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(function(e) {
                return e ? Any.toJSON(e) : undefined;
            });
        } else {
            obj.messages = [];
        }
        if (message.initialDeposit) {
            obj.initialDeposit = message.initialDeposit.map(function(e) {
                return e ? Coin.toJSON(e) : undefined;
            });
        } else {
            obj.initialDeposit = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_messages, _object_initialDeposit;
        var message = createBaseMsgSubmitProposal();
        message.messages = ((_object_messages = object.messages) === null || _object_messages === void 0 ? void 0 : _object_messages.map(function(e) {
            return Any.fromPartial(e);
        })) || [];
        message.initialDeposit = ((_object_initialDeposit = object.initialDeposit) === null || _object_initialDeposit === void 0 ? void 0 : _object_initialDeposit.map(function(e) {
            return Coin.fromPartial(e);
        })) || [];
        var _object_proposer;
        message.proposer = (_object_proposer = object.proposer) !== null && _object_proposer !== void 0 ? _object_proposer : "";
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        return message;
    }
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: 0
    };
}
export var MsgSubmitProposalResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitProposalResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgSubmitProposalResponse();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        return message;
    }
};
function createBaseMsgExecLegacyContent() {
    return {
        content: undefined,
        authority: ""
    };
}
export var MsgExecLegacyContent = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.content !== undefined) {
            Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExecLegacyContent();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.content = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authority = reader.string();
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
            content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
            authority: isSet(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgExecLegacyContent();
        message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
        var _object_authority;
        message.authority = (_object_authority = object.authority) !== null && _object_authority !== void 0 ? _object_authority : "";
        return message;
    }
};
function createBaseMsgExecLegacyContentResponse() {
    return {};
}
export var MsgExecLegacyContentResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExecLegacyContentResponse();
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
        var message = createBaseMsgExecLegacyContentResponse();
        return message;
    }
};
function createBaseMsgVote() {
    return {
        proposalId: 0,
        voter: "",
        option: 0,
        metadata: ""
    };
}
export var MsgVote = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVote();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgVote();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        var _object_voter;
        message.voter = (_object_voter = object.voter) !== null && _object_voter !== void 0 ? _object_voter : "";
        var _object_option;
        message.option = (_object_option = object.option) !== null && _object_option !== void 0 ? _object_option : 0;
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        return message;
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
export var MsgVoteResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteResponse();
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
        var message = createBaseMsgVoteResponse();
        return message;
    }
};
function createBaseMsgVoteWeighted() {
    return {
        proposalId: 0,
        voter: "",
        options: [],
        metadata: ""
    };
}
export var MsgVoteWeighted = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
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
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteWeighted();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = reader.string();
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            voter: isSet(object.voter) ? String(object.voter) : "",
            options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map(function(e) {
                return WeightedVoteOption.fromJSON(e);
            }) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.voter !== undefined && (obj.voter = message.voter);
        if (message.options) {
            obj.options = message.options.map(function(e) {
                return e ? WeightedVoteOption.toJSON(e) : undefined;
            });
        } else {
            obj.options = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_options;
        var message = createBaseMsgVoteWeighted();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        var _object_voter;
        message.voter = (_object_voter = object.voter) !== null && _object_voter !== void 0 ? _object_voter : "";
        message.options = ((_object_options = object.options) === null || _object_options === void 0 ? void 0 : _object_options.map(function(e) {
            return WeightedVoteOption.fromPartial(e);
        })) || [];
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        return message;
    }
};
function createBaseMsgVoteWeightedResponse() {
    return {};
}
export var MsgVoteWeightedResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteWeightedResponse();
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
        var message = createBaseMsgVoteWeightedResponse();
        return message;
    }
};
function createBaseMsgDeposit() {
    return {
        proposalId: 0,
        depositor: "",
        amount: []
    };
}
export var MsgDeposit = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.amount[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Coin.encode(v, writer.uint32(26).fork()).ldelim();
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
        var message = createBaseMsgDeposit();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function(e) {
                return Coin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.depositor !== undefined && (obj.depositor = message.depositor);
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
        var message = createBaseMsgDeposit();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        var _object_depositor;
        message.depositor = (_object_depositor = object.depositor) !== null && _object_depositor !== void 0 ? _object_depositor : "";
        message.amount = ((_object_amount = object.amount) === null || _object_amount === void 0 ? void 0 : _object_amount.map(function(e) {
            return Coin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
export var MsgDepositResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDepositResponse();
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
        var message = createBaseMsgDepositResponse();
        return message;
    }
};
export var MsgClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function MsgClientImpl(rpc) {
        _classCallCheck(this, MsgClientImpl);
        this.rpc = rpc;
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.ExecLegacyContent = this.ExecLegacyContent.bind(this);
        this.Vote = this.Vote.bind(this);
        this.VoteWeighted = this.VoteWeighted.bind(this);
        this.Deposit = this.Deposit.bind(this);
    }
    var _proto = MsgClientImpl.prototype;
    _proto.SubmitProposal = function SubmitProposal(request) {
        var data = MsgSubmitProposal.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
        return promise.then(function(data) {
            return MsgSubmitProposalResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ExecLegacyContent = function ExecLegacyContent(request) {
        var data = MsgExecLegacyContent.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
        return promise.then(function(data) {
            return MsgExecLegacyContentResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Vote = function Vote(request) {
        var data = MsgVote.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
        return promise.then(function(data) {
            return MsgVoteResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.VoteWeighted = function VoteWeighted(request) {
        var data = MsgVoteWeighted.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
        return promise.then(function(data) {
            return MsgVoteWeightedResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Deposit = function Deposit(request) {
        var data = MsgDeposit.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
        return promise.then(function(data) {
            return MsgDepositResponse.decode(new _m0.Reader(data));
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
