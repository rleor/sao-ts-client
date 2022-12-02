/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.did";
function createBaseSidDidDocument() {
    return {
        versionId: "",
        keys: ""
    };
}
export var SidDidDocument = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.versionId !== "") {
            writer.uint32(10).string(message.versionId);
        }
        if (message.keys !== "") {
            writer.uint32(18).string(message.keys);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSidDidDocument();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.keys = reader.string();
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
            keys: isSet(object.keys) ? String(object.keys) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.keys !== undefined && (obj.keys = message.keys);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseSidDidDocument();
        var _object_versionId;
        message.versionId = (_object_versionId = object.versionId) !== null && _object_versionId !== void 0 ? _object_versionId : "";
        var _object_keys;
        message.keys = (_object_keys = object.keys) !== null && _object_keys !== void 0 ? _object_keys : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
