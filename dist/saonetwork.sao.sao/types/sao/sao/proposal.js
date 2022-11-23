/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.sao";
function createBaseProposal() {
    return {
        owner: "",
        provider: "",
        groupId: "",
        duration: 0,
        replica: 0,
        timeout: 0,
        alias: "",
        dataId: "",
        commitId: "",
        tags: [],
        cid: "",
        rule: "",
        isUpdate: false,
        extendInfo: ""
    };
}
export var Proposal = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        if (message.groupId !== "") {
            writer.uint32(26).string(message.groupId);
        }
        if (message.duration !== 0) {
            writer.uint32(32).int32(message.duration);
        }
        if (message.replica !== 0) {
            writer.uint32(40).int32(message.replica);
        }
        if (message.timeout !== 0) {
            writer.uint32(48).int32(message.timeout);
        }
        if (message.alias !== "") {
            writer.uint32(58).string(message.alias);
        }
        if (message.dataId !== "") {
            writer.uint32(66).string(message.dataId);
        }
        if (message.commitId !== "") {
            writer.uint32(74).string(message.commitId);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(82).string(v);
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
        if (message.cid !== "") {
            writer.uint32(90).string(message.cid);
        }
        if (message.rule !== "") {
            writer.uint32(98).string(message.rule);
        }
        if (message.isUpdate === true) {
            writer.uint32(104).bool(message.isUpdate);
        }
        if (message.extendInfo !== "") {
            writer.uint32(114).string(message.extendInfo);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.provider = reader.string();
                    break;
                case 3:
                    message.groupId = reader.string();
                    break;
                case 4:
                    message.duration = reader.int32();
                    break;
                case 5:
                    message.replica = reader.int32();
                    break;
                case 6:
                    message.timeout = reader.int32();
                    break;
                case 7:
                    message.alias = reader.string();
                    break;
                case 8:
                    message.dataId = reader.string();
                    break;
                case 9:
                    message.commitId = reader.string();
                    break;
                case 10:
                    message.tags.push(reader.string());
                    break;
                case 11:
                    message.cid = reader.string();
                    break;
                case 12:
                    message.rule = reader.string();
                    break;
                case 13:
                    message.isUpdate = reader.bool();
                    break;
                case 14:
                    message.extendInfo = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            provider: isSet(object.provider) ? String(object.provider) : "",
            groupId: isSet(object.groupId) ? String(object.groupId) : "",
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            replica: isSet(object.replica) ? Number(object.replica) : 0,
            timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
            alias: isSet(object.alias) ? String(object.alias) : "",
            dataId: isSet(object.dataId) ? String(object.dataId) : "",
            commitId: isSet(object.commitId) ? String(object.commitId) : "",
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map(function(e) {
                return String(e);
            }) : [],
            cid: isSet(object.cid) ? String(object.cid) : "",
            rule: isSet(object.rule) ? String(object.rule) : "",
            isUpdate: isSet(object.isUpdate) ? Boolean(object.isUpdate) : false,
            extendInfo: isSet(object.extendInfo) ? String(object.extendInfo) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.provider !== undefined && (obj.provider = message.provider);
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.duration !== undefined && (obj.duration = Math.round(message.duration));
        message.replica !== undefined && (obj.replica = Math.round(message.replica));
        message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
        message.alias !== undefined && (obj.alias = message.alias);
        message.dataId !== undefined && (obj.dataId = message.dataId);
        message.commitId !== undefined && (obj.commitId = message.commitId);
        if (message.tags) {
            obj.tags = message.tags.map(function(e) {
                return e;
            });
        } else {
            obj.tags = [];
        }
        message.cid !== undefined && (obj.cid = message.cid);
        message.rule !== undefined && (obj.rule = message.rule);
        message.isUpdate !== undefined && (obj.isUpdate = message.isUpdate);
        message.extendInfo !== undefined && (obj.extendInfo = message.extendInfo);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_tags;
        var message = createBaseProposal();
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        var _object_provider;
        message.provider = (_object_provider = object.provider) !== null && _object_provider !== void 0 ? _object_provider : "";
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : "";
        var _object_duration;
        message.duration = (_object_duration = object.duration) !== null && _object_duration !== void 0 ? _object_duration : 0;
        var _object_replica;
        message.replica = (_object_replica = object.replica) !== null && _object_replica !== void 0 ? _object_replica : 0;
        var _object_timeout;
        message.timeout = (_object_timeout = object.timeout) !== null && _object_timeout !== void 0 ? _object_timeout : 0;
        var _object_alias;
        message.alias = (_object_alias = object.alias) !== null && _object_alias !== void 0 ? _object_alias : "";
        var _object_dataId;
        message.dataId = (_object_dataId = object.dataId) !== null && _object_dataId !== void 0 ? _object_dataId : "";
        var _object_commitId;
        message.commitId = (_object_commitId = object.commitId) !== null && _object_commitId !== void 0 ? _object_commitId : "";
        message.tags = ((_object_tags = object.tags) === null || _object_tags === void 0 ? void 0 : _object_tags.map(function(e) {
            return e;
        })) || [];
        var _object_cid;
        message.cid = (_object_cid = object.cid) !== null && _object_cid !== void 0 ? _object_cid : "";
        var _object_rule;
        message.rule = (_object_rule = object.rule) !== null && _object_rule !== void 0 ? _object_rule : "";
        var _object_isUpdate;
        message.isUpdate = (_object_isUpdate = object.isUpdate) !== null && _object_isUpdate !== void 0 ? _object_isUpdate : false;
        var _object_extendInfo;
        message.extendInfo = (_object_extendInfo = object.extendInfo) !== null && _object_extendInfo !== void 0 ? _object_extendInfo : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
