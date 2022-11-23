/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IdentifiedChannel, PacketState } from "./channel";
export var protobufPackage = "ibc.core.channel.v1";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: 0
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.channels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
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
            for(var _iterator1 = message.acknowledgements[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                PacketState.encode(v1, writer.uint32(18).fork()).ldelim();
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
            for(var _iterator2 = message.commitments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                PacketState.encode(v2, writer.uint32(26).fork()).ldelim();
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
            for(var _iterator3 = message.receipts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                var v3 = _step3.value;
                PacketState.encode(v3, writer.uint32(34).fork()).ldelim();
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
            for(var _iterator4 = message.sendSequences[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var v4 = _step4.value;
                PacketSequence.encode(v4, writer.uint32(42).fork()).ldelim();
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
            for(var _iterator5 = message.recvSequences[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                var v5 = _step5.value;
                PacketSequence.encode(v5, writer.uint32(50).fork()).ldelim();
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
            for(var _iterator6 = message.ackSequences[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                var v6 = _step6.value;
                PacketSequence.encode(v6, writer.uint32(58).fork()).ldelim();
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
        if (message.nextChannelSequence !== 0) {
            writer.uint32(64).uint64(message.nextChannelSequence);
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
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nextChannelSequence = longToNumber(reader.uint64());
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map(function(e) {
                return IdentifiedChannel.fromJSON(e);
            }) : [],
            acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements) ? object.acknowledgements.map(function(e) {
                return PacketState.fromJSON(e);
            }) : [],
            commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments) ? object.commitments.map(function(e) {
                return PacketState.fromJSON(e);
            }) : [],
            receipts: Array.isArray(object === null || object === void 0 ? void 0 : object.receipts) ? object.receipts.map(function(e) {
                return PacketState.fromJSON(e);
            }) : [],
            sendSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sendSequences) ? object.sendSequences.map(function(e) {
                return PacketSequence.fromJSON(e);
            }) : [],
            recvSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.recvSequences) ? object.recvSequences.map(function(e) {
                return PacketSequence.fromJSON(e);
            }) : [],
            ackSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.ackSequences) ? object.ackSequences.map(function(e) {
                return PacketSequence.fromJSON(e);
            }) : [],
            nextChannelSequence: isSet(object.nextChannelSequence) ? Number(object.nextChannelSequence) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(function(e) {
                return e ? IdentifiedChannel.toJSON(e) : undefined;
            });
        } else {
            obj.channels = [];
        }
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(function(e) {
                return e ? PacketState.toJSON(e) : undefined;
            });
        } else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(function(e) {
                return e ? PacketState.toJSON(e) : undefined;
            });
        } else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(function(e) {
                return e ? PacketState.toJSON(e) : undefined;
            });
        } else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.sendSequences = message.sendSequences.map(function(e) {
                return e ? PacketSequence.toJSON(e) : undefined;
            });
        } else {
            obj.sendSequences = [];
        }
        if (message.recvSequences) {
            obj.recvSequences = message.recvSequences.map(function(e) {
                return e ? PacketSequence.toJSON(e) : undefined;
            });
        } else {
            obj.recvSequences = [];
        }
        if (message.ackSequences) {
            obj.ackSequences = message.ackSequences.map(function(e) {
                return e ? PacketSequence.toJSON(e) : undefined;
            });
        } else {
            obj.ackSequences = [];
        }
        message.nextChannelSequence !== undefined && (obj.nextChannelSequence = Math.round(message.nextChannelSequence));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_channels, _object_acknowledgements, _object_commitments, _object_receipts, _object_sendSequences, _object_recvSequences, _object_ackSequences;
        var message = createBaseGenesisState();
        message.channels = ((_object_channels = object.channels) === null || _object_channels === void 0 ? void 0 : _object_channels.map(function(e) {
            return IdentifiedChannel.fromPartial(e);
        })) || [];
        message.acknowledgements = ((_object_acknowledgements = object.acknowledgements) === null || _object_acknowledgements === void 0 ? void 0 : _object_acknowledgements.map(function(e) {
            return PacketState.fromPartial(e);
        })) || [];
        message.commitments = ((_object_commitments = object.commitments) === null || _object_commitments === void 0 ? void 0 : _object_commitments.map(function(e) {
            return PacketState.fromPartial(e);
        })) || [];
        message.receipts = ((_object_receipts = object.receipts) === null || _object_receipts === void 0 ? void 0 : _object_receipts.map(function(e) {
            return PacketState.fromPartial(e);
        })) || [];
        message.sendSequences = ((_object_sendSequences = object.sendSequences) === null || _object_sendSequences === void 0 ? void 0 : _object_sendSequences.map(function(e) {
            return PacketSequence.fromPartial(e);
        })) || [];
        message.recvSequences = ((_object_recvSequences = object.recvSequences) === null || _object_recvSequences === void 0 ? void 0 : _object_recvSequences.map(function(e) {
            return PacketSequence.fromPartial(e);
        })) || [];
        message.ackSequences = ((_object_ackSequences = object.ackSequences) === null || _object_ackSequences === void 0 ? void 0 : _object_ackSequences.map(function(e) {
            return PacketSequence.fromPartial(e);
        })) || [];
        var _object_nextChannelSequence;
        message.nextChannelSequence = (_object_nextChannelSequence = object.nextChannelSequence) !== null && _object_nextChannelSequence !== void 0 ? _object_nextChannelSequence : 0;
        return message;
    }
};
function createBasePacketSequence() {
    return {
        portId: "",
        channelId: "",
        sequence: 0
    };
}
export var PacketSequence = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketSequence();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = longToNumber(reader.uint64());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBasePacketSequence();
        var _object_portId;
        message.portId = (_object_portId = object.portId) !== null && _object_portId !== void 0 ? _object_portId : "";
        var _object_channelId;
        message.channelId = (_object_channelId = object.channelId) !== null && _object_channelId !== void 0 ? _object_channelId : "";
        var _object_sequence;
        message.sequence = (_object_sequence = object.sequence) !== null && _object_sequence !== void 0 ? _object_sequence : 0;
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
