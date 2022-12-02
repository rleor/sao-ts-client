/* eslint-disable */ function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.model";
function createBaseMsgClaim() {
    return {
        creator: "",
        data: []
    };
}
export var MsgClaim = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(18).string(v);
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
        var message = createBaseMsgClaim();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.data.push(reader.string());
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
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.data) {
            obj.data = message.data.map(function(e) {
                return e;
            });
        } else {
            obj.data = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_data;
        var message = createBaseMsgClaim();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        message.data = ((_object_data = object.data) === null || _object_data === void 0 ? void 0 : _object_data.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseMsgClaimResponse() {
    return {};
}
export var MsgClaimResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgClaimResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function fromJSON(_) {
        return {};
    },
    toJSON: function toJSON(_) {
        var obj = {};
        return obj;
    },
    fromPartial: function fromPartial(_) {
        var message = createBaseMsgClaimResponse();
        return message;
    }
};
export var MsgClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function MsgClientImpl(rpc) {
        _classCallCheck(this, MsgClientImpl);
        this.rpc = rpc;
        this.Claim = this.Claim.bind(this);
    }
    var _proto = MsgClientImpl.prototype;
    _proto.Claim = function Claim(request) {
        var data = MsgClaim.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.model.Msg", "Claim", data);
        return promise.then(function(data) {
            return MsgClaimResponse.decode(new _m0.Reader(data));
        });
    };
    return MsgClientImpl;
}();
function isSet(value) {
    return value !== null && value !== undefined;
}
