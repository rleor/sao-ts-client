/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.did";
function createBaseSidDocument() {
    return {
        versionId: "",
        signing: "",
        encryption: ""
    };
}
export var SidDocument = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.versionId !== "") {
            writer.uint32(10).string(message.versionId);
        }
        if (message.signing !== "") {
            writer.uint32(18).string(message.signing);
        }
        if (message.encryption !== "") {
            writer.uint32(26).string(message.encryption);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSidDocument();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.signing = reader.string();
                    break;
                case 3:
                    message.encryption = reader.string();
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
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
            signing: isSet(object.signing) ? String(object.signing) : "",
            encryption: isSet(object.encryption) ? String(object.encryption) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.signing !== undefined && (obj.signing = message.signing);
        message.encryption !== undefined && (obj.encryption = message.encryption);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseSidDocument();
        var _object_versionId;
        message.versionId = (_object_versionId = object.versionId) !== null && _object_versionId !== void 0 ? _object_versionId : "";
        var _object_signing;
        message.signing = (_object_signing = object.signing) !== null && _object_signing !== void 0 ? _object_signing : "";
        var _object_encryption;
        message.encryption = (_object_encryption = object.encryption) !== null && _object_encryption !== void 0 ? _object_encryption : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
