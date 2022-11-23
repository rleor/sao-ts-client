/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "cosmos.authz.v1beta1";
function createBaseEventGrant() {
    return {
        msgTypeUrl: "",
        granter: "",
        grantee: ""
    };
}
export var EventGrant = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventGrant();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventGrant();
        var _object_msgTypeUrl;
        message.msgTypeUrl = (_object_msgTypeUrl = object.msgTypeUrl) !== null && _object_msgTypeUrl !== void 0 ? _object_msgTypeUrl : "";
        var _object_granter;
        message.granter = (_object_granter = object.granter) !== null && _object_granter !== void 0 ? _object_granter : "";
        var _object_grantee;
        message.grantee = (_object_grantee = object.grantee) !== null && _object_grantee !== void 0 ? _object_grantee : "";
        return message;
    }
};
function createBaseEventRevoke() {
    return {
        msgTypeUrl: "",
        granter: "",
        grantee: ""
    };
}
export var EventRevoke = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventRevoke();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEventRevoke();
        var _object_msgTypeUrl;
        message.msgTypeUrl = (_object_msgTypeUrl = object.msgTypeUrl) !== null && _object_msgTypeUrl !== void 0 ? _object_msgTypeUrl : "";
        var _object_granter;
        message.granter = (_object_granter = object.granter) !== null && _object_granter !== void 0 ? _object_granter : "";
        var _object_grantee;
        message.grantee = (_object_grantee = object.grantee) !== null && _object_grantee !== void 0 ? _object_grantee : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
