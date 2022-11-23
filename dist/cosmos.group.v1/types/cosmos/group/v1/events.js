/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
export var protobufPackage = "cosmos.group.v1";
function createBaseEventCreateGroup() {
    return {
        groupId: 0
    };
}
export var EventCreateGroup = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventCreateGroup();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.groupId = longToNumber(reader.uint64());
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
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventCreateGroup();
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        return message;
    }
};
function createBaseEventUpdateGroup() {
    return {
        groupId: 0
    };
}
export var EventUpdateGroup = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateGroup();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.groupId = longToNumber(reader.uint64());
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
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventUpdateGroup();
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        return message;
    }
};
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
export var EventCreateGroupPolicy = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventCreateGroupPolicy();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventCreateGroupPolicy();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
export var EventUpdateGroupPolicy = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateGroupPolicy();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventUpdateGroupPolicy();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseEventSubmitProposal() {
    return {
        proposalId: 0
    };
}
export var EventSubmitProposal = {
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
        var message = createBaseEventSubmitProposal();
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
        var message = createBaseEventSubmitProposal();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        return message;
    }
};
function createBaseEventWithdrawProposal() {
    return {
        proposalId: 0
    };
}
export var EventWithdrawProposal = {
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
        var message = createBaseEventWithdrawProposal();
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
        var message = createBaseEventWithdrawProposal();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        return message;
    }
};
function createBaseEventVote() {
    return {
        proposalId: 0
    };
}
export var EventVote = {
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
        var message = createBaseEventVote();
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
        var message = createBaseEventVote();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        return message;
    }
};
function createBaseEventExec() {
    return {
        proposalId: 0,
        result: 0,
        logs: ""
    };
}
export var EventExec = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        if (message.logs !== "") {
            writer.uint32(26).string(message.logs);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventExec();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.logs = reader.string();
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
            result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0,
            logs: isSet(object.logs) ? String(object.logs) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
        message.logs !== undefined && (obj.logs = message.logs);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventExec();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        var _object_result;
        message.result = (_object_result = object.result) !== null && _object_result !== void 0 ? _object_result : 0;
        var _object_logs;
        message.logs = (_object_logs = object.logs) !== null && _object_logs !== void 0 ? _object_logs : "";
        return message;
    }
};
function createBaseEventLeaveGroup() {
    return {
        groupId: 0,
        address: ""
    };
}
export var EventLeaveGroup = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventLeaveGroup();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.groupId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
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
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventLeaveGroup();
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
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
