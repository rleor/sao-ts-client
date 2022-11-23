/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { Node } from "./node";
import { Params } from "./params";
import { Pool } from "./pool";
export var protobufPackage = "saonetwork.sao.node";
function createBaseGenesisState() {
    return {
        params: undefined,
        pool: undefined,
        nodeList: []
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.nodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Node.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pool = Pool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nodeList.push(Node.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
            nodeList: Array.isArray(object === null || object === void 0 ? void 0 : object.nodeList) ? object.nodeList.map(function(e) {
                return Node.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
        if (message.nodeList) {
            obj.nodeList = message.nodeList.map(function(e) {
                return e ? Node.toJSON(e) : undefined;
            });
        } else {
            obj.nodeList = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_nodeList;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
        message.nodeList = ((_object_nodeList = object.nodeList) === null || _object_nodeList === void 0 ? void 0 : _object_nodeList.map(function(e) {
            return Node.fromPartial(e);
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
