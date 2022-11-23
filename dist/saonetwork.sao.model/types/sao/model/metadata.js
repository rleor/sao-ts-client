/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.model";
function createBaseMetadata() {
    return {
        dataId: "",
        owner: "",
        alias: "",
        groupId: "",
        orderId: 0,
        tags: [],
        cid: "",
        commits: [],
        extendInfo: "",
        update: false,
        commit: "",
        rule: ""
    };
}
export var Metadata = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.dataId !== "") {
            writer.uint32(10).string(message.dataId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.alias !== "") {
            writer.uint32(26).string(message.alias);
        }
        if (message.groupId !== "") {
            writer.uint32(34).string(message.groupId);
        }
        if (message.orderId !== 0) {
            writer.uint32(40).uint64(message.orderId);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(50).string(v);
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
            writer.uint32(58).string(message.cid);
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.commits[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                writer.uint32(66).string(v1);
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
        if (message.extendInfo !== "") {
            writer.uint32(74).string(message.extendInfo);
        }
        if (message.update === true) {
            writer.uint32(80).bool(message.update);
        }
        if (message.commit !== "") {
            writer.uint32(90).string(message.commit);
        }
        if (message.rule !== "") {
            writer.uint32(98).string(message.rule);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMetadata();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.dataId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.alias = reader.string();
                    break;
                case 4:
                    message.groupId = reader.string();
                    break;
                case 5:
                    message.orderId = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.tags.push(reader.string());
                    break;
                case 7:
                    message.cid = reader.string();
                    break;
                case 8:
                    message.commits.push(reader.string());
                    break;
                case 9:
                    message.extendInfo = reader.string();
                    break;
                case 10:
                    message.update = reader.bool();
                    break;
                case 11:
                    message.commit = reader.string();
                    break;
                case 12:
                    message.rule = reader.string();
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
            dataId: isSet(object.dataId) ? String(object.dataId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            alias: isSet(object.alias) ? String(object.alias) : "",
            groupId: isSet(object.groupId) ? String(object.groupId) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map(function(e) {
                return String(e);
            }) : [],
            cid: isSet(object.cid) ? String(object.cid) : "",
            commits: Array.isArray(object === null || object === void 0 ? void 0 : object.commits) ? object.commits.map(function(e) {
                return String(e);
            }) : [],
            extendInfo: isSet(object.extendInfo) ? String(object.extendInfo) : "",
            update: isSet(object.update) ? Boolean(object.update) : false,
            commit: isSet(object.commit) ? String(object.commit) : "",
            rule: isSet(object.rule) ? String(object.rule) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.dataId !== undefined && (obj.dataId = message.dataId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.alias !== undefined && (obj.alias = message.alias);
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        if (message.tags) {
            obj.tags = message.tags.map(function(e) {
                return e;
            });
        } else {
            obj.tags = [];
        }
        message.cid !== undefined && (obj.cid = message.cid);
        if (message.commits) {
            obj.commits = message.commits.map(function(e) {
                return e;
            });
        } else {
            obj.commits = [];
        }
        message.extendInfo !== undefined && (obj.extendInfo = message.extendInfo);
        message.update !== undefined && (obj.update = message.update);
        message.commit !== undefined && (obj.commit = message.commit);
        message.rule !== undefined && (obj.rule = message.rule);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_tags, _object_commits;
        var message = createBaseMetadata();
        var _object_dataId;
        message.dataId = (_object_dataId = object.dataId) !== null && _object_dataId !== void 0 ? _object_dataId : "";
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        var _object_alias;
        message.alias = (_object_alias = object.alias) !== null && _object_alias !== void 0 ? _object_alias : "";
        var _object_groupId;
        message.groupId = (_object_groupId = object.groupId) !== null && _object_groupId !== void 0 ? _object_groupId : "";
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        message.tags = ((_object_tags = object.tags) === null || _object_tags === void 0 ? void 0 : _object_tags.map(function(e) {
            return e;
        })) || [];
        var _object_cid;
        message.cid = (_object_cid = object.cid) !== null && _object_cid !== void 0 ? _object_cid : "";
        message.commits = ((_object_commits = object.commits) === null || _object_commits === void 0 ? void 0 : _object_commits.map(function(e) {
            return e;
        })) || [];
        var _object_extendInfo;
        message.extendInfo = (_object_extendInfo = object.extendInfo) !== null && _object_extendInfo !== void 0 ? _object_extendInfo : "";
        var _object_update;
        message.update = (_object_update = object.update) !== null && _object_update !== void 0 ? _object_update : false;
        var _object_commit;
        message.commit = (_object_commit = object.commit) !== null && _object_commit !== void 0 ? _object_commit : "";
        var _object_rule;
        message.rule = (_object_rule = object.rule) !== null && _object_rule !== void 0 ? _object_rule : "";
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
