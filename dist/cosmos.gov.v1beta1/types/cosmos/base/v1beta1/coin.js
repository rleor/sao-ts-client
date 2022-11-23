/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "cosmos.base.v1beta1";
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
export var Coin = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCoin();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseCoin();
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        return message;
    }
};
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
export var DecCoin = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecCoin();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDecCoin();
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        return message;
    }
};
function createBaseIntProto() {
    return {
        int: ""
    };
}
export var IntProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIntProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.int = reader.string();
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
            int: isSet(object.int) ? String(object.int) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.int !== undefined && (obj.int = message.int);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseIntProto();
        var _object_int;
        message.int = (_object_int = object.int) !== null && _object_int !== void 0 ? _object_int : "";
        return message;
    }
};
function createBaseDecProto() {
    return {
        dec: ""
    };
}
export var DecProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.dec !== "") {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.dec = reader.string();
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
            dec: isSet(object.dec) ? String(object.dec) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.dec !== undefined && (obj.dec = message.dec);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDecProto();
        var _object_dec;
        message.dec = (_object_dec = object.dec) !== null && _object_dec !== void 0 ? _object_dec : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
