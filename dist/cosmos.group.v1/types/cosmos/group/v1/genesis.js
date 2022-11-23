/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
export var protobufPackage = "cosmos.group.v1";
function createBaseGenesisState() {
    return {
        groupSeq: 0,
        groups: [],
        groupMembers: [],
        groupPolicySeq: 0,
        groupPolicies: [],
        proposalSeq: 0,
        proposals: [],
        votes: []
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.groupSeq !== 0) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
            for(var _iterator1 = message.groupMembers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                GroupMember.encode(v1, writer.uint32(26).fork()).ldelim();
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
        if (message.groupPolicySeq !== 0) {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = message.groupPolicies[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                GroupPolicyInfo.encode(v2, writer.uint32(42).fork()).ldelim();
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
        if (message.proposalSeq !== 0) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
        try {
            for(var _iterator3 = message.proposals[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                var v3 = _step3.value;
                Proposal.encode(v3, writer.uint32(58).fork()).ldelim();
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
            for(var _iterator4 = message.votes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var v4 = _step4.value;
                Vote.encode(v4, writer.uint32(66).fork()).ldelim();
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
                    message.groupSeq = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.groupPolicySeq = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposalSeq = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
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
            groupSeq: isSet(object.groupSeq) ? Number(object.groupSeq) : 0,
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function(e) {
                return GroupInfo.fromJSON(e);
            }) : [],
            groupMembers: Array.isArray(object === null || object === void 0 ? void 0 : object.groupMembers) ? object.groupMembers.map(function(e) {
                return GroupMember.fromJSON(e);
            }) : [],
            groupPolicySeq: isSet(object.groupPolicySeq) ? Number(object.groupPolicySeq) : 0,
            groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies) ? object.groupPolicies.map(function(e) {
                return GroupPolicyInfo.fromJSON(e);
            }) : [],
            proposalSeq: isSet(object.proposalSeq) ? Number(object.proposalSeq) : 0,
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function(e) {
                return Proposal.fromJSON(e);
            }) : [],
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function(e) {
                return Vote.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.groupSeq !== undefined && (obj.groupSeq = Math.round(message.groupSeq));
        if (message.groups) {
            obj.groups = message.groups.map(function(e) {
                return e ? GroupInfo.toJSON(e) : undefined;
            });
        } else {
            obj.groups = [];
        }
        if (message.groupMembers) {
            obj.groupMembers = message.groupMembers.map(function(e) {
                return e ? GroupMember.toJSON(e) : undefined;
            });
        } else {
            obj.groupMembers = [];
        }
        message.groupPolicySeq !== undefined && (obj.groupPolicySeq = Math.round(message.groupPolicySeq));
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map(function(e) {
                return e ? GroupPolicyInfo.toJSON(e) : undefined;
            });
        } else {
            obj.groupPolicies = [];
        }
        message.proposalSeq !== undefined && (obj.proposalSeq = Math.round(message.proposalSeq));
        if (message.proposals) {
            obj.proposals = message.proposals.map(function(e) {
                return e ? Proposal.toJSON(e) : undefined;
            });
        } else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(function(e) {
                return e ? Vote.toJSON(e) : undefined;
            });
        } else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_groups, _object_groupMembers, _object_groupPolicies, _object_proposals, _object_votes;
        var message = createBaseGenesisState();
        var _object_groupSeq;
        message.groupSeq = (_object_groupSeq = object.groupSeq) !== null && _object_groupSeq !== void 0 ? _object_groupSeq : 0;
        message.groups = ((_object_groups = object.groups) === null || _object_groups === void 0 ? void 0 : _object_groups.map(function(e) {
            return GroupInfo.fromPartial(e);
        })) || [];
        message.groupMembers = ((_object_groupMembers = object.groupMembers) === null || _object_groupMembers === void 0 ? void 0 : _object_groupMembers.map(function(e) {
            return GroupMember.fromPartial(e);
        })) || [];
        var _object_groupPolicySeq;
        message.groupPolicySeq = (_object_groupPolicySeq = object.groupPolicySeq) !== null && _object_groupPolicySeq !== void 0 ? _object_groupPolicySeq : 0;
        message.groupPolicies = ((_object_groupPolicies = object.groupPolicies) === null || _object_groupPolicies === void 0 ? void 0 : _object_groupPolicies.map(function(e) {
            return GroupPolicyInfo.fromPartial(e);
        })) || [];
        var _object_proposalSeq;
        message.proposalSeq = (_object_proposalSeq = object.proposalSeq) !== null && _object_proposalSeq !== void 0 ? _object_proposalSeq : 0;
        message.proposals = ((_object_proposals = object.proposals) === null || _object_proposals === void 0 ? void 0 : _object_proposals.map(function(e) {
            return Proposal.fromPartial(e);
        })) || [];
        message.votes = ((_object_votes = object.votes) === null || _object_votes === void 0 ? void 0 : _object_votes.map(function(e) {
            return Vote.fromPartial(e);
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
