/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
export var protobufPackage = "cosmos.bank.v1beta1";
function createBaseParams() {
    return {
        sendEnabled: [],
        defaultSendEnabled: false
    };
}
export var Params = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.sendEnabled[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
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
        if (message.defaultSendEnabled === true) {
            writer.uint32(16).bool(message.defaultSendEnabled);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.defaultSendEnabled = reader.bool();
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
            sendEnabled: Array.isArray(object === null || object === void 0 ? void 0 : object.sendEnabled) ? object.sendEnabled.map(function(e) {
                return SendEnabled.fromJSON(e);
            }) : [],
            defaultSendEnabled: isSet(object.defaultSendEnabled) ? Boolean(object.defaultSendEnabled) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.sendEnabled) {
            obj.sendEnabled = message.sendEnabled.map(function(e) {
                return e ? SendEnabled.toJSON(e) : undefined;
            });
        } else {
            obj.sendEnabled = [];
        }
        message.defaultSendEnabled !== undefined && (obj.defaultSendEnabled = message.defaultSendEnabled);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_sendEnabled;
        var message = createBaseParams();
        message.sendEnabled = ((_object_sendEnabled = object.sendEnabled) === null || _object_sendEnabled === void 0 ? void 0 : _object_sendEnabled.map(function(e) {
            return SendEnabled.fromPartial(e);
        })) || [];
        var _object_defaultSendEnabled;
        message.defaultSendEnabled = (_object_defaultSendEnabled = object.defaultSendEnabled) !== null && _object_defaultSendEnabled !== void 0 ? _object_defaultSendEnabled : false;
        return message;
    }
};
function createBaseSendEnabled() {
    return {
        denom: "",
        enabled: false
    };
}
export var SendEnabled = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendEnabled();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseSendEnabled();
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        var _object_enabled;
        message.enabled = (_object_enabled = object.enabled) !== null && _object_enabled !== void 0 ? _object_enabled : false;
        return message;
    }
};
function createBaseInput() {
    return {
        address: "",
        coins: []
    };
}
export var Input = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.coins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseInput();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function(e) {
                return Coin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(function(e) {
                return e ? Coin.toJSON(e) : undefined;
            });
        } else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_coins;
        var message = createBaseInput();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        message.coins = ((_object_coins = object.coins) === null || _object_coins === void 0 ? void 0 : _object_coins.map(function(e) {
            return Coin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseOutput() {
    return {
        address: "",
        coins: []
    };
}
export var Output = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.coins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseOutput();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function(e) {
                return Coin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(function(e) {
                return e ? Coin.toJSON(e) : undefined;
            });
        } else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_coins;
        var message = createBaseOutput();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        message.coins = ((_object_coins = object.coins) === null || _object_coins === void 0 ? void 0 : _object_coins.map(function(e) {
            return Coin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseSupply() {
    return {
        total: []
    };
}
export var Supply = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.total[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseSupply();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.total.push(Coin.decode(reader, reader.uint32()));
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
            total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map(function(e) {
                return Coin.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.total) {
            obj.total = message.total.map(function(e) {
                return e ? Coin.toJSON(e) : undefined;
            });
        } else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_total;
        var message = createBaseSupply();
        message.total = ((_object_total = object.total) === null || _object_total === void 0 ? void 0 : _object_total.map(function(e) {
            return Coin.fromPartial(e);
        })) || [];
        return message;
    }
};
function createBaseDenomUnit() {
    return {
        denom: "",
        exponent: 0,
        aliases: []
    };
}
export var DenomUnit = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.aliases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDenomUnit();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
            aliases: Array.isArray(object === null || object === void 0 ? void 0 : object.aliases) ? object.aliases.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
        if (message.aliases) {
            obj.aliases = message.aliases.map(function(e) {
                return e;
            });
        } else {
            obj.aliases = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_aliases;
        var message = createBaseDenomUnit();
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        var _object_exponent;
        message.exponent = (_object_exponent = object.exponent) !== null && _object_exponent !== void 0 ? _object_exponent : 0;
        message.aliases = ((_object_aliases = object.aliases) === null || _object_aliases === void 0 ? void 0 : _object_aliases.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseMetadata() {
    return {
        description: "",
        denomUnits: [],
        base: "",
        display: "",
        name: "",
        symbol: "",
        uri: "",
        uriHash: ""
    };
}
export var Metadata = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.denomUnits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
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
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(66).string(message.uriHash);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMetadata();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.uri = reader.string();
                    break;
                case 8:
                    message.uriHash = reader.string();
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
            description: isSet(object.description) ? String(object.description) : "",
            denomUnits: Array.isArray(object === null || object === void 0 ? void 0 : object.denomUnits) ? object.denomUnits.map(function(e) {
                return DenomUnit.fromJSON(e);
            }) : [],
            base: isSet(object.base) ? String(object.base) : "",
            display: isSet(object.display) ? String(object.display) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.description !== undefined && (obj.description = message.description);
        if (message.denomUnits) {
            obj.denomUnits = message.denomUnits.map(function(e) {
                return e ? DenomUnit.toJSON(e) : undefined;
            });
        } else {
            obj.denomUnits = [];
        }
        message.base !== undefined && (obj.base = message.base);
        message.display !== undefined && (obj.display = message.display);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_denomUnits;
        var message = createBaseMetadata();
        var _object_description;
        message.description = (_object_description = object.description) !== null && _object_description !== void 0 ? _object_description : "";
        message.denomUnits = ((_object_denomUnits = object.denomUnits) === null || _object_denomUnits === void 0 ? void 0 : _object_denomUnits.map(function(e) {
            return DenomUnit.fromPartial(e);
        })) || [];
        var _object_base;
        message.base = (_object_base = object.base) !== null && _object_base !== void 0 ? _object_base : "";
        var _object_display;
        message.display = (_object_display = object.display) !== null && _object_display !== void 0 ? _object_display : "";
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        var _object_symbol;
        message.symbol = (_object_symbol = object.symbol) !== null && _object_symbol !== void 0 ? _object_symbol : "";
        var _object_uri;
        message.uri = (_object_uri = object.uri) !== null && _object_uri !== void 0 ? _object_uri : "";
        var _object_uriHash;
        message.uriHash = (_object_uriHash = object.uriHash) !== null && _object_uriHash !== void 0 ? _object_uriHash : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
