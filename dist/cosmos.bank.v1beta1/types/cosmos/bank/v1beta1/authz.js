/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
export var protobufPackage = "cosmos.bank.v1beta1";
function createBaseSendAuthorization() {
    return {
        spendLimit: []
    };
}
export var SendAuthorization = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.spendLimit[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseSendAuthorization();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.spendLimit.push(Coin.decode(reader, reader.uint32()));
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
            spendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.spendLimit) ? object.spendLimit.map(function(e) {
                return Coin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map(function(e) {
                return e ? Coin.toJSON(e) : undefined;
            });
        } else {
            obj.spendLimit = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_spendLimit;
        var message = createBaseSendAuthorization();
        message.spendLimit = ((_object_spendLimit = object.spendLimit) === null || _object_spendLimit === void 0 ? void 0 : _object_spendLimit.map(function(e) {
            return Coin.fromPartial(e);
        })) || [];
        return message;
    }
};
