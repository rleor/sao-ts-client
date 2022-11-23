/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "google.protobuf";
export var FieldDescriptorProto_Type;
(function(FieldDescriptorProto_Type) {
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */ "TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */ "TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */ "TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported in proto3. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.
   */ "TYPE_GROUP"] = 10] = "TYPE_GROUP";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/** TYPE_MESSAGE - Length-delimited aggregate. */ "TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/** TYPE_BYTES - New in version 2. */ "TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/** TYPE_SINT32 - Uses ZigZag encoding. */ "TYPE_SINT32"] = 17] = "TYPE_SINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type[/** TYPE_SINT64 - Uses ZigZag encoding. */ "TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type || (FieldDescriptorProto_Type = {}));
export function fieldDescriptorProto_TypeFromJSON(object) {
    switch(object){
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
export function fieldDescriptorProto_TypeToJSON(object) {
    switch(object){
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        case FieldDescriptorProto_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var FieldDescriptorProto_Label;
(function(FieldDescriptorProto_Label) {
    FieldDescriptorProto_Label[FieldDescriptorProto_Label[/** LABEL_OPTIONAL - 0 is reserved for errors */ "LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label || (FieldDescriptorProto_Label = {}));
export function fieldDescriptorProto_LabelFromJSON(object) {
    switch(object){
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
export function fieldDescriptorProto_LabelToJSON(object) {
    switch(object){
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        case FieldDescriptorProto_Label.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var FileOptions_OptimizeMode;
(function(FileOptions_OptimizeMode) {
    FileOptions_OptimizeMode[FileOptions_OptimizeMode[/** SPEED - Generate complete code for parsing, serialization, */ "SPEED"] = 1] = "SPEED";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode[/** CODE_SIZE - etc. */ "CODE_SIZE"] = 2] = "CODE_SIZE";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode[/** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */ "LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode || (FileOptions_OptimizeMode = {}));
export function fileOptions_OptimizeModeFromJSON(object) {
    switch(object){
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
export function fileOptions_OptimizeModeToJSON(object) {
    switch(object){
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        case FileOptions_OptimizeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var FieldOptions_CType;
(function(FieldOptions_CType) {
    FieldOptions_CType[FieldOptions_CType[/** STRING - Default mode. */ "STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType || (FieldOptions_CType = {}));
export function fieldOptions_CTypeFromJSON(object) {
    switch(object){
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
export function fieldOptions_CTypeToJSON(object) {
    switch(object){
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        case FieldOptions_CType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var FieldOptions_JSType;
(function(FieldOptions_JSType) {
    FieldOptions_JSType[FieldOptions_JSType[/** JS_NORMAL - Use the default type. */ "JS_NORMAL"] = 0] = "JS_NORMAL";
    FieldOptions_JSType[FieldOptions_JSType[/** JS_STRING - Use JavaScript strings. */ "JS_STRING"] = 1] = "JS_STRING";
    FieldOptions_JSType[FieldOptions_JSType[/** JS_NUMBER - Use JavaScript numbers. */ "JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType || (FieldOptions_JSType = {}));
export function fieldOptions_JSTypeFromJSON(object) {
    switch(object){
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
export function fieldOptions_JSTypeToJSON(object) {
    switch(object){
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        case FieldOptions_JSType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var MethodOptions_IdempotencyLevel;
(function(MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel[/** NO_SIDE_EFFECTS - implies idempotent */ "NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel[/** IDEMPOTENT - idempotent, but may have side effects */ "IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel || (MethodOptions_IdempotencyLevel = {}));
export function methodOptions_IdempotencyLevelFromJSON(object) {
    switch(object){
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
export function methodOptions_IdempotencyLevelToJSON(object) {
    switch(object){
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseFileDescriptorSet() {
    return {
        file: []
    };
}
export var FileDescriptorSet = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.file[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseFileDescriptorSet();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
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
            file: Array.isArray(object === null || object === void 0 ? void 0 : object.file) ? object.file.map(function(e) {
                return FileDescriptorProto.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.file) {
            obj.file = message.file.map(function(e) {
                return e ? FileDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.file = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_file;
        var message = createBaseFileDescriptorSet();
        message.file = ((_object_file = object.file) === null || _object_file === void 0 ? void 0 : _object_file.map(function(e) {
            return FileDescriptorProto.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        messageType: [],
        enumType: [],
        service: [],
        extension: [],
        options: undefined,
        sourceCodeInfo: undefined,
        syntax: ""
    };
}
export var FileDescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.dependency[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(26).string(v);
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
        writer.uint32(82).fork();
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.publicDependency[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                writer.int32(v1);
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
        writer.ldelim();
        writer.uint32(90).fork();
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = message.weakDependency[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                writer.int32(v2);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        writer.ldelim();
        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
        try {
            for(var _iterator3 = message.messageType[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                var v3 = _step3.value;
                DescriptorProto.encode(v3, writer.uint32(34).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                }
            } finally{
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
        try {
            for(var _iterator4 = message.enumType[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var v4 = _step4.value;
                EnumDescriptorProto.encode(v4, writer.uint32(42).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                }
            } finally{
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
        var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
        try {
            for(var _iterator5 = message.service[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                var v5 = _step5.value;
                ServiceDescriptorProto.encode(v5, writer.uint32(50).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                }
            } finally{
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
        var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
        try {
            for(var _iterator6 = message.extension[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                var v6 = _step6.value;
                FieldDescriptorProto.encode(v6, writer.uint32(58).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                    _iterator6.return();
                }
            } finally{
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
        if (message.options !== undefined) {
            FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.package = reader.string();
                    break;
                case 3:
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while(reader.pos < end2){
                            message.publicDependency.push(reader.int32());
                        }
                    } else {
                        message.publicDependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        var end21 = reader.uint32() + reader.pos;
                        while(reader.pos < end21){
                            message.weakDependency.push(reader.int32());
                        }
                    } else {
                        message.weakDependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            package: isSet(object.package) ? String(object.package) : "",
            dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.dependency) ? object.dependency.map(function(e) {
                return String(e);
            }) : [],
            publicDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.publicDependency) ? object.publicDependency.map(function(e) {
                return Number(e);
            }) : [],
            weakDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.weakDependency) ? object.weakDependency.map(function(e) {
                return Number(e);
            }) : [],
            messageType: Array.isArray(object === null || object === void 0 ? void 0 : object.messageType) ? object.messageType.map(function(e) {
                return DescriptorProto.fromJSON(e);
            }) : [],
            enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enumType) ? object.enumType.map(function(e) {
                return EnumDescriptorProto.fromJSON(e);
            }) : [],
            service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map(function(e) {
                return ServiceDescriptorProto.fromJSON(e);
            }) : [],
            extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(function(e) {
                return FieldDescriptorProto.fromJSON(e);
            }) : [],
            options: isSet(object.options) ? FileOptions.fromJSON(object.options) : undefined,
            sourceCodeInfo: isSet(object.sourceCodeInfo) ? SourceCodeInfo.fromJSON(object.sourceCodeInfo) : undefined,
            syntax: isSet(object.syntax) ? String(object.syntax) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.package !== undefined && (obj.package = message.package);
        if (message.dependency) {
            obj.dependency = message.dependency.map(function(e) {
                return e;
            });
        } else {
            obj.dependency = [];
        }
        if (message.publicDependency) {
            obj.publicDependency = message.publicDependency.map(function(e) {
                return Math.round(e);
            });
        } else {
            obj.publicDependency = [];
        }
        if (message.weakDependency) {
            obj.weakDependency = message.weakDependency.map(function(e) {
                return Math.round(e);
            });
        } else {
            obj.weakDependency = [];
        }
        if (message.messageType) {
            obj.messageType = message.messageType.map(function(e) {
                return e ? DescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.messageType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map(function(e) {
                return e ? EnumDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.enumType = [];
        }
        if (message.service) {
            obj.service = message.service.map(function(e) {
                return e ? ServiceDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.service = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map(function(e) {
                return e ? FieldDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.extension = [];
        }
        message.options !== undefined && (obj.options = message.options ? FileOptions.toJSON(message.options) : undefined);
        message.sourceCodeInfo !== undefined && (obj.sourceCodeInfo = message.sourceCodeInfo ? SourceCodeInfo.toJSON(message.sourceCodeInfo) : undefined);
        message.syntax !== undefined && (obj.syntax = message.syntax);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_dependency, _object_publicDependency, _object_weakDependency, _object_messageType, _object_enumType, _object_service, _object_extension;
        var message = createBaseFileDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        var _object_package;
        message.package = (_object_package = object.package) !== null && _object_package !== void 0 ? _object_package : "";
        message.dependency = ((_object_dependency = object.dependency) === null || _object_dependency === void 0 ? void 0 : _object_dependency.map(function(e) {
            return e;
        })) || [];
        message.publicDependency = ((_object_publicDependency = object.publicDependency) === null || _object_publicDependency === void 0 ? void 0 : _object_publicDependency.map(function(e) {
            return e;
        })) || [];
        message.weakDependency = ((_object_weakDependency = object.weakDependency) === null || _object_weakDependency === void 0 ? void 0 : _object_weakDependency.map(function(e) {
            return e;
        })) || [];
        message.messageType = ((_object_messageType = object.messageType) === null || _object_messageType === void 0 ? void 0 : _object_messageType.map(function(e) {
            return DescriptorProto.fromPartial(e);
        })) || [];
        message.enumType = ((_object_enumType = object.enumType) === null || _object_enumType === void 0 ? void 0 : _object_enumType.map(function(e) {
            return EnumDescriptorProto.fromPartial(e);
        })) || [];
        message.service = ((_object_service = object.service) === null || _object_service === void 0 ? void 0 : _object_service.map(function(e) {
            return ServiceDescriptorProto.fromPartial(e);
        })) || [];
        message.extension = ((_object_extension = object.extension) === null || _object_extension === void 0 ? void 0 : _object_extension.map(function(e) {
            return FieldDescriptorProto.fromPartial(e);
        })) || [];
        message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
        message.sourceCodeInfo = object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null ? SourceCodeInfo.fromPartial(object.sourceCodeInfo) : undefined;
        var _object_syntax;
        message.syntax = (_object_syntax = object.syntax) !== null && _object_syntax !== void 0 ? _object_syntax : "";
        return message;
    }
};
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
export var DescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.field[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
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
            for(var _iterator1 = message.extension[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                FieldDescriptorProto.encode(v1, writer.uint32(50).fork()).ldelim();
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
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = message.nestedType[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                DescriptorProto.encode(v2, writer.uint32(26).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
        try {
            for(var _iterator3 = message.enumType[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                var v3 = _step3.value;
                EnumDescriptorProto.encode(v3, writer.uint32(34).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                }
            } finally{
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
        try {
            for(var _iterator4 = message.extensionRange[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var v4 = _step4.value;
                DescriptorProto_ExtensionRange.encode(v4, writer.uint32(42).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                }
            } finally{
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
        var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
        try {
            for(var _iterator5 = message.oneofDecl[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                var v5 = _step5.value;
                OneofDescriptorProto.encode(v5, writer.uint32(66).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                }
            } finally{
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
        if (message.options !== undefined) {
            MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
        try {
            for(var _iterator6 = message.reservedRange[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                var v6 = _step6.value;
                DescriptorProto_ReservedRange.encode(v6, writer.uint32(74).fork()).ldelim();
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                    _iterator6.return();
                }
            } finally{
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
        var _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
        try {
            for(var _iterator7 = message.reservedName[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true){
                var v7 = _step7.value;
                writer.uint32(82).string(v7);
            }
        } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                    _iterator7.return();
                }
            } finally{
                if (_didIteratorError7) {
                    throw _iteratorError7;
                }
            }
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reservedName.push(reader.string());
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
            name: isSet(object.name) ? String(object.name) : "",
            field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map(function(e) {
                return FieldDescriptorProto.fromJSON(e);
            }) : [],
            extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(function(e) {
                return FieldDescriptorProto.fromJSON(e);
            }) : [],
            nestedType: Array.isArray(object === null || object === void 0 ? void 0 : object.nestedType) ? object.nestedType.map(function(e) {
                return DescriptorProto.fromJSON(e);
            }) : [],
            enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enumType) ? object.enumType.map(function(e) {
                return EnumDescriptorProto.fromJSON(e);
            }) : [],
            extensionRange: Array.isArray(object === null || object === void 0 ? void 0 : object.extensionRange) ? object.extensionRange.map(function(e) {
                return DescriptorProto_ExtensionRange.fromJSON(e);
            }) : [],
            oneofDecl: Array.isArray(object === null || object === void 0 ? void 0 : object.oneofDecl) ? object.oneofDecl.map(function(e) {
                return OneofDescriptorProto.fromJSON(e);
            }) : [],
            options: isSet(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
            reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange) ? object.reservedRange.map(function(e) {
                return DescriptorProto_ReservedRange.fromJSON(e);
            }) : [],
            reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName) ? object.reservedName.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.field) {
            obj.field = message.field.map(function(e) {
                return e ? FieldDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.field = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map(function(e) {
                return e ? FieldDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.extension = [];
        }
        if (message.nestedType) {
            obj.nestedType = message.nestedType.map(function(e) {
                return e ? DescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.nestedType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map(function(e) {
                return e ? EnumDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.enumType = [];
        }
        if (message.extensionRange) {
            obj.extensionRange = message.extensionRange.map(function(e) {
                return e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined;
            });
        } else {
            obj.extensionRange = [];
        }
        if (message.oneofDecl) {
            obj.oneofDecl = message.oneofDecl.map(function(e) {
                return e ? OneofDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.oneofDecl = [];
        }
        message.options !== undefined && (obj.options = message.options ? MessageOptions.toJSON(message.options) : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map(function(e) {
                return e ? DescriptorProto_ReservedRange.toJSON(e) : undefined;
            });
        } else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map(function(e) {
                return e;
            });
        } else {
            obj.reservedName = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_field, _object_extension, _object_nestedType, _object_enumType, _object_extensionRange, _object_oneofDecl, _object_reservedRange, _object_reservedName;
        var message = createBaseDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        message.field = ((_object_field = object.field) === null || _object_field === void 0 ? void 0 : _object_field.map(function(e) {
            return FieldDescriptorProto.fromPartial(e);
        })) || [];
        message.extension = ((_object_extension = object.extension) === null || _object_extension === void 0 ? void 0 : _object_extension.map(function(e) {
            return FieldDescriptorProto.fromPartial(e);
        })) || [];
        message.nestedType = ((_object_nestedType = object.nestedType) === null || _object_nestedType === void 0 ? void 0 : _object_nestedType.map(function(e) {
            return DescriptorProto.fromPartial(e);
        })) || [];
        message.enumType = ((_object_enumType = object.enumType) === null || _object_enumType === void 0 ? void 0 : _object_enumType.map(function(e) {
            return EnumDescriptorProto.fromPartial(e);
        })) || [];
        message.extensionRange = ((_object_extensionRange = object.extensionRange) === null || _object_extensionRange === void 0 ? void 0 : _object_extensionRange.map(function(e) {
            return DescriptorProto_ExtensionRange.fromPartial(e);
        })) || [];
        message.oneofDecl = ((_object_oneofDecl = object.oneofDecl) === null || _object_oneofDecl === void 0 ? void 0 : _object_oneofDecl.map(function(e) {
            return OneofDescriptorProto.fromPartial(e);
        })) || [];
        message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
        message.reservedRange = ((_object_reservedRange = object.reservedRange) === null || _object_reservedRange === void 0 ? void 0 : _object_reservedRange.map(function(e) {
            return DescriptorProto_ReservedRange.fromPartial(e);
        })) || [];
        message.reservedName = ((_object_reservedName = object.reservedName) === null || _object_reservedName === void 0 ? void 0 : _object_reservedName.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseDescriptorProto_ExtensionRange() {
    return {
        start: 0,
        end: 0,
        options: undefined
    };
}
export var DescriptorProto_ExtensionRange = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto_ExtensionRange();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
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
            start: isSet(object.start) ? Number(object.start) : 0,
            end: isSet(object.end) ? Number(object.end) : 0,
            options: isSet(object.options) ? ExtensionRangeOptions.fromJSON(object.options) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        message.options !== undefined && (obj.options = message.options ? ExtensionRangeOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDescriptorProto_ExtensionRange();
        var _object_start;
        message.start = (_object_start = object.start) !== null && _object_start !== void 0 ? _object_start : 0;
        var _object_end;
        message.end = (_object_end = object.end) !== null && _object_end !== void 0 ? _object_end : 0;
        message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseDescriptorProto_ReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
export var DescriptorProto_ReservedRange = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto_ReservedRange();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
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
            start: isSet(object.start) ? Number(object.start) : 0,
            end: isSet(object.end) ? Number(object.end) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseDescriptorProto_ReservedRange();
        var _object_start;
        message.start = (_object_start = object.start) !== null && _object_start !== void 0 ? _object_start : 0;
        var _object_end;
        message.end = (_object_end = object.end) !== null && _object_end !== void 0 ? _object_end : 0;
        return message;
    }
};
function createBaseExtensionRangeOptions() {
    return {
        uninterpretedOption: []
    };
}
export var ExtensionRangeOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseExtensionRangeOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        options: undefined,
        proto3Optional: false
    };
}
export var FieldDescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3Optional === true) {
            writer.uint32(136).bool(message.proto3Optional);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFieldDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = FieldOptions.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.proto3Optional = reader.bool();
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
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : 1,
            type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : 1,
            typeName: isSet(object.typeName) ? String(object.typeName) : "",
            extendee: isSet(object.extendee) ? String(object.extendee) : "",
            defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
            oneofIndex: isSet(object.oneofIndex) ? Number(object.oneofIndex) : 0,
            jsonName: isSet(object.jsonName) ? String(object.jsonName) : "",
            options: isSet(object.options) ? FieldOptions.fromJSON(object.options) : undefined,
            proto3Optional: isSet(object.proto3Optional) ? Boolean(object.proto3Optional) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
        message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
        message.typeName !== undefined && (obj.typeName = message.typeName);
        message.extendee !== undefined && (obj.extendee = message.extendee);
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
        message.jsonName !== undefined && (obj.jsonName = message.jsonName);
        message.options !== undefined && (obj.options = message.options ? FieldOptions.toJSON(message.options) : undefined);
        message.proto3Optional !== undefined && (obj.proto3Optional = message.proto3Optional);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseFieldDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        var _object_number;
        message.number = (_object_number = object.number) !== null && _object_number !== void 0 ? _object_number : 0;
        var _object_label;
        message.label = (_object_label = object.label) !== null && _object_label !== void 0 ? _object_label : 1;
        var _object_type;
        message.type = (_object_type = object.type) !== null && _object_type !== void 0 ? _object_type : 1;
        var _object_typeName;
        message.typeName = (_object_typeName = object.typeName) !== null && _object_typeName !== void 0 ? _object_typeName : "";
        var _object_extendee;
        message.extendee = (_object_extendee = object.extendee) !== null && _object_extendee !== void 0 ? _object_extendee : "";
        var _object_defaultValue;
        message.defaultValue = (_object_defaultValue = object.defaultValue) !== null && _object_defaultValue !== void 0 ? _object_defaultValue : "";
        var _object_oneofIndex;
        message.oneofIndex = (_object_oneofIndex = object.oneofIndex) !== null && _object_oneofIndex !== void 0 ? _object_oneofIndex : 0;
        var _object_jsonName;
        message.jsonName = (_object_jsonName = object.jsonName) !== null && _object_jsonName !== void 0 ? _object_jsonName : "";
        message.options = object.options !== undefined && object.options !== null ? FieldOptions.fromPartial(object.options) : undefined;
        var _object_proto3Optional;
        message.proto3Optional = (_object_proto3Optional = object.proto3Optional) !== null && _object_proto3Optional !== void 0 ? _object_proto3Optional : false;
        return message;
    }
};
function createBaseOneofDescriptorProto() {
    return {
        name: "",
        options: undefined
    };
}
export var OneofDescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOneofDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = OneofOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            options: isSet(object.options) ? OneofOptions.fromJSON(object.options) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.options !== undefined && (obj.options = message.options ? OneofOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseOneofDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseEnumDescriptorProto() {
    return {
        name: "",
        value: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
export var EnumDescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
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
        if (message.options !== undefined) {
            EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.reservedRange[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                EnumDescriptorProto_EnumReservedRange.encode(v1, writer.uint32(34).fork()).ldelim();
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
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = message.reservedName[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                writer.uint32(42).string(v2);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reservedName.push(reader.string());
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
            name: isSet(object.name) ? String(object.name) : "",
            value: Array.isArray(object === null || object === void 0 ? void 0 : object.value) ? object.value.map(function(e) {
                return EnumValueDescriptorProto.fromJSON(e);
            }) : [],
            options: isSet(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
            reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange) ? object.reservedRange.map(function(e) {
                return EnumDescriptorProto_EnumReservedRange.fromJSON(e);
            }) : [],
            reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName) ? object.reservedName.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.value) {
            obj.value = message.value.map(function(e) {
                return e ? EnumValueDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.value = [];
        }
        message.options !== undefined && (obj.options = message.options ? EnumOptions.toJSON(message.options) : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map(function(e) {
                return e ? EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined;
            });
        } else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map(function(e) {
                return e;
            });
        } else {
            obj.reservedName = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_value, _object_reservedRange, _object_reservedName;
        var message = createBaseEnumDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        message.value = ((_object_value = object.value) === null || _object_value === void 0 ? void 0 : _object_value.map(function(e) {
            return EnumValueDescriptorProto.fromPartial(e);
        })) || [];
        message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
        message.reservedRange = ((_object_reservedRange = object.reservedRange) === null || _object_reservedRange === void 0 ? void 0 : _object_reservedRange.map(function(e) {
            return EnumDescriptorProto_EnumReservedRange.fromPartial(e);
        })) || [];
        message.reservedName = ((_object_reservedName = object.reservedName) === null || _object_reservedName === void 0 ? void 0 : _object_reservedName.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
export var EnumDescriptorProto_EnumReservedRange = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumDescriptorProto_EnumReservedRange();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
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
            start: isSet(object.start) ? Number(object.start) : 0,
            end: isSet(object.end) ? Number(object.end) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEnumDescriptorProto_EnumReservedRange();
        var _object_start;
        message.start = (_object_start = object.start) !== null && _object_start !== void 0 ? _object_start : 0;
        var _object_end;
        message.end = (_object_end = object.end) !== null && _object_end !== void 0 ? _object_end : 0;
        return message;
    }
};
function createBaseEnumValueDescriptorProto() {
    return {
        name: "",
        number: 0,
        options: undefined
    };
}
export var EnumValueDescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumValueDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = EnumValueOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            options: isSet(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.options !== undefined && (obj.options = message.options ? EnumValueOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseEnumValueDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        var _object_number;
        message.number = (_object_number = object.number) !== null && _object_number !== void 0 ? _object_number : 0;
        message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseServiceDescriptorProto() {
    return {
        name: "",
        method: [],
        options: undefined
    };
}
export var ServiceDescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.method[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
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
        if (message.options !== undefined) {
            ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServiceDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = ServiceOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            method: Array.isArray(object === null || object === void 0 ? void 0 : object.method) ? object.method.map(function(e) {
                return MethodDescriptorProto.fromJSON(e);
            }) : [],
            options: isSet(object.options) ? ServiceOptions.fromJSON(object.options) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.method) {
            obj.method = message.method.map(function(e) {
                return e ? MethodDescriptorProto.toJSON(e) : undefined;
            });
        } else {
            obj.method = [];
        }
        message.options !== undefined && (obj.options = message.options ? ServiceOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_method;
        var message = createBaseServiceDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        message.method = ((_object_method = object.method) === null || _object_method === void 0 ? void 0 : _object_method.map(function(e) {
            return MethodDescriptorProto.fromPartial(e);
        })) || [];
        message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        inputType: "",
        outputType: "",
        options: undefined,
        clientStreaming: false,
        serverStreaming: false
    };
}
export var MethodDescriptorProto = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMethodDescriptorProto();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
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
            name: isSet(object.name) ? String(object.name) : "",
            inputType: isSet(object.inputType) ? String(object.inputType) : "",
            outputType: isSet(object.outputType) ? String(object.outputType) : "",
            options: isSet(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
            clientStreaming: isSet(object.clientStreaming) ? Boolean(object.clientStreaming) : false,
            serverStreaming: isSet(object.serverStreaming) ? Boolean(object.serverStreaming) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.inputType !== undefined && (obj.inputType = message.inputType);
        message.outputType !== undefined && (obj.outputType = message.outputType);
        message.options !== undefined && (obj.options = message.options ? MethodOptions.toJSON(message.options) : undefined);
        message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
        message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMethodDescriptorProto();
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        var _object_inputType;
        message.inputType = (_object_inputType = object.inputType) !== null && _object_inputType !== void 0 ? _object_inputType : "";
        var _object_outputType;
        message.outputType = (_object_outputType = object.outputType) !== null && _object_outputType !== void 0 ? _object_outputType : "";
        message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
        var _object_clientStreaming;
        message.clientStreaming = (_object_clientStreaming = object.clientStreaming) !== null && _object_clientStreaming !== void 0 ? _object_clientStreaming : false;
        var _object_serverStreaming;
        message.serverStreaming = (_object_serverStreaming = object.serverStreaming) !== null && _object_serverStreaming !== void 0 ? _object_serverStreaming : false;
        return message;
    }
};
function createBaseFileOptions() {
    return {
        javaPackage: "",
        javaOuterClassname: "",
        javaMultipleFiles: false,
        javaGenerateEqualsAndHash: false,
        javaStringCheckUtf8: false,
        optimizeFor: 1,
        goPackage: "",
        ccGenericServices: false,
        javaGenericServices: false,
        pyGenericServices: false,
        phpGenericServices: false,
        deprecated: false,
        ccEnableArenas: false,
        objcClassPrefix: "",
        csharpNamespace: "",
        swiftPrefix: "",
        phpClassPrefix: "",
        phpNamespace: "",
        phpMetadataNamespace: "",
        rubyPackage: "",
        uninterpretedOption: []
    };
}
export var FileOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseFileOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 42:
                    message.phpGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 39:
                    message.swiftPrefix = reader.string();
                    break;
                case 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case 41:
                    message.phpNamespace = reader.string();
                    break;
                case 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case 45:
                    message.rubyPackage = reader.string();
                    break;
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            javaPackage: isSet(object.javaPackage) ? String(object.javaPackage) : "",
            javaOuterClassname: isSet(object.javaOuterClassname) ? String(object.javaOuterClassname) : "",
            javaMultipleFiles: isSet(object.javaMultipleFiles) ? Boolean(object.javaMultipleFiles) : false,
            javaGenerateEqualsAndHash: isSet(object.javaGenerateEqualsAndHash) ? Boolean(object.javaGenerateEqualsAndHash) : false,
            javaStringCheckUtf8: isSet(object.javaStringCheckUtf8) ? Boolean(object.javaStringCheckUtf8) : false,
            optimizeFor: isSet(object.optimizeFor) ? fileOptions_OptimizeModeFromJSON(object.optimizeFor) : 1,
            goPackage: isSet(object.goPackage) ? String(object.goPackage) : "",
            ccGenericServices: isSet(object.ccGenericServices) ? Boolean(object.ccGenericServices) : false,
            javaGenericServices: isSet(object.javaGenericServices) ? Boolean(object.javaGenericServices) : false,
            pyGenericServices: isSet(object.pyGenericServices) ? Boolean(object.pyGenericServices) : false,
            phpGenericServices: isSet(object.phpGenericServices) ? Boolean(object.phpGenericServices) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            ccEnableArenas: isSet(object.ccEnableArenas) ? Boolean(object.ccEnableArenas) : false,
            objcClassPrefix: isSet(object.objcClassPrefix) ? String(object.objcClassPrefix) : "",
            csharpNamespace: isSet(object.csharpNamespace) ? String(object.csharpNamespace) : "",
            swiftPrefix: isSet(object.swiftPrefix) ? String(object.swiftPrefix) : "",
            phpClassPrefix: isSet(object.phpClassPrefix) ? String(object.phpClassPrefix) : "",
            phpNamespace: isSet(object.phpNamespace) ? String(object.phpNamespace) : "",
            phpMetadataNamespace: isSet(object.phpMetadataNamespace) ? String(object.phpMetadataNamespace) : "",
            rubyPackage: isSet(object.rubyPackage) ? String(object.rubyPackage) : "",
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
        message.javaOuterClassname !== undefined && (obj.javaOuterClassname = message.javaOuterClassname);
        message.javaMultipleFiles !== undefined && (obj.javaMultipleFiles = message.javaMultipleFiles);
        message.javaGenerateEqualsAndHash !== undefined && (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
        message.javaStringCheckUtf8 !== undefined && (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
        message.optimizeFor !== undefined && (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
        message.goPackage !== undefined && (obj.goPackage = message.goPackage);
        message.ccGenericServices !== undefined && (obj.ccGenericServices = message.ccGenericServices);
        message.javaGenericServices !== undefined && (obj.javaGenericServices = message.javaGenericServices);
        message.pyGenericServices !== undefined && (obj.pyGenericServices = message.pyGenericServices);
        message.phpGenericServices !== undefined && (obj.phpGenericServices = message.phpGenericServices);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.ccEnableArenas !== undefined && (obj.ccEnableArenas = message.ccEnableArenas);
        message.objcClassPrefix !== undefined && (obj.objcClassPrefix = message.objcClassPrefix);
        message.csharpNamespace !== undefined && (obj.csharpNamespace = message.csharpNamespace);
        message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
        message.phpClassPrefix !== undefined && (obj.phpClassPrefix = message.phpClassPrefix);
        message.phpNamespace !== undefined && (obj.phpNamespace = message.phpNamespace);
        message.phpMetadataNamespace !== undefined && (obj.phpMetadataNamespace = message.phpMetadataNamespace);
        message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseFileOptions();
        var _object_javaPackage;
        message.javaPackage = (_object_javaPackage = object.javaPackage) !== null && _object_javaPackage !== void 0 ? _object_javaPackage : "";
        var _object_javaOuterClassname;
        message.javaOuterClassname = (_object_javaOuterClassname = object.javaOuterClassname) !== null && _object_javaOuterClassname !== void 0 ? _object_javaOuterClassname : "";
        var _object_javaMultipleFiles;
        message.javaMultipleFiles = (_object_javaMultipleFiles = object.javaMultipleFiles) !== null && _object_javaMultipleFiles !== void 0 ? _object_javaMultipleFiles : false;
        var _object_javaGenerateEqualsAndHash;
        message.javaGenerateEqualsAndHash = (_object_javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash) !== null && _object_javaGenerateEqualsAndHash !== void 0 ? _object_javaGenerateEqualsAndHash : false;
        var _object_javaStringCheckUtf8;
        message.javaStringCheckUtf8 = (_object_javaStringCheckUtf8 = object.javaStringCheckUtf8) !== null && _object_javaStringCheckUtf8 !== void 0 ? _object_javaStringCheckUtf8 : false;
        var _object_optimizeFor;
        message.optimizeFor = (_object_optimizeFor = object.optimizeFor) !== null && _object_optimizeFor !== void 0 ? _object_optimizeFor : 1;
        var _object_goPackage;
        message.goPackage = (_object_goPackage = object.goPackage) !== null && _object_goPackage !== void 0 ? _object_goPackage : "";
        var _object_ccGenericServices;
        message.ccGenericServices = (_object_ccGenericServices = object.ccGenericServices) !== null && _object_ccGenericServices !== void 0 ? _object_ccGenericServices : false;
        var _object_javaGenericServices;
        message.javaGenericServices = (_object_javaGenericServices = object.javaGenericServices) !== null && _object_javaGenericServices !== void 0 ? _object_javaGenericServices : false;
        var _object_pyGenericServices;
        message.pyGenericServices = (_object_pyGenericServices = object.pyGenericServices) !== null && _object_pyGenericServices !== void 0 ? _object_pyGenericServices : false;
        var _object_phpGenericServices;
        message.phpGenericServices = (_object_phpGenericServices = object.phpGenericServices) !== null && _object_phpGenericServices !== void 0 ? _object_phpGenericServices : false;
        var _object_deprecated;
        message.deprecated = (_object_deprecated = object.deprecated) !== null && _object_deprecated !== void 0 ? _object_deprecated : false;
        var _object_ccEnableArenas;
        message.ccEnableArenas = (_object_ccEnableArenas = object.ccEnableArenas) !== null && _object_ccEnableArenas !== void 0 ? _object_ccEnableArenas : false;
        var _object_objcClassPrefix;
        message.objcClassPrefix = (_object_objcClassPrefix = object.objcClassPrefix) !== null && _object_objcClassPrefix !== void 0 ? _object_objcClassPrefix : "";
        var _object_csharpNamespace;
        message.csharpNamespace = (_object_csharpNamespace = object.csharpNamespace) !== null && _object_csharpNamespace !== void 0 ? _object_csharpNamespace : "";
        var _object_swiftPrefix;
        message.swiftPrefix = (_object_swiftPrefix = object.swiftPrefix) !== null && _object_swiftPrefix !== void 0 ? _object_swiftPrefix : "";
        var _object_phpClassPrefix;
        message.phpClassPrefix = (_object_phpClassPrefix = object.phpClassPrefix) !== null && _object_phpClassPrefix !== void 0 ? _object_phpClassPrefix : "";
        var _object_phpNamespace;
        message.phpNamespace = (_object_phpNamespace = object.phpNamespace) !== null && _object_phpNamespace !== void 0 ? _object_phpNamespace : "";
        var _object_phpMetadataNamespace;
        message.phpMetadataNamespace = (_object_phpMetadataNamespace = object.phpMetadataNamespace) !== null && _object_phpMetadataNamespace !== void 0 ? _object_phpMetadataNamespace : "";
        var _object_rubyPackage;
        message.rubyPackage = (_object_rubyPackage = object.rubyPackage) !== null && _object_rubyPackage !== void 0 ? _object_rubyPackage : "";
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseMessageOptions() {
    return {
        messageSetWireFormat: false,
        noStandardDescriptorAccessor: false,
        deprecated: false,
        mapEntry: false,
        uninterpretedOption: []
    };
}
export var MessageOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseMessageOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            messageSetWireFormat: isSet(object.messageSetWireFormat) ? Boolean(object.messageSetWireFormat) : false,
            noStandardDescriptorAccessor: isSet(object.noStandardDescriptorAccessor) ? Boolean(object.noStandardDescriptorAccessor) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            mapEntry: isSet(object.mapEntry) ? Boolean(object.mapEntry) : false,
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.messageSetWireFormat !== undefined && (obj.messageSetWireFormat = message.messageSetWireFormat);
        message.noStandardDescriptorAccessor !== undefined && (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseMessageOptions();
        var _object_messageSetWireFormat;
        message.messageSetWireFormat = (_object_messageSetWireFormat = object.messageSetWireFormat) !== null && _object_messageSetWireFormat !== void 0 ? _object_messageSetWireFormat : false;
        var _object_noStandardDescriptorAccessor;
        message.noStandardDescriptorAccessor = (_object_noStandardDescriptorAccessor = object.noStandardDescriptorAccessor) !== null && _object_noStandardDescriptorAccessor !== void 0 ? _object_noStandardDescriptorAccessor : false;
        var _object_deprecated;
        message.deprecated = (_object_deprecated = object.deprecated) !== null && _object_deprecated !== void 0 ? _object_deprecated : false;
        var _object_mapEntry;
        message.mapEntry = (_object_mapEntry = object.mapEntry) !== null && _object_mapEntry !== void 0 ? _object_mapEntry : false;
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseFieldOptions() {
    return {
        ctype: 0,
        packed: false,
        jstype: 0,
        lazy: false,
        deprecated: false,
        weak: false,
        uninterpretedOption: []
    };
}
export var FieldOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.ctype !== 0) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 0) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseFieldOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
            packed: isSet(object.packed) ? Boolean(object.packed) : false,
            jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : 0,
            lazy: isSet(object.lazy) ? Boolean(object.lazy) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            weak: isSet(object.weak) ? Boolean(object.weak) : false,
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
        message.packed !== undefined && (obj.packed = message.packed);
        message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
        message.lazy !== undefined && (obj.lazy = message.lazy);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.weak !== undefined && (obj.weak = message.weak);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseFieldOptions();
        var _object_ctype;
        message.ctype = (_object_ctype = object.ctype) !== null && _object_ctype !== void 0 ? _object_ctype : 0;
        var _object_packed;
        message.packed = (_object_packed = object.packed) !== null && _object_packed !== void 0 ? _object_packed : false;
        var _object_jstype;
        message.jstype = (_object_jstype = object.jstype) !== null && _object_jstype !== void 0 ? _object_jstype : 0;
        var _object_lazy;
        message.lazy = (_object_lazy = object.lazy) !== null && _object_lazy !== void 0 ? _object_lazy : false;
        var _object_deprecated;
        message.deprecated = (_object_deprecated = object.deprecated) !== null && _object_deprecated !== void 0 ? _object_deprecated : false;
        var _object_weak;
        message.weak = (_object_weak = object.weak) !== null && _object_weak !== void 0 ? _object_weak : false;
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseOneofOptions() {
    return {
        uninterpretedOption: []
    };
}
export var OneofOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseOneofOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseOneofOptions();
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseEnumOptions() {
    return {
        allowAlias: false,
        deprecated: false,
        uninterpretedOption: []
    };
}
export var EnumOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseEnumOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            allowAlias: isSet(object.allowAlias) ? Boolean(object.allowAlias) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseEnumOptions();
        var _object_allowAlias;
        message.allowAlias = (_object_allowAlias = object.allowAlias) !== null && _object_allowAlias !== void 0 ? _object_allowAlias : false;
        var _object_deprecated;
        message.deprecated = (_object_deprecated = object.deprecated) !== null && _object_deprecated !== void 0 ? _object_deprecated : false;
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseEnumValueOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
export var EnumValueOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseEnumValueOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseEnumValueOptions();
        var _object_deprecated;
        message.deprecated = (_object_deprecated = object.deprecated) !== null && _object_deprecated !== void 0 ? _object_deprecated : false;
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseServiceOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
export var ServiceOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseServiceOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseServiceOptions();
        var _object_deprecated;
        message.deprecated = (_object_deprecated = object.deprecated) !== null && _object_deprecated !== void 0 ? _object_deprecated : false;
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseMethodOptions() {
    return {
        deprecated: false,
        idempotencyLevel: 0,
        uninterpretedOption: []
    };
}
export var MethodOptions = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 0) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.uninterpretedOption[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
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
        var message = createBaseMethodOptions();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 999:
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            idempotencyLevel: isSet(object.idempotencyLevel) ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel) : 0,
            uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(function(e) {
                return UninterpretedOption.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.idempotencyLevel !== undefined && (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(function(e) {
                return e ? UninterpretedOption.toJSON(e) : undefined;
            });
        } else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_uninterpretedOption;
        var message = createBaseMethodOptions();
        var _object_deprecated;
        message.deprecated = (_object_deprecated = object.deprecated) !== null && _object_deprecated !== void 0 ? _object_deprecated : false;
        var _object_idempotencyLevel;
        message.idempotencyLevel = (_object_idempotencyLevel = object.idempotencyLevel) !== null && _object_idempotencyLevel !== void 0 ? _object_idempotencyLevel : 0;
        message.uninterpretedOption = ((_object_uninterpretedOption = object.uninterpretedOption) === null || _object_uninterpretedOption === void 0 ? void 0 : _object_uninterpretedOption.map(function(e) {
            return UninterpretedOption.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifierValue: "",
        positiveIntValue: 0,
        negativeIntValue: 0,
        doubleValue: 0,
        stringValue: new Uint8Array(),
        aggregateValue: ""
    };
}
export var UninterpretedOption = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.name[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
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
        if (message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (message.positiveIntValue !== 0) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (message.negativeIntValue !== 0) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUninterpretedOption();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 2:
                    message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.negativeIntValue = longToNumber(reader.int64());
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
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
            name: Array.isArray(object === null || object === void 0 ? void 0 : object.name) ? object.name.map(function(e) {
                return UninterpretedOption_NamePart.fromJSON(e);
            }) : [],
            identifierValue: isSet(object.identifierValue) ? String(object.identifierValue) : "",
            positiveIntValue: isSet(object.positiveIntValue) ? Number(object.positiveIntValue) : 0,
            negativeIntValue: isSet(object.negativeIntValue) ? Number(object.negativeIntValue) : 0,
            doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : 0,
            stringValue: isSet(object.stringValue) ? bytesFromBase64(object.stringValue) : new Uint8Array(),
            aggregateValue: isSet(object.aggregateValue) ? String(object.aggregateValue) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.name) {
            obj.name = message.name.map(function(e) {
                return e ? UninterpretedOption_NamePart.toJSON(e) : undefined;
            });
        } else {
            obj.name = [];
        }
        message.identifierValue !== undefined && (obj.identifierValue = message.identifierValue);
        message.positiveIntValue !== undefined && (obj.positiveIntValue = Math.round(message.positiveIntValue));
        message.negativeIntValue !== undefined && (obj.negativeIntValue = Math.round(message.negativeIntValue));
        message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
        message.stringValue !== undefined && (obj.stringValue = base64FromBytes(message.stringValue !== undefined ? message.stringValue : new Uint8Array()));
        message.aggregateValue !== undefined && (obj.aggregateValue = message.aggregateValue);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_name;
        var message = createBaseUninterpretedOption();
        message.name = ((_object_name = object.name) === null || _object_name === void 0 ? void 0 : _object_name.map(function(e) {
            return UninterpretedOption_NamePart.fromPartial(e);
        })) || [];
        var _object_identifierValue;
        message.identifierValue = (_object_identifierValue = object.identifierValue) !== null && _object_identifierValue !== void 0 ? _object_identifierValue : "";
        var _object_positiveIntValue;
        message.positiveIntValue = (_object_positiveIntValue = object.positiveIntValue) !== null && _object_positiveIntValue !== void 0 ? _object_positiveIntValue : 0;
        var _object_negativeIntValue;
        message.negativeIntValue = (_object_negativeIntValue = object.negativeIntValue) !== null && _object_negativeIntValue !== void 0 ? _object_negativeIntValue : 0;
        var _object_doubleValue;
        message.doubleValue = (_object_doubleValue = object.doubleValue) !== null && _object_doubleValue !== void 0 ? _object_doubleValue : 0;
        var _object_stringValue;
        message.stringValue = (_object_stringValue = object.stringValue) !== null && _object_stringValue !== void 0 ? _object_stringValue : new Uint8Array();
        var _object_aggregateValue;
        message.aggregateValue = (_object_aggregateValue = object.aggregateValue) !== null && _object_aggregateValue !== void 0 ? _object_aggregateValue : "";
        return message;
    }
};
function createBaseUninterpretedOption_NamePart() {
    return {
        namePart: "",
        isExtension: false
    };
}
export var UninterpretedOption_NamePart = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUninterpretedOption_NamePart();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.namePart = reader.string();
                    break;
                case 2:
                    message.isExtension = reader.bool();
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
            namePart: isSet(object.namePart) ? String(object.namePart) : "",
            isExtension: isSet(object.isExtension) ? Boolean(object.isExtension) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.namePart !== undefined && (obj.namePart = message.namePart);
        message.isExtension !== undefined && (obj.isExtension = message.isExtension);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseUninterpretedOption_NamePart();
        var _object_namePart;
        message.namePart = (_object_namePart = object.namePart) !== null && _object_namePart !== void 0 ? _object_namePart : "";
        var _object_isExtension;
        message.isExtension = (_object_isExtension = object.isExtension) !== null && _object_isExtension !== void 0 ? _object_isExtension : false;
        return message;
    }
};
function createBaseSourceCodeInfo() {
    return {
        location: []
    };
}
export var SourceCodeInfo = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.location[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseSourceCodeInfo();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
            location: Array.isArray(object === null || object === void 0 ? void 0 : object.location) ? object.location.map(function(e) {
                return SourceCodeInfo_Location.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.location) {
            obj.location = message.location.map(function(e) {
                return e ? SourceCodeInfo_Location.toJSON(e) : undefined;
            });
        } else {
            obj.location = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_location;
        var message = createBaseSourceCodeInfo();
        message.location = ((_object_location = object.location) === null || _object_location === void 0 ? void 0 : _object_location.map(function(e) {
            return SourceCodeInfo_Location.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseSourceCodeInfo_Location() {
    return {
        path: [],
        span: [],
        leadingComments: "",
        trailingComments: "",
        leadingDetachedComments: []
    };
}
export var SourceCodeInfo_Location = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        writer.uint32(10).fork();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.int32(v);
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
        writer.ldelim();
        writer.uint32(18).fork();
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.span[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                writer.int32(v1);
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
        writer.ldelim();
        if (message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = message.leadingDetachedComments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                writer.uint32(50).string(v2);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceCodeInfo_Location();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while(reader.pos < end2){
                            message.path.push(reader.int32());
                        }
                    } else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end21 = reader.uint32() + reader.pos;
                        while(reader.pos < end21){
                            message.span.push(reader.int32());
                        }
                    } else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leadingComments = reader.string();
                    break;
                case 4:
                    message.trailingComments = reader.string();
                    break;
                case 6:
                    message.leadingDetachedComments.push(reader.string());
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
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function(e) {
                return Number(e);
            }) : [],
            span: Array.isArray(object === null || object === void 0 ? void 0 : object.span) ? object.span.map(function(e) {
                return Number(e);
            }) : [],
            leadingComments: isSet(object.leadingComments) ? String(object.leadingComments) : "",
            trailingComments: isSet(object.trailingComments) ? String(object.trailingComments) : "",
            leadingDetachedComments: Array.isArray(object === null || object === void 0 ? void 0 : object.leadingDetachedComments) ? object.leadingDetachedComments.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.path) {
            obj.path = message.path.map(function(e) {
                return Math.round(e);
            });
        } else {
            obj.path = [];
        }
        if (message.span) {
            obj.span = message.span.map(function(e) {
                return Math.round(e);
            });
        } else {
            obj.span = [];
        }
        message.leadingComments !== undefined && (obj.leadingComments = message.leadingComments);
        message.trailingComments !== undefined && (obj.trailingComments = message.trailingComments);
        if (message.leadingDetachedComments) {
            obj.leadingDetachedComments = message.leadingDetachedComments.map(function(e) {
                return e;
            });
        } else {
            obj.leadingDetachedComments = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_path, _object_span, _object_leadingDetachedComments;
        var message = createBaseSourceCodeInfo_Location();
        message.path = ((_object_path = object.path) === null || _object_path === void 0 ? void 0 : _object_path.map(function(e) {
            return e;
        })) || [];
        message.span = ((_object_span = object.span) === null || _object_span === void 0 ? void 0 : _object_span.map(function(e) {
            return e;
        })) || [];
        var _object_leadingComments;
        message.leadingComments = (_object_leadingComments = object.leadingComments) !== null && _object_leadingComments !== void 0 ? _object_leadingComments : "";
        var _object_trailingComments;
        message.trailingComments = (_object_trailingComments = object.trailingComments) !== null && _object_trailingComments !== void 0 ? _object_trailingComments : "";
        message.leadingDetachedComments = ((_object_leadingDetachedComments = object.leadingDetachedComments) === null || _object_leadingDetachedComments === void 0 ? void 0 : _object_leadingDetachedComments.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseGeneratedCodeInfo() {
    return {
        annotation: []
    };
}
export var GeneratedCodeInfo = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.annotation[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseGeneratedCodeInfo();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
            annotation: Array.isArray(object === null || object === void 0 ? void 0 : object.annotation) ? object.annotation.map(function(e) {
                return GeneratedCodeInfo_Annotation.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.annotation) {
            obj.annotation = message.annotation.map(function(e) {
                return e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined;
            });
        } else {
            obj.annotation = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_annotation;
        var message = createBaseGeneratedCodeInfo();
        message.annotation = ((_object_annotation = object.annotation) === null || _object_annotation === void 0 ? void 0 : _object_annotation.map(function(e) {
            return GeneratedCodeInfo_Annotation.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseGeneratedCodeInfo_Annotation() {
    return {
        path: [],
        sourceFile: "",
        begin: 0,
        end: 0
    };
}
export var GeneratedCodeInfo_Annotation = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        writer.uint32(10).fork();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.int32(v);
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
        writer.ldelim();
        if (message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGeneratedCodeInfo_Annotation();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while(reader.pos < end2){
                            message.path.push(reader.int32());
                        }
                    } else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.sourceFile = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
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
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function(e) {
                return Number(e);
            }) : [],
            sourceFile: isSet(object.sourceFile) ? String(object.sourceFile) : "",
            begin: isSet(object.begin) ? Number(object.begin) : 0,
            end: isSet(object.end) ? Number(object.end) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.path) {
            obj.path = message.path.map(function(e) {
                return Math.round(e);
            });
        } else {
            obj.path = [];
        }
        message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
        message.begin !== undefined && (obj.begin = Math.round(message.begin));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_path;
        var message = createBaseGeneratedCodeInfo_Annotation();
        message.path = ((_object_path = object.path) === null || _object_path === void 0 ? void 0 : _object_path.map(function(e) {
            return e;
        })) || [];
        var _object_sourceFile;
        message.sourceFile = (_object_sourceFile = object.sourceFile) !== null && _object_sourceFile !== void 0 ? _object_sourceFile : "";
        var _object_begin;
        message.begin = (_object_begin = object.begin) !== null && _object_begin !== void 0 ? _object_begin : 0;
        var _object_end;
        message.end = (_object_end = object.end) !== null && _object_end !== void 0 ? _object_end : 0;
        return message;
    }
};
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
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for(var i = 0; i < bin.length; ++i){
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        var bin = [];
        arr.forEach(function(byte) {
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
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
function isSet(value) {
    return value !== null && value !== undefined;
}
