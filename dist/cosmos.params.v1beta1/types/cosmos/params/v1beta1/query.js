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
import { ParamChange } from "./params";
export var protobufPackage = "cosmos.params.v1beta1";
function createBaseQueryParamsRequest() {
    return {
        subspace: "",
        key: ""
    };
}
export var QueryParamsRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
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
            subspace: isSet(object.subspace) ? String(object.subspace) : "",
            key: isSet(object.key) ? String(object.key) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryParamsRequest();
        var _object_subspace;
        message.subspace = (_object_subspace = object.subspace) !== null && _object_subspace !== void 0 ? _object_subspace : "";
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        param: undefined
    };
}
export var QueryParamsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.param !== undefined) {
            ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
                    message.param = ParamChange.decode(reader, reader.uint32());
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
            param: isSet(object.param) ? ParamChange.fromJSON(object.param) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.param !== undefined && (obj.param = message.param ? ParamChange.toJSON(message.param) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryParamsResponse();
        message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
        return message;
    }
};
function createBaseQuerySubspacesRequest() {
    return {};
}
export var QuerySubspacesRequest = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySubspacesRequest();
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
        var message = createBaseQuerySubspacesRequest();
        return message;
    }
};
function createBaseQuerySubspacesResponse() {
    return {
        subspaces: []
    };
}
export var QuerySubspacesResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.subspaces[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Subspace.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseQuerySubspacesResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.subspaces.push(Subspace.decode(reader, reader.uint32()));
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
            subspaces: Array.isArray(object === null || object === void 0 ? void 0 : object.subspaces) ? object.subspaces.map(function(e) {
                return Subspace.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(function(e) {
                return e ? Subspace.toJSON(e) : undefined;
            });
        } else {
            obj.subspaces = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_subspaces;
        var message = createBaseQuerySubspacesResponse();
        message.subspaces = ((_object_subspaces = object.subspaces) === null || _object_subspaces === void 0 ? void 0 : _object_subspaces.map(function(e) {
            return Subspace.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseSubspace() {
    return {
        subspace: "",
        keys: []
    };
}
export var Subspace = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
        var message = createBaseSubspace();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.keys.push(reader.string());
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
            subspace: isSet(object.subspace) ? String(object.subspace) : "",
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        if (message.keys) {
            obj.keys = message.keys.map(function(e) {
                return e;
            });
        } else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_keys;
        var message = createBaseSubspace();
        var _object_subspace;
        message.subspace = (_object_subspace = object.subspace) !== null && _object_subspace !== void 0 ? _object_subspace : "";
        message.keys = ((_object_keys = object.keys) === null || _object_keys === void 0 ? void 0 : _object_keys.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
export var QueryClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function QueryClientImpl(rpc) {
        _classCallCheck(this, QueryClientImpl);
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Subspaces = this.Subspaces.bind(this);
    }
    var _proto = QueryClientImpl.prototype;
    _proto.Params = function Params(request) {
        var data = QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
        return promise.then(function(data) {
            return QueryParamsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Subspaces = function Subspaces(request) {
        var data = QuerySubspacesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
        return promise.then(function(data) {
            return QuerySubspacesResponse.decode(new _m0.Reader(data));
        });
    };
    return QueryClientImpl;
}();
function isSet(value) {
    return value !== null && value !== undefined;
}
