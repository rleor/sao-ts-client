/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "ibc.applications.transfer.v1";
function createBaseDenomTrace() {
    return {
        path: "",
        baseDenom: ""
    };
}
export var DenomTrace = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.baseDenom !== "") {
            writer.uint32(18).string(message.baseDenom);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDenomTrace();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.baseDenom = reader.string();
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
            path: isSet(object.path) ? String(object.path) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDenomTrace();
        var _object_path;
        message.path = (_object_path = object.path) !== null && _object_path !== void 0 ? _object_path : "";
        var _object_baseDenom;
        message.baseDenom = (_object_baseDenom = object.baseDenom) !== null && _object_baseDenom !== void 0 ? _object_baseDenom : "";
        return message;
    }
};
function createBaseParams() {
    return {
        sendEnabled: false,
        receiveEnabled: false
    };
}
export var Params = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.sendEnabled === true) {
            writer.uint32(8).bool(message.sendEnabled);
        }
        if (message.receiveEnabled === true) {
            writer.uint32(16).bool(message.receiveEnabled);
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
                    message.sendEnabled = reader.bool();
                    break;
                case 2:
                    message.receiveEnabled = reader.bool();
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
            sendEnabled: isSet(object.sendEnabled) ? Boolean(object.sendEnabled) : false,
            receiveEnabled: isSet(object.receiveEnabled) ? Boolean(object.receiveEnabled) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.sendEnabled !== undefined && (obj.sendEnabled = message.sendEnabled);
        message.receiveEnabled !== undefined && (obj.receiveEnabled = message.receiveEnabled);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseParams();
        var _object_sendEnabled;
        message.sendEnabled = (_object_sendEnabled = object.sendEnabled) !== null && _object_sendEnabled !== void 0 ? _object_sendEnabled : false;
        var _object_receiveEnabled;
        message.receiveEnabled = (_object_receiveEnabled = object.receiveEnabled) !== null && _object_receiveEnabled !== void 0 ? _object_receiveEnabled : false;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
