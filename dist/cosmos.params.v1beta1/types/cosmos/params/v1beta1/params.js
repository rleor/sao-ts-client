/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "cosmos.params.v1beta1";
function createBaseParameterChangeProposal() {
    return {
        title: "",
        description: "",
        changes: []
    };
}
export var ParameterChangeProposal = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.changes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                ParamChange.encode(v, writer.uint32(26).fork()).ldelim();
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
        var message = createBaseParameterChangeProposal();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.changes.push(ParamChange.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            changes: Array.isArray(object === null || object === void 0 ? void 0 : object.changes) ? object.changes.map(function(e) {
                return ParamChange.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.changes) {
            obj.changes = message.changes.map(function(e) {
                return e ? ParamChange.toJSON(e) : undefined;
            });
        } else {
            obj.changes = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_changes;
        var message = createBaseParameterChangeProposal();
        var _object_title;
        message.title = (_object_title = object.title) !== null && _object_title !== void 0 ? _object_title : "";
        var _object_description;
        message.description = (_object_description = object.description) !== null && _object_description !== void 0 ? _object_description : "";
        message.changes = ((_object_changes = object.changes) === null || _object_changes === void 0 ? void 0 : _object_changes.map(function(e) {
            return ParamChange.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseParamChange() {
    return {
        subspace: "",
        key: "",
        value: ""
    };
}
export var ParamChange = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParamChange();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseParamChange();
        var _object_subspace;
        message.subspace = (_object_subspace = object.subspace) !== null && _object_subspace !== void 0 ? _object_subspace : "";
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        var _object_value;
        message.value = (_object_value = object.value) !== null && _object_value !== void 0 ? _object_value : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
