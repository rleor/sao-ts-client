/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseParams() {
    return {
        controllerEnabled: false
    };
}
export var Params = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.controllerEnabled === true) {
            writer.uint32(8).bool(message.controllerEnabled);
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
                    message.controllerEnabled = reader.bool();
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
            controllerEnabled: isSet(object.controllerEnabled) ? Boolean(object.controllerEnabled) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.controllerEnabled !== undefined && (obj.controllerEnabled = message.controllerEnabled);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseParams();
        var _object_controllerEnabled;
        message.controllerEnabled = (_object_controllerEnabled = object.controllerEnabled) !== null && _object_controllerEnabled !== void 0 ? _object_controllerEnabled : false;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
