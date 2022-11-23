/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { GrantAuthorization } from "./authz";
export var protobufPackage = "cosmos.authz.v1beta1";
function createBaseGenesisState() {
    return {
        authorization: []
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.authorization[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseGenesisState();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
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
            authorization: Array.isArray(object === null || object === void 0 ? void 0 : object.authorization) ? object.authorization.map(function(e) {
                return GrantAuthorization.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(function(e) {
                return e ? GrantAuthorization.toJSON(e) : undefined;
            });
        } else {
            obj.authorization = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_authorization;
        var message = createBaseGenesisState();
        message.authorization = ((_object_authorization = object.authorization) === null || _object_authorization === void 0 ? void 0 : _object_authorization.map(function(e) {
            return GrantAuthorization.fromPartial(e);
        })) || [];
        return message;
    }
};
