/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.did";
function createBasePubKey() {
    return {
        name: "",
        value: ""
    };
}
export var PubKey = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePubKey();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBasePubKey();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        var _object_value;
        message.value = (_object_value = object.value) !== null && _object_value !== void 0 ? _object_value : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
