/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.node";
function createBaseNode() {
    return {
        creator: "",
        peer: "",
        reputation: 0
    };
}
export var Node = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.peer !== "") {
            writer.uint32(18).string(message.peer);
        }
        if (message.reputation !== 0) {
            writer.uint32(29).float(message.reputation);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNode();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.peer = reader.string();
                    break;
                case 3:
                    message.reputation = reader.float();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            peer: isSet(object.peer) ? String(object.peer) : "",
            reputation: isSet(object.reputation) ? Number(object.reputation) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.peer !== undefined && (obj.peer = message.peer);
        message.reputation !== undefined && (obj.reputation = message.reputation);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseNode();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_peer;
        message.peer = (_object_peer = object.peer) !== null && _object_peer !== void 0 ? _object_peer : "";
        var _object_reputation;
        message.reputation = (_object_reputation = object.reputation) !== null && _object_reputation !== void 0 ? _object_reputation : 0;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
