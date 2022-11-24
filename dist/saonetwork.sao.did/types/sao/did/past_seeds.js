/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.did";
function createBasePastSeeds() {
    return {
        did: "",
        seeds: []
    };
}
export var PastSeeds = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.seeds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
        var message = createBasePastSeeds();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.did = reader.string();
                    break;
                case 2:
                    message.seeds.push(reader.string());
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
            did: isSet(object.did) ? String(object.did) : "",
            seeds: Array.isArray(object === null || object === void 0 ? void 0 : object.seeds) ? object.seeds.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.did !== undefined && (obj.did = message.did);
        if (message.seeds) {
            obj.seeds = message.seeds.map(function(e) {
                return e;
            });
        } else {
            obj.seeds = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_seeds;
        var message = createBasePastSeeds();
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        message.seeds = ((_object_seeds = object.seeds) === null || _object_seeds === void 0 ? void 0 : _object_seeds.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
