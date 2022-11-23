/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "google.api";
function createBaseHttp() {
    return {
        rules: [],
        fullyDecodeReservedExpansion: false
    };
}
export var Http = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHttp();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.rules.push(HttpRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fullyDecodeReservedExpansion = reader.bool();
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
            rules: Array.isArray(object === null || object === void 0 ? void 0 : object.rules) ? object.rules.map(function(e) {
                return HttpRule.fromJSON(e);
            }) : [],
            fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion) ? Boolean(object.fullyDecodeReservedExpansion) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(function(e) {
                return e ? HttpRule.toJSON(e) : undefined;
            });
        } else {
            obj.rules = [];
        }
        message.fullyDecodeReservedExpansion !== undefined && (obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_rules;
        var message = createBaseHttp();
        message.rules = ((_object_rules = object.rules) === null || _object_rules === void 0 ? void 0 : _object_rules.map(function(e) {
            return HttpRule.fromPartial(e);
        })) || [];
        var _object_fullyDecodeReservedExpansion;
        message.fullyDecodeReservedExpansion = (_object_fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion) !== null && _object_fullyDecodeReservedExpansion !== void 0 ? _object_fullyDecodeReservedExpansion : false;
        return message;
    }
};
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        delete: undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        responseBody: "",
        additionalBindings: []
    };
}
export var HttpRule = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.additionalBindings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
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
        var message = createBaseHttpRule();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.get = reader.string();
                    break;
                case 3:
                    message.put = reader.string();
                    break;
                case 4:
                    message.post = reader.string();
                    break;
                case 5:
                    message.delete = reader.string();
                    break;
                case 6:
                    message.patch = reader.string();
                    break;
                case 8:
                    message.custom = CustomHttpPattern.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 12:
                    message.responseBody = reader.string();
                    break;
                case 11:
                    message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
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
            selector: isSet(object.selector) ? String(object.selector) : "",
            get: isSet(object.get) ? String(object.get) : undefined,
            put: isSet(object.put) ? String(object.put) : undefined,
            post: isSet(object.post) ? String(object.post) : undefined,
            delete: isSet(object.delete) ? String(object.delete) : undefined,
            patch: isSet(object.patch) ? String(object.patch) : undefined,
            custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: isSet(object.body) ? String(object.body) : "",
            responseBody: isSet(object.responseBody) ? String(object.responseBody) : "",
            additionalBindings: Array.isArray(object === null || object === void 0 ? void 0 : object.additionalBindings) ? object.additionalBindings.map(function(e) {
                return HttpRule.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.selector !== undefined && (obj.selector = message.selector);
        message.get !== undefined && (obj.get = message.get);
        message.put !== undefined && (obj.put = message.put);
        message.post !== undefined && (obj.post = message.post);
        message.delete !== undefined && (obj.delete = message.delete);
        message.patch !== undefined && (obj.patch = message.patch);
        message.custom !== undefined && (obj.custom = message.custom ? CustomHttpPattern.toJSON(message.custom) : undefined);
        message.body !== undefined && (obj.body = message.body);
        message.responseBody !== undefined && (obj.responseBody = message.responseBody);
        if (message.additionalBindings) {
            obj.additionalBindings = message.additionalBindings.map(function(e) {
                return e ? HttpRule.toJSON(e) : undefined;
            });
        } else {
            obj.additionalBindings = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_additionalBindings;
        var message = createBaseHttpRule();
        var _object_selector;
        message.selector = (_object_selector = object.selector) !== null && _object_selector !== void 0 ? _object_selector : "";
        var _object_get;
        message.get = (_object_get = object.get) !== null && _object_get !== void 0 ? _object_get : undefined;
        var _object_put;
        message.put = (_object_put = object.put) !== null && _object_put !== void 0 ? _object_put : undefined;
        var _object_post;
        message.post = (_object_post = object.post) !== null && _object_post !== void 0 ? _object_post : undefined;
        var _object_delete;
        message.delete = (_object_delete = object.delete) !== null && _object_delete !== void 0 ? _object_delete : undefined;
        var _object_patch;
        message.patch = (_object_patch = object.patch) !== null && _object_patch !== void 0 ? _object_patch : undefined;
        message.custom = object.custom !== undefined && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : undefined;
        var _object_body;
        message.body = (_object_body = object.body) !== null && _object_body !== void 0 ? _object_body : "";
        var _object_responseBody;
        message.responseBody = (_object_responseBody = object.responseBody) !== null && _object_responseBody !== void 0 ? _object_responseBody : "";
        message.additionalBindings = ((_object_additionalBindings = object.additionalBindings) === null || _object_additionalBindings === void 0 ? void 0 : _object_additionalBindings.map(function(e) {
            return HttpRule.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseCustomHttpPattern() {
    return {
        kind: "",
        path: ""
    };
}
export var CustomHttpPattern = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCustomHttpPattern();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
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
            kind: isSet(object.kind) ? String(object.kind) : "",
            path: isSet(object.path) ? String(object.path) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.kind !== undefined && (obj.kind = message.kind);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseCustomHttpPattern();
        var _object_kind;
        message.kind = (_object_kind = object.kind) !== null && _object_kind !== void 0 ? _object_kind : "";
        var _object_path;
        message.path = (_object_path = object.path) !== null && _object_path !== void 0 ? _object_path : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
