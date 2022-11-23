/* eslint-disable */ function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Metadata } from "./metadata";
import { Model } from "./model";
import { Params } from "./params";
import { ShardMeta } from "./shard_meta";
export var protobufPackage = "saonetwork.sao.model";
function createBaseQueryParamsRequest() {
    return {};
}
export var QueryParamsRequest = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
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
        var message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
export var QueryParamsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryGetMetadataRequest() {
    return {
        dataId: ""
    };
}
export var QueryGetMetadataRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.dataId !== "") {
            writer.uint32(10).string(message.dataId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetMetadataRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.dataId = reader.string();
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
            dataId: isSet(object.dataId) ? String(object.dataId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.dataId !== undefined && (obj.dataId = message.dataId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetMetadataRequest();
        var _object_dataId;
        message.dataId = (_object_dataId = object.dataId) !== null && _object_dataId !== void 0 ? _object_dataId : "";
        return message;
    }
};
function createBaseQueryGetMetadataResponse() {
    return {
        metadata: undefined,
        orderId: 0,
        shards: {}
    };
}
export var QueryGetMetadataResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderId !== 0) {
            writer.uint32(16).uint64(message.orderId);
        }
        Object.entries(message.shards).forEach(function(param) {
            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
            QueryGetMetadataResponse_ShardsEntry.encode({
                key: key,
                value: value
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetMetadataResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderId = longToNumber(reader.uint64());
                    break;
                case 3:
                    var entry3 = QueryGetMetadataResponse_ShardsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.shards[entry3.key] = entry3.value;
                    }
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
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
            shards: isObject(object.shards) ? Object.entries(object.shards).reduce(function(acc, param) {
                var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
                acc[key] = ShardMeta.fromJSON(value);
                return acc;
            }, {}) : {}
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
        obj.shards = {};
        if (message.shards) {
            Object.entries(message.shards).forEach(function(param) {
                var _param = _slicedToArray(param, 2), k = _param[0], v = _param[1];
                obj.shards[k] = ShardMeta.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetMetadataResponse();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        var _object_orderId;
        message.orderId = (_object_orderId = object.orderId) !== null && _object_orderId !== void 0 ? _object_orderId : 0;
        var _object_shards;
        message.shards = Object.entries((_object_shards = object.shards) !== null && _object_shards !== void 0 ? _object_shards : {}).reduce(function(acc, param) {
            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
            if (value !== undefined) {
                acc[key] = ShardMeta.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseQueryGetMetadataResponse_ShardsEntry() {
    return {
        key: "",
        value: undefined
    };
}
export var QueryGetMetadataResponse_ShardsEntry = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            ShardMeta.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetMetadataResponse_ShardsEntry();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = ShardMeta.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? ShardMeta.fromJSON(object.value) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? ShardMeta.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetMetadataResponse_ShardsEntry();
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        message.value = object.value !== undefined && object.value !== null ? ShardMeta.fromPartial(object.value) : undefined;
        return message;
    }
};
function createBaseQueryAllMetadataRequest() {
    return {
        pagination: undefined
    };
}
export var QueryAllMetadataRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMetadataRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryAllMetadataRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllMetadataResponse() {
    return {
        metadata: [],
        pagination: undefined
    };
}
export var QueryAllMetadataResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.metadata[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Metadata.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMetadataResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.metadata.push(Metadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata.map(function(e) {
                return Metadata.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map(function(e) {
                return e ? Metadata.toJSON(e) : undefined;
            });
        } else {
            obj.metadata = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_metadata;
        var message = createBaseQueryAllMetadataResponse();
        message.metadata = ((_object_metadata = object.metadata) === null || _object_metadata === void 0 ? void 0 : _object_metadata.map(function(e) {
            return Metadata.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetModelRequest() {
    return {
        key: ""
    };
}
export var QueryGetModelRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetModelRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key = reader.string();
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
            key: isSet(object.key) ? String(object.key) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetModelRequest();
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        return message;
    }
};
function createBaseQueryGetModelResponse() {
    return {
        model: undefined
    };
}
export var QueryGetModelResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.model !== undefined) {
            Model.encode(message.model, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetModelResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.model = Model.decode(reader, reader.uint32());
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
            model: isSet(object.model) ? Model.fromJSON(object.model) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.model !== undefined && (obj.model = message.model ? Model.toJSON(message.model) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetModelResponse();
        message.model = object.model !== undefined && object.model !== null ? Model.fromPartial(object.model) : undefined;
        return message;
    }
};
function createBaseQueryAllModelRequest() {
    return {
        pagination: undefined
    };
}
export var QueryAllModelRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllModelRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryAllModelRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllModelResponse() {
    return {
        model: [],
        pagination: undefined
    };
}
export var QueryAllModelResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.model[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Model.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllModelResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.model.push(Model.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            model: Array.isArray(object === null || object === void 0 ? void 0 : object.model) ? object.model.map(function(e) {
                return Model.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.model) {
            obj.model = message.model.map(function(e) {
                return e ? Model.toJSON(e) : undefined;
            });
        } else {
            obj.model = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_model;
        var message = createBaseQueryAllModelResponse();
        message.model = ((_object_model = object.model) === null || _object_model === void 0 ? void 0 : _object_model.map(function(e) {
            return Model.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
export var QueryClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function QueryClientImpl(rpc) {
        _classCallCheck(this, QueryClientImpl);
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Metadata = this.Metadata.bind(this);
        this.MetadataAll = this.MetadataAll.bind(this);
        this.Model = this.Model.bind(this);
        this.ModelAll = this.ModelAll.bind(this);
    }
    var _proto = QueryClientImpl.prototype;
    _proto.Params = function Params(request) {
        var data = QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.model.Query", "Params", data);
        return promise.then(function(data) {
            return QueryParamsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Metadata = function Metadata(request) {
        var data = QueryGetMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.model.Query", "Metadata", data);
        return promise.then(function(data) {
            return QueryGetMetadataResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.MetadataAll = function MetadataAll(request) {
        var data = QueryAllMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.model.Query", "MetadataAll", data);
        return promise.then(function(data) {
            return QueryAllMetadataResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Model = function Model(request) {
        var data = QueryGetModelRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.model.Query", "Model", data);
        return promise.then(function(data) {
            return QueryGetModelResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ModelAll = function ModelAll(request) {
        var data = QueryAllModelRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.model.Query", "ModelAll", data);
        return promise.then(function(data) {
            return QueryAllModelResponse.decode(new _m0.Reader(data));
        });
    };
    return QueryClientImpl;
}();
var globalThis = function() {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
}();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
