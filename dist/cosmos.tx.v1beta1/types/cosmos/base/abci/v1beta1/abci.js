/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
export var protobufPackage = "cosmos.base.abci.v1beta1";
function createBaseTxResponse() {
    return {
        height: 0,
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        rawLog: "",
        logs: [],
        info: "",
        gasWanted: 0,
        gasUsed: 0,
        tx: undefined,
        timestamp: "",
        events: []
    };
}
export var TxResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.rawLog !== "") {
            writer.uint32(50).string(message.rawLog);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.logs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
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
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gasWanted !== 0) {
            writer.uint32(72).int64(message.gasWanted);
        }
        if (message.gasUsed !== 0) {
            writer.uint32(80).int64(message.gasUsed);
        }
        if (message.tx !== undefined) {
            Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = message.events[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Event.encode(v1, writer.uint32(106).fork()).ldelim();
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
        var message = createBaseTxResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.rawLog = reader.string();
                    break;
                case 7:
                    message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gasWanted = longToNumber(reader.int64());
                    break;
                case 10:
                    message.gasUsed = longToNumber(reader.int64());
                    break;
                case 11:
                    message.tx = Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(Event.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? Number(object.height) : 0,
            txhash: isSet(object.txhash) ? String(object.txhash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? String(object.data) : "",
            rawLog: isSet(object.rawLog) ? String(object.rawLog) : "",
            logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map(function(e) {
                return ABCIMessageLog.fromJSON(e);
            }) : [],
            info: isSet(object.info) ? String(object.info) : "",
            gasWanted: isSet(object.gasWanted) ? Number(object.gasWanted) : 0,
            gasUsed: isSet(object.gasUsed) ? Number(object.gasUsed) : 0,
            tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function(e) {
                return Event.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = message.data);
        message.rawLog !== undefined && (obj.rawLog = message.rawLog);
        if (message.logs) {
            obj.logs = message.logs.map(function(e) {
                return e ? ABCIMessageLog.toJSON(e) : undefined;
            });
        } else {
            obj.logs = [];
        }
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined && (obj.gasWanted = Math.round(message.gasWanted));
        message.gasUsed !== undefined && (obj.gasUsed = Math.round(message.gasUsed));
        message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.events) {
            obj.events = message.events.map(function(e) {
                return e ? Event.toJSON(e) : undefined;
            });
        } else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_logs, _object_events;
        var message = createBaseTxResponse();
        var _object_height;
        message.height = (_object_height = object.height) !== null && _object_height !== void 0 ? _object_height : 0;
        var _object_txhash;
        message.txhash = (_object_txhash = object.txhash) !== null && _object_txhash !== void 0 ? _object_txhash : "";
        var _object_codespace;
        message.codespace = (_object_codespace = object.codespace) !== null && _object_codespace !== void 0 ? _object_codespace : "";
        var _object_code;
        message.code = (_object_code = object.code) !== null && _object_code !== void 0 ? _object_code : 0;
        var _object_data;
        message.data = (_object_data = object.data) !== null && _object_data !== void 0 ? _object_data : "";
        var _object_rawLog;
        message.rawLog = (_object_rawLog = object.rawLog) !== null && _object_rawLog !== void 0 ? _object_rawLog : "";
        message.logs = ((_object_logs = object.logs) === null || _object_logs === void 0 ? void 0 : _object_logs.map(function(e) {
            return ABCIMessageLog.fromPartial(e);
        })) || [];
        var _object_info;
        message.info = (_object_info = object.info) !== null && _object_info !== void 0 ? _object_info : "";
        var _object_gasWanted;
        message.gasWanted = (_object_gasWanted = object.gasWanted) !== null && _object_gasWanted !== void 0 ? _object_gasWanted : 0;
        var _object_gasUsed;
        message.gasUsed = (_object_gasUsed = object.gasUsed) !== null && _object_gasUsed !== void 0 ? _object_gasUsed : 0;
        message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
        var _object_timestamp;
        message.timestamp = (_object_timestamp = object.timestamp) !== null && _object_timestamp !== void 0 ? _object_timestamp : "";
        message.events = ((_object_events = object.events) === null || _object_events === void 0 ? void 0 : _object_events.map(function(e) {
            return Event.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseABCIMessageLog() {
    return {
        msgIndex: 0,
        log: "",
        events: []
    };
}
export var ABCIMessageLog = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.msgIndex !== 0) {
            writer.uint32(8).uint32(message.msgIndex);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
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
        var message = createBaseABCIMessageLog();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.msgIndex = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(StringEvent.decode(reader, reader.uint32()));
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
            msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function(e) {
                return StringEvent.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(function(e) {
                return e ? StringEvent.toJSON(e) : undefined;
            });
        } else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_events;
        var message = createBaseABCIMessageLog();
        var _object_msgIndex;
        message.msgIndex = (_object_msgIndex = object.msgIndex) !== null && _object_msgIndex !== void 0 ? _object_msgIndex : 0;
        var _object_log;
        message.log = (_object_log = object.log) !== null && _object_log !== void 0 ? _object_log : "";
        message.events = ((_object_events = object.events) === null || _object_events === void 0 ? void 0 : _object_events.map(function(e) {
            return StringEvent.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseStringEvent() {
    return {
        type: "",
        attributes: []
    };
}
export var StringEvent = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Attribute.encode(v, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseStringEvent();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(function(e) {
                return Attribute.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(function(e) {
                return e ? Attribute.toJSON(e) : undefined;
            });
        } else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_attributes;
        var message = createBaseStringEvent();
        var _object_type;
        message.type = (_object_type = object.type) !== null && _object_type !== void 0 ? _object_type : "";
        message.attributes = ((_object_attributes = object.attributes) === null || _object_attributes === void 0 ? void 0 : _object_attributes.map(function(e) {
            return Attribute.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseAttribute() {
    return {
        key: "",
        value: ""
    };
}
export var Attribute = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAttribute();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseAttribute();
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        var _object_value;
        message.value = (_object_value = object.value) !== null && _object_value !== void 0 ? _object_value : "";
        return message;
    }
};
function createBaseGasInfo() {
    return {
        gasWanted: 0,
        gasUsed: 0
    };
}
export var GasInfo = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.gasWanted !== 0) {
            writer.uint32(8).uint64(message.gasWanted);
        }
        if (message.gasUsed !== 0) {
            writer.uint32(16).uint64(message.gasUsed);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGasInfo();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.gasWanted = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.gasUsed = longToNumber(reader.uint64());
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
            gasWanted: isSet(object.gasWanted) ? Number(object.gasWanted) : 0,
            gasUsed: isSet(object.gasUsed) ? Number(object.gasUsed) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.gasWanted !== undefined && (obj.gasWanted = Math.round(message.gasWanted));
        message.gasUsed !== undefined && (obj.gasUsed = Math.round(message.gasUsed));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseGasInfo();
        var _object_gasWanted;
        message.gasWanted = (_object_gasWanted = object.gasWanted) !== null && _object_gasWanted !== void 0 ? _object_gasWanted : 0;
        var _object_gasUsed;
        message.gasUsed = (_object_gasUsed = object.gasUsed) !== null && _object_gasUsed !== void 0 ? _object_gasUsed : 0;
        return message;
    }
};
function createBaseResult() {
    return {
        data: new Uint8Array(),
        log: "",
        events: [],
        msgResponses: []
    };
}
export var Result = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Event.encode(v, writer.uint32(26).fork()).ldelim();
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
            for(var _iterator1 = message.msgResponses[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Any.encode(v1, writer.uint32(34).fork()).ldelim();
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
        var message = createBaseResult();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function(e) {
                return Event.fromJSON(e);
            }) : [],
            msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map(function(e) {
                return Any.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(function(e) {
                return e ? Event.toJSON(e) : undefined;
            });
        } else {
            obj.events = [];
        }
        if (message.msgResponses) {
            obj.msgResponses = message.msgResponses.map(function(e) {
                return e ? Any.toJSON(e) : undefined;
            });
        } else {
            obj.msgResponses = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_events, _object_msgResponses;
        var message = createBaseResult();
        var _object_data;
        message.data = (_object_data = object.data) !== null && _object_data !== void 0 ? _object_data : new Uint8Array();
        var _object_log;
        message.log = (_object_log = object.log) !== null && _object_log !== void 0 ? _object_log : "";
        message.events = ((_object_events = object.events) === null || _object_events === void 0 ? void 0 : _object_events.map(function(e) {
            return Event.fromPartial(e);
        })) || [];
        message.msgResponses = ((_object_msgResponses = object.msgResponses) === null || _object_msgResponses === void 0 ? void 0 : _object_msgResponses.map(function(e) {
            return Any.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseSimulationResponse() {
    return {
        gasInfo: undefined,
        result: undefined
    };
}
export var SimulationResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.gasInfo !== undefined) {
            GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimulationResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.gasInfo = GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
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
            gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
            result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
        message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseSimulationResponse();
        message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
        message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
        return message;
    }
};
function createBaseMsgData() {
    return {
        msgType: "",
        data: new Uint8Array()
    };
}
export var MsgData = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.msgType !== "") {
            writer.uint32(10).string(message.msgType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgData();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.msgType = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            msgType: isSet(object.msgType) ? String(object.msgType) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.msgType !== undefined && (obj.msgType = message.msgType);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgData();
        var _object_msgType;
        message.msgType = (_object_msgType = object.msgType) !== null && _object_msgType !== void 0 ? _object_msgType : "";
        var _object_data;
        message.data = (_object_data = object.data) !== null && _object_data !== void 0 ? _object_data : new Uint8Array();
        return message;
    }
};
function createBaseTxMsgData() {
    return {
        data: [],
        msgResponses: []
    };
}
export var TxMsgData = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                MsgData.encode(v, writer.uint32(10).fork()).ldelim();
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
            for(var _iterator1 = message.msgResponses[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                Any.encode(v1, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseTxMsgData();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.data.push(MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(function(e) {
                return MsgData.fromJSON(e);
            }) : [],
            msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map(function(e) {
                return Any.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.data) {
            obj.data = message.data.map(function(e) {
                return e ? MsgData.toJSON(e) : undefined;
            });
        } else {
            obj.data = [];
        }
        if (message.msgResponses) {
            obj.msgResponses = message.msgResponses.map(function(e) {
                return e ? Any.toJSON(e) : undefined;
            });
        } else {
            obj.msgResponses = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_data, _object_msgResponses;
        var message = createBaseTxMsgData();
        message.data = ((_object_data = object.data) === null || _object_data === void 0 ? void 0 : _object_data.map(function(e) {
            return MsgData.fromPartial(e);
        })) || [];
        message.msgResponses = ((_object_msgResponses = object.msgResponses) === null || _object_msgResponses === void 0 ? void 0 : _object_msgResponses.map(function(e) {
            return Any.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseSearchTxsResult() {
    return {
        totalCount: 0,
        count: 0,
        pageNumber: 0,
        pageTotal: 0,
        limit: 0,
        txs: []
    };
}
export var SearchTxsResult = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.totalCount !== 0) {
            writer.uint32(8).uint64(message.totalCount);
        }
        if (message.count !== 0) {
            writer.uint32(16).uint64(message.count);
        }
        if (message.pageNumber !== 0) {
            writer.uint32(24).uint64(message.pageNumber);
        }
        if (message.pageTotal !== 0) {
            writer.uint32(32).uint64(message.pageTotal);
        }
        if (message.limit !== 0) {
            writer.uint32(40).uint64(message.limit);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.txs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
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
        var message = createBaseSearchTxsResult();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.totalCount = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.count = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.pageNumber = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.pageTotal = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.limit = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.txs.push(TxResponse.decode(reader, reader.uint32()));
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
            totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
            count: isSet(object.count) ? Number(object.count) : 0,
            pageNumber: isSet(object.pageNumber) ? Number(object.pageNumber) : 0,
            pageTotal: isSet(object.pageTotal) ? Number(object.pageTotal) : 0,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function(e) {
                return TxResponse.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
        message.count !== undefined && (obj.count = Math.round(message.count));
        message.pageNumber !== undefined && (obj.pageNumber = Math.round(message.pageNumber));
        message.pageTotal !== undefined && (obj.pageTotal = Math.round(message.pageTotal));
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        if (message.txs) {
            obj.txs = message.txs.map(function(e) {
                return e ? TxResponse.toJSON(e) : undefined;
            });
        } else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_txs;
        var message = createBaseSearchTxsResult();
        var _object_totalCount;
        message.totalCount = (_object_totalCount = object.totalCount) !== null && _object_totalCount !== void 0 ? _object_totalCount : 0;
        var _object_count;
        message.count = (_object_count = object.count) !== null && _object_count !== void 0 ? _object_count : 0;
        var _object_pageNumber;
        message.pageNumber = (_object_pageNumber = object.pageNumber) !== null && _object_pageNumber !== void 0 ? _object_pageNumber : 0;
        var _object_pageTotal;
        message.pageTotal = (_object_pageTotal = object.pageTotal) !== null && _object_pageTotal !== void 0 ? _object_pageTotal : 0;
        var _object_limit;
        message.limit = (_object_limit = object.limit) !== null && _object_limit !== void 0 ? _object_limit : 0;
        message.txs = ((_object_txs = object.txs) === null || _object_txs === void 0 ? void 0 : _object_txs.map(function(e) {
            return TxResponse.fromPartial(e);
        })) || [];
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
