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
import { MemberRequest, proposalExecutorResultFromJSON, proposalExecutorResultToJSON, voteOptionFromJSON, voteOptionToJSON } from "./types";
export var protobufPackage = "cosmos.group.v1";
export var Exec;
(function(Exec) {
    Exec[Exec[/**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */ "EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    Exec[Exec[/**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */ "EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (Exec = {}));
export function execFromJSON(object) {
    switch(object){
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
export function execToJSON(object) {
    switch(object){
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return {
        admin: "",
        members: [],
        metadata: ""
    };
}
export var MsgCreateGroup = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.members[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
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
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroup();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(MemberRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function(e) {
                return MemberRequest.fromJSON(e);
            }) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(function(e) {
                return e ? MemberRequest.toJSON(e) : undefined;
            });
        } else {
            obj.members = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_members;
        var message = createBaseMsgCreateGroup();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        message.members = ((_object_members = object.members) === null || _object_members === void 0 ? void 0 : _object_members.map(function(e) {
            return MemberRequest.fromPartial(e);
        })) || [];
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        return message;
    }
};
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: 0
    };
}
export var MsgCreateGroupResponse = {
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
        var message = createBaseMsgCreateGroupResponse();
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
        var message = createBaseMsgCreateGroupResponse();
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        return message;
    }
};
function createBaseMsgUpdateGroupMembers() {
    return {
        admin: "",
        groupId: 0,
        memberUpdates: []
    };
}
export var MsgUpdateGroupMembers = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.memberUpdates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
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
        var message = createBaseMsgUpdateGroupMembers();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.memberUpdates.push(MemberRequest.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            memberUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.memberUpdates) ? object.memberUpdates.map(function(e) {
                return MemberRequest.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        if (message.memberUpdates) {
            obj.memberUpdates = message.memberUpdates.map(function(e) {
                return e ? MemberRequest.toJSON(e) : undefined;
            });
        } else {
            obj.memberUpdates = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_memberUpdates;
        var message = createBaseMsgUpdateGroupMembers();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        message.memberUpdates = ((_object_memberUpdates = object.memberUpdates) === null || _object_memberUpdates === void 0 ? void 0 : _object_memberUpdates.map(function(e) {
            return MemberRequest.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
export var MsgUpdateGroupMembersResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupMembersResponse();
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
        var message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    }
};
function createBaseMsgUpdateGroupAdmin() {
    return {
        admin: "",
        groupId: 0,
        newAdmin: ""
    };
}
export var MsgUpdateGroupAdmin = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupAdmin();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUpdateGroupAdmin();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        var _object_newAdmin;
        message.newAdmin = (_object_newAdmin = object.newAdmin) !== null && _object_newAdmin !== void 0 ? _object_newAdmin : "";
        return message;
    }
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
export var MsgUpdateGroupAdminResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupAdminResponse();
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
        var message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    }
};
function createBaseMsgUpdateGroupMetadata() {
    return {
        admin: "",
        groupId: 0,
        metadata: ""
    };
}
export var MsgUpdateGroupMetadata = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupMetadata();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = longToNumber(reader.uint64());
                    break;
                case 3:
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUpdateGroupMetadata();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        return message;
    }
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
export var MsgUpdateGroupMetadataResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupMetadataResponse();
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
        var message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    }
};
function createBaseMsgCreateGroupPolicy() {
    return {
        admin: "",
        groupId: 0,
        metadata: "",
        decisionPolicy: undefined
    };
}
export var MsgCreateGroupPolicy = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroupPolicy();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgCreateGroupPolicy();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    }
};
function createBaseMsgCreateGroupPolicyResponse() {
    return {
        address: ""
    };
}
export var MsgCreateGroupPolicyResponse = {
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
        var message = createBaseMsgCreateGroupPolicyResponse();
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
        var message = createBaseMsgCreateGroupPolicyResponse();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseMsgUpdateGroupPolicyAdmin() {
    return {
        admin: "",
        groupPolicyAddress: "",
        newAdmin: ""
    };
}
export var MsgUpdateGroupPolicyAdmin = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyAdmin();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUpdateGroupPolicyAdmin();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        var _object_groupPolicyAddress;
        message.groupPolicyAddress = (_object_groupPolicyAddress = object.groupPolicyAddress) !== null && _object_groupPolicyAddress !== void 0 ? _object_groupPolicyAddress : "";
        var _object_newAdmin;
        message.newAdmin = (_object_newAdmin = object.newAdmin) !== null && _object_newAdmin !== void 0 ? _object_newAdmin : "";
        return message;
    }
};
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        groupMetadata: "",
        groupPolicyMetadata: "",
        groupPolicyAsAdmin: false,
        decisionPolicy: undefined
    };
}
export var MsgCreateGroupWithPolicy = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.members[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
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
        if (message.groupMetadata !== "") {
            writer.uint32(26).string(message.groupMetadata);
        }
        if (message.groupPolicyMetadata !== "") {
            writer.uint32(34).string(message.groupPolicyMetadata);
        }
        if (message.groupPolicyAsAdmin === true) {
            writer.uint32(40).bool(message.groupPolicyAsAdmin);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroupWithPolicy();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(MemberRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMetadata = reader.string();
                    break;
                case 4:
                    message.groupPolicyMetadata = reader.string();
                    break;
                case 5:
                    message.groupPolicyAsAdmin = reader.bool();
                    break;
                case 6:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function(e) {
                return MemberRequest.fromJSON(e);
            }) : [],
            groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
            groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
            groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(function(e) {
                return e ? MemberRequest.toJSON(e) : undefined;
            });
        } else {
            obj.members = [];
        }
        message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
        message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
        message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
        message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_members;
        var message = createBaseMsgCreateGroupWithPolicy();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        message.members = ((_object_members = object.members) === null || _object_members === void 0 ? void 0 : _object_members.map(function(e) {
            return MemberRequest.fromPartial(e);
        })) || [];
        var _object_groupMetadata;
        message.groupMetadata = (_object_groupMetadata = object.groupMetadata) !== null && _object_groupMetadata !== void 0 ? _object_groupMetadata : "";
        var _object_groupPolicyMetadata;
        message.groupPolicyMetadata = (_object_groupPolicyMetadata = object.groupPolicyMetadata) !== null && _object_groupPolicyMetadata !== void 0 ? _object_groupPolicyMetadata : "";
        var _object_groupPolicyAsAdmin;
        message.groupPolicyAsAdmin = (_object_groupPolicyAsAdmin = object.groupPolicyAsAdmin) !== null && _object_groupPolicyAsAdmin !== void 0 ? _object_groupPolicyAsAdmin : false;
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    }
};
function createBaseMsgCreateGroupWithPolicyResponse() {
    return {
        groupId: 0,
        groupPolicyAddress: ""
    };
}
export var MsgCreateGroupWithPolicyResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroupWithPolicyResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.groupId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
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
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgCreateGroupWithPolicyResponse();
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        var _object_groupPolicyAddress;
        message.groupPolicyAddress = (_object_groupPolicyAddress = object.groupPolicyAddress) !== null && _object_groupPolicyAddress !== void 0 ? _object_groupPolicyAddress : "";
        return message;
    }
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
export var MsgUpdateGroupPolicyAdminResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
        var message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return {
        admin: "",
        groupPolicyAddress: "",
        decisionPolicy: undefined
    };
}
export var MsgUpdateGroupPolicyDecisionPolicy = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                case 3:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        var _object_groupPolicyAddress;
        message.groupPolicyAddress = (_object_groupPolicyAddress = object.groupPolicyAddress) !== null && _object_groupPolicyAddress !== void 0 ? _object_groupPolicyAddress : "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
export var MsgUpdateGroupPolicyDecisionPolicyResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    }
};
function createBaseMsgUpdateGroupPolicyMetadata() {
    return {
        admin: "",
        groupPolicyAddress: "",
        metadata: ""
    };
}
export var MsgUpdateGroupPolicyMetadata = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyMetadata();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                case 3:
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUpdateGroupPolicyMetadata();
        var _object_admin;
        message.admin = (_object_admin = object.admin) !== null && _object_admin !== void 0 ? _object_admin : "";
        var _object_groupPolicyAddress;
        message.groupPolicyAddress = (_object_groupPolicyAddress = object.groupPolicyAddress) !== null && _object_groupPolicyAddress !== void 0 ? _object_groupPolicyAddress : "";
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        return message;
    }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
export var MsgUpdateGroupPolicyMetadataResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
        var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    }
};
function createBaseMsgSubmitProposal() {
    return {
        groupPolicyAddress: "",
        proposers: [],
        metadata: "",
        messages: [],
        exec: 0
    };
}
export var MsgSubmitProposal = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.groupPolicyAddress !== "") {
            writer.uint32(10).string(message.groupPolicyAddress);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.proposers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(18).string(v);
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
            writer.uint32(26).string(message.metadata);
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.messages[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Any.encode(v1, writer.uint32(34).fork()).ldelim();
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
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
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
                    message.groupPolicyAddress = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = reader.int32();
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
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(function(e) {
                return String(e);
            }) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function(e) {
                return Any.fromJSON(e);
            }) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        if (message.proposers) {
            obj.proposers = message.proposers.map(function(e) {
                return e;
            });
        } else {
            obj.proposers = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.messages) {
            obj.messages = message.messages.map(function(e) {
                return e ? Any.toJSON(e) : undefined;
            });
        } else {
            obj.messages = [];
        }
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_proposers, _object_messages;
        var message = createBaseMsgSubmitProposal();
        var _object_groupPolicyAddress;
        message.groupPolicyAddress = (_object_groupPolicyAddress = object.groupPolicyAddress) !== null && _object_groupPolicyAddress !== void 0 ? _object_groupPolicyAddress : "";
        message.proposers = ((_object_proposers = object.proposers) === null || _object_proposers === void 0 ? void 0 : _object_proposers.map(function(e) {
            return e;
        })) || [];
        var _object_metadata;
        message.metadata = (_object_metadata = object.metadata) !== null && _object_metadata !== void 0 ? _object_metadata : "";
        message.messages = ((_object_messages = object.messages) === null || _object_messages === void 0 ? void 0 : _object_messages.map(function(e) {
            return Any.fromPartial(e);
        })) || [];
        var _object_exec;
        message.exec = (_object_exec = object.exec) !== null && _object_exec !== void 0 ? _object_exec : 0;
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
function createBaseMsgWithdrawProposal() {
    return {
        proposalId: 0,
        address: ""
    };
}
export var MsgWithdrawProposal = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawProposal();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgWithdrawProposal();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
export var MsgWithdrawProposalResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawProposalResponse();
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
        var message = createBaseMsgWithdrawProposalResponse();
        return message;
    }
};
function createBaseMsgVote() {
    return {
        proposalId: 0,
        voter: "",
        option: 0,
        metadata: "",
        exec: 0
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
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
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
                case 5:
                    message.exec = reader.int32();
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
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
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
        var _object_exec;
        message.exec = (_object_exec = object.exec) !== null && _object_exec !== void 0 ? _object_exec : 0;
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
function createBaseMsgExec() {
    return {
        proposalId: 0,
        executor: ""
    };
}
export var MsgExec = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExec();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.proposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.executor = reader.string();
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
            executor: isSet(object.executor) ? String(object.executor) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
        message.executor !== undefined && (obj.executor = message.executor);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgExec();
        var _object_proposalId;
        message.proposalId = (_object_proposalId = object.proposalId) !== null && _object_proposalId !== void 0 ? _object_proposalId : 0;
        var _object_executor;
        message.executor = (_object_executor = object.executor) !== null && _object_executor !== void 0 ? _object_executor : "";
        return message;
    }
};
function createBaseMsgExecResponse() {
    return {
        result: 0
    };
}
export var MsgExecResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExecResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 2:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgExecResponse();
        var _object_result;
        message.result = (_object_result = object.result) !== null && _object_result !== void 0 ? _object_result : 0;
        return message;
    }
};
function createBaseMsgLeaveGroup() {
    return {
        address: "",
        groupId: 0
    };
}
export var MsgLeaveGroup = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgLeaveGroup();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: isSet(object.address) ? String(object.address) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgLeaveGroup();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : 0;
        return message;
    }
};
function createBaseMsgLeaveGroupResponse() {
    return {};
}
export var MsgLeaveGroupResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgLeaveGroupResponse();
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
        var message = createBaseMsgLeaveGroupResponse();
        return message;
    }
};
export var MsgClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function MsgClientImpl(rpc) {
        _classCallCheck(this, MsgClientImpl);
        this.rpc = rpc;
        this.CreateGroup = this.CreateGroup.bind(this);
        this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
        this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
        this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
        this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
        this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
        this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
        this.UpdateGroupPolicyDecisionPolicy = this.UpdateGroupPolicyDecisionPolicy.bind(this);
        this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.WithdrawProposal = this.WithdrawProposal.bind(this);
        this.Vote = this.Vote.bind(this);
        this.Exec = this.Exec.bind(this);
        this.LeaveGroup = this.LeaveGroup.bind(this);
    }
    var _proto = MsgClientImpl.prototype;
    _proto.CreateGroup = function CreateGroup(request) {
        var data = MsgCreateGroup.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroup", data);
        return promise.then(function(data) {
            return MsgCreateGroupResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateGroupMembers = function UpdateGroupMembers(request) {
        var data = MsgUpdateGroupMembers.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMembers", data);
        return promise.then(function(data) {
            return MsgUpdateGroupMembersResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateGroupAdmin = function UpdateGroupAdmin(request) {
        var data = MsgUpdateGroupAdmin.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupAdmin", data);
        return promise.then(function(data) {
            return MsgUpdateGroupAdminResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateGroupMetadata = function UpdateGroupMetadata(request) {
        var data = MsgUpdateGroupMetadata.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMetadata", data);
        return promise.then(function(data) {
            return MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.CreateGroupPolicy = function CreateGroupPolicy(request) {
        var data = MsgCreateGroupPolicy.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupPolicy", data);
        return promise.then(function(data) {
            return MsgCreateGroupPolicyResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.CreateGroupWithPolicy = function CreateGroupWithPolicy(request) {
        var data = MsgCreateGroupWithPolicy.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupWithPolicy", data);
        return promise.then(function(data) {
            return MsgCreateGroupWithPolicyResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateGroupPolicyAdmin = function UpdateGroupPolicyAdmin(request) {
        var data = MsgUpdateGroupPolicyAdmin.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyAdmin", data);
        return promise.then(function(data) {
            return MsgUpdateGroupPolicyAdminResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateGroupPolicyDecisionPolicy = function UpdateGroupPolicyDecisionPolicy(request) {
        var data = MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
        return promise.then(function(data) {
            return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateGroupPolicyMetadata = function UpdateGroupPolicyMetadata(request) {
        var data = MsgUpdateGroupPolicyMetadata.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyMetadata", data);
        return promise.then(function(data) {
            return MsgUpdateGroupPolicyMetadataResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.SubmitProposal = function SubmitProposal(request) {
        var data = MsgSubmitProposal.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "SubmitProposal", data);
        return promise.then(function(data) {
            return MsgSubmitProposalResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.WithdrawProposal = function WithdrawProposal(request) {
        var data = MsgWithdrawProposal.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "WithdrawProposal", data);
        return promise.then(function(data) {
            return MsgWithdrawProposalResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Vote = function Vote(request) {
        var data = MsgVote.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
        return promise.then(function(data) {
            return MsgVoteResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Exec = function Exec(request) {
        var data = MsgExec.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
        return promise.then(function(data) {
            return MsgExecResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.LeaveGroup = function LeaveGroup(request) {
        var data = MsgLeaveGroup.encode(request).finish();
        var promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
        return promise.then(function(data) {
            return MsgLeaveGroupResponse.decode(new _m0.Reader(data));
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
