/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.sao";
function createBaseJwsSignature() {
    return {
        protected: "",
        signature: ""
    };
}
export var JwsSignature = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.protected !== "") {
            writer.uint32(10).string(message.protected);
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseJwsSignature();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.protected = reader.string();
                    break;
                case 2:
                    message.signature = reader.string();
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
            protected: isSet(object.protected) ? String(object.protected) : "",
            signature: isSet(object.signature) ? String(object.signature) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.protected !== undefined && (obj.protected = message.protected);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseJwsSignature();
        var _object_protected;
        message.protected = (_object_protected = object.protected) !== null && _object_protected !== void 0 ? _object_protected : "";
        var _object_signature;
        message.signature = (_object_signature = object.signature) !== null && _object_signature !== void 0 ? _object_signature : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
