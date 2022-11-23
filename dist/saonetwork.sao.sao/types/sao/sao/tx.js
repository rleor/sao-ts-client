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
import { JwsSignature } from "./jws_signature";
import { Proposal } from "./proposal";
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
