/* eslint-disable */ function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { JwsSignature } from "./jws_signature";
import { Proposal } from "./proposal";
import { RenewProposal } from "./renew_proposal";
export var protobufPackage = "saonetwork.sao.sao";
function createBaseMsgCancel() {
    return {
        creator: "",
        orderId: 0
    };
}
export var MsgCancel = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.orderId !== 0) {
            writer.uint32(16).uint64(message.orderId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancel();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.orderId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgCancel();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        return message;
    }
};
function createBaseMsgCancelResponse() {
    return {};
}
export var MsgCancelResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelResponse();
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
        var message = createBaseMsgCancelResponse();
        return message;
    }
};
function createBaseMsgComplete() {
    return {
        creator: "",
        orderId: 0,
        cid: "",
        size: 0
    };
}
export var MsgComplete = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.orderId !== 0) {
            writer.uint32(16).uint64(message.orderId);
        }
        if (message.cid !== "") {
            writer.uint32(26).string(message.cid);
        }
        if (message.size !== 0) {
            writer.uint32(32).int32(message.size);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgComplete();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.orderId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.cid = reader.string();
                    break;
                case 4:
                    message.size = reader.int32();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
            cid: isSet(object.cid) ? String(object.cid) : "",
            size: isSet(object.size) ? Number(object.size) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        message.cid !== undefined && (obj.cid = message.cid);
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgComplete();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        var _object_cid;
        message.cid = (_object_cid = object.cid) !== null && _object_cid !== void 0 ? _object_cid : "";
        var _object_size;
        message.size = (_object_size = object.size) !== null && _object_size !== void 0 ? _object_size : 0;
        return message;
    }
};
function createBaseMsgCompleteResponse() {
    return {};
}
export var MsgCompleteResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCompleteResponse();
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
        var message = createBaseMsgCompleteResponse();
        return message;
    }
};
function createBaseMsgReject() {
    return {
        creator: "",
        orderId: 0
    };
}
export var MsgReject = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.orderId !== 0) {
            writer.uint32(16).uint64(message.orderId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgReject();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.orderId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgReject();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        return message;
    }
};
function createBaseMsgRejectResponse() {
    return {};
}
export var MsgRejectResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRejectResponse();
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
        var message = createBaseMsgRejectResponse();
        return message;
    }
};
function createBaseMsgTerminate() {
    return {
        creator: "",
        orderId: 0
    };
}
export var MsgTerminate = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.orderId !== 0) {
            writer.uint32(16).uint64(message.orderId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTerminate();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.orderId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgTerminate();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        return message;
    }
};
function createBaseMsgTerminateResponse() {
    return {};
}
export var MsgTerminateResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTerminateResponse();
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
        var message = createBaseMsgTerminateResponse();
        return message;
    }
};
function createBaseMsgReady() {
    return {
        creator: "",
        orderId: 0
    };
}
export var MsgReady = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.orderId !== 0) {
            writer.uint32(16).uint64(message.orderId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgReady();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.orderId = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgReady();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        return message;
    }
};
function createBaseMsgReadyResponse() {
    return {};
}
export var MsgReadyResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgReadyResponse();
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
        var message = createBaseMsgReadyResponse();
        return message;
    }
};
function createBaseMsgStore() {
    return {
        creator: "",
        proposal: undefined,
        jwsSignature: undefined
    };
}
export var MsgStore = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(18).fork()).ldelim();
        }
        if (message.jwsSignature !== undefined) {
            JwsSignature.encode(message.jwsSignature, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgStore();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.proposal = Proposal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jwsSignature = JwsSignature.decode(reader, reader.uint32());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
            jwsSignature: isSet(object.jwsSignature) ? JwsSignature.fromJSON(object.jwsSignature) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
        message.jwsSignature !== undefined && (obj.jwsSignature = message.jwsSignature ? JwsSignature.toJSON(message.jwsSignature) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgStore();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
        message.jwsSignature = object.jwsSignature !== undefined && object.jwsSignature !== null ? JwsSignature.fromPartial(object.jwsSignature) : undefined;
        return message;
    }
};
function createBaseMsgStoreResponse() {
    return {
        orderId: 0
    };
}
export var MsgStoreResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.orderId !== 0) {
            writer.uint32(8).uint64(message.orderId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgStoreResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.orderId = longToNumber(reader.uint64());
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
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgStoreResponse();
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        return message;
    }
};
function createBaseMsgRenew() {
    return {
        creator: "",
        proposal: undefined,
        jwsSignature: undefined
    };
}
export var MsgRenew = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.proposal !== undefined) {
            RenewProposal.encode(message.proposal, writer.uint32(18).fork()).ldelim();
        }
        if (message.jwsSignature !== undefined) {
            JwsSignature.encode(message.jwsSignature, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRenew();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.proposal = RenewProposal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jwsSignature = JwsSignature.decode(reader, reader.uint32());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            proposal: isSet(object.proposal) ? RenewProposal.fromJSON(object.proposal) : undefined,
            jwsSignature: isSet(object.jwsSignature) ? JwsSignature.fromJSON(object.jwsSignature) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.proposal !== undefined && (obj.proposal = message.proposal ? RenewProposal.toJSON(message.proposal) : undefined);
        message.jwsSignature !== undefined && (obj.jwsSignature = message.jwsSignature ? JwsSignature.toJSON(message.jwsSignature) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgRenew();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        message.proposal = object.proposal !== undefined && object.proposal !== null ? RenewProposal.fromPartial(object.proposal) : undefined;
        message.jwsSignature = object.jwsSignature !== undefined && object.jwsSignature !== null ? JwsSignature.fromPartial(object.jwsSignature) : undefined;
        return message;
    }
};
function createBaseMsgRenewResponse() {
    return {
        result: {}
    };
}
export var MsgRenewResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        Object.entries(message.result).forEach(function(param) {
            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
            MsgRenewResponse_ResultEntry.encode({
                key: key,
                value: value
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRenewResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    var entry1 = MsgRenewResponse_ResultEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.result[entry1.key] = entry1.value;
                    }
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
            result: isObject(object.result) ? Object.entries(object.result).reduce(function(acc, param) {
                var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
                acc[key] = String(value);
                return acc;
            }, {}) : {}
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        obj.result = {};
        if (message.result) {
            Object.entries(message.result).forEach(function(param) {
                var _param = _slicedToArray(param, 2), k = _param[0], v = _param[1];
                obj.result[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgRenewResponse();
        var _object_result;
        message.result = Object.entries((_object_result = object.result) !== null && _object_result !== void 0 ? _object_result : {}).reduce(function(acc, param) {
            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseMsgRenewResponse_ResultEntry() {
    return {
        key: "",
        value: ""
    };
}
export var MsgRenewResponse_ResultEntry = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRenewResponse_ResultEntry();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgRenewResponse_ResultEntry();
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        var _object_value;
        message.value = (_object_value = object.value) !== null && _object_value !== void 0 ? _object_value : "";
        return message;
    }
};
export var MsgClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function MsgClientImpl(rpc) {
        _classCallCheck(this, MsgClientImpl);
        this.rpc = rpc;
        this.Store = this.Store.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.Complete = this.Complete.bind(this);
        this.Reject = this.Reject.bind(this);
        this.Terminate = this.Terminate.bind(this);
        this.Ready = this.Ready.bind(this);
        this.Renew = this.Renew.bind(this);
    }
    var _proto = MsgClientImpl.prototype;
    _proto.Store = function Store(request) {
        var data = MsgStore.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.sao.Msg", "Store", data);
        return promise.then(function(data) {
            return MsgStoreResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Cancel = function Cancel(request) {
        var data = MsgCancel.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.sao.Msg", "Cancel", data);
        return promise.then(function(data) {
            return MsgCancelResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Complete = function Complete(request) {
        var data = MsgComplete.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.sao.Msg", "Complete", data);
        return promise.then(function(data) {
            return MsgCompleteResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Reject = function Reject(request) {
        var data = MsgReject.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.sao.Msg", "Reject", data);
        return promise.then(function(data) {
            return MsgRejectResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Terminate = function Terminate(request) {
        var data = MsgTerminate.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.sao.Msg", "Terminate", data);
        return promise.then(function(data) {
            return MsgTerminateResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Ready = function Ready(request) {
        var data = MsgReady.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.sao.Msg", "Ready", data);
        return promise.then(function(data) {
            return MsgReadyResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Renew = function Renew(request) {
        var data = MsgRenew.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.sao.Msg", "Renew", data);
        return promise.then(function(data) {
            return MsgRenewResponse.decode(new _m0.Reader(data));
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
