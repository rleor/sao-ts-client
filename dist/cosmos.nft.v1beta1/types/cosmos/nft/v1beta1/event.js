/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "cosmos.nft.v1beta1";
function createBaseEventSend() {
    return {
        classId: "",
        id: "",
        sender: "",
        receiver: ""
    };
}
export var EventSend = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventSend();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventSend();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : "";
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        var _object_receiver;
        message.receiver = (_object_receiver = object.receiver) !== null && _object_receiver !== void 0 ? _object_receiver : "";
        return message;
    }
};
function createBaseEventMint() {
    return {
        classId: "",
        id: "",
        owner: ""
    };
}
export var EventMint = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventMint();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventMint();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : "";
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        return message;
    }
};
function createBaseEventBurn() {
    return {
        classId: "",
        id: "",
        owner: ""
    };
}
export var EventBurn = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventBurn();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventBurn();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : "";
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
