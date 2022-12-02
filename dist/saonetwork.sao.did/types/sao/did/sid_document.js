/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { PubKey } from "./pub_key";
export var protobufPackage = "saonetwork.sao.did";
function createBaseSidDocument() {
    return {
        versionId: "",
        keys: []
    };
}
export var SidDocument = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.versionId !== "") {
            writer.uint32(10).string(message.versionId);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                PubKey.encode(v, writer.uint32(18).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
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
                    message.keys.push(PubKey.decode(reader, reader.uint32()));
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
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function(e) {
                return PubKey.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        if (message.keys) {
            obj.keys = message.keys.map(function(e) {
                return e ? PubKey.toJSON(e) : undefined;
            });
        } else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_keys;
        var message = createBaseSidDocument();
        var _object_versionId;
        message.versionId = (_object_versionId = object.versionId) !== null && _object_versionId !== void 0 ? _object_versionId : "";
        message.keys = ((_object_keys = object.keys) === null || _object_keys === void 0 ? void 0 : _object_keys.map(function(e) {
            return PubKey.fromPartial(e);
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
