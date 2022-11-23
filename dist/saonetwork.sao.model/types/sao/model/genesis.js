/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { Metadata } from "./metadata";
import { Model } from "./model";
import { Params } from "./params";
export var protobufPackage = "saonetwork.sao.model";
function createBaseGenesisState() {
    return {
        params: undefined,
        metadataList: [],
        modelList: []
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.metadataList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Metadata.encode(v, writer.uint32(18).fork()).ldelim();
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
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.modelList[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Model.encode(v1, writer.uint32(26).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
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
                    message.metadataList.push(Metadata.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.modelList.push(Model.decode(reader, reader.uint32()));
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
            metadataList: Array.isArray(object === null || object === void 0 ? void 0 : object.metadataList) ? object.metadataList.map(function(e) {
                return Metadata.fromJSON(e);
            }) : [],
            modelList: Array.isArray(object === null || object === void 0 ? void 0 : object.modelList) ? object.modelList.map(function(e) {
                return Model.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.metadataList) {
            obj.metadataList = message.metadataList.map(function(e) {
                return e ? Metadata.toJSON(e) : undefined;
            });
        } else {
            obj.metadataList = [];
        }
        if (message.modelList) {
            obj.modelList = message.modelList.map(function(e) {
                return e ? Model.toJSON(e) : undefined;
            });
        } else {
            obj.modelList = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_metadataList, _object_modelList;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.metadataList = ((_object_metadataList = object.metadataList) === null || _object_metadataList === void 0 ? void 0 : _object_metadataList.map(function(e) {
            return Metadata.fromPartial(e);
        })) || [];
        message.modelList = ((_object_modelList = object.modelList) === null || _object_modelList === void 0 ? void 0 : _object_modelList.map(function(e) {
            return Model.fromPartial(e);
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
