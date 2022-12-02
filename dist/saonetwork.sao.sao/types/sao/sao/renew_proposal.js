/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.sao";
function createBaseRenewProposal() {
    return {
        owner: "",
        duration: 0,
        timeout: 0,
        data: []
    };
}
export var RenewProposal = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== 0) {
            writer.uint32(16).int32(message.duration);
        }
        if (message.timeout !== 0) {
            writer.uint32(24).int32(message.timeout);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(34).string(v);
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
        var message = createBaseRenewProposal();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = reader.int32();
                    break;
                case 3:
                    message.timeout = reader.int32();
                    break;
                case 4:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = Math.round(message.duration));
        message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
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
        var message = createBaseRenewProposal();
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        var _object_duration;
        message.duration = (_object_duration = object.duration) !== null && _object_duration !== void 0 ? _object_duration : 0;
        var _object_timeout;
        message.timeout = (_object_timeout = object.timeout) !== null && _object_timeout !== void 0 ? _object_timeout : 0;
        message.data = ((_object_data = object.data) === null || _object_data === void 0 ? void 0 : _object_data.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
