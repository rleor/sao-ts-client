/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.model";
function createBaseModel() {
    return {
        key: "",
        data: ""
    };
}
export var Model = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.data !== "") {
            writer.uint32(18).string(message.data);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModel();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.data = reader.string();
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
            data: isSet(object.data) ? String(object.data) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseModel();
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        var _object_data;
        message.data = (_object_data = object.data) !== null && _object_data !== void 0 ? _object_data : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
