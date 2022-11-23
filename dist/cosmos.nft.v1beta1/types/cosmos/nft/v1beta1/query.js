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
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Class, NFT } from "./nft";
export var protobufPackage = "cosmos.nft.v1beta1";
function createBaseQueryBalanceRequest() {
    return {
        classId: "",
        owner: ""
    };
}
export var QueryBalanceRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryBalanceRequest();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        return message;
    }
};
function createBaseQueryBalanceResponse() {
    return {
        amount: 0
    };
}
export var QueryBalanceResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.amount !== 0) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.amount = longToNumber(reader.uint64());
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
            amount: isSet(object.amount) ? Number(object.amount) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = Math.round(message.amount));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryBalanceResponse();
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : 0;
        return message;
    }
};
function createBaseQueryOwnerRequest() {
    return {
        classId: "",
        id: ""
    };
}
export var QueryOwnerRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryOwnerRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryOwnerRequest();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : "";
        return message;
    }
};
function createBaseQueryOwnerResponse() {
    return {
        owner: ""
    };
}
export var QueryOwnerResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryOwnerResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryOwnerResponse();
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        return message;
    }
};
function createBaseQuerySupplyRequest() {
    return {
        classId: ""
    };
}
export var QuerySupplyRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQuerySupplyRequest();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        return message;
    }
};
function createBaseQuerySupplyResponse() {
    return {
        amount: 0
    };
}
export var QuerySupplyResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.amount !== 0) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.amount = longToNumber(reader.uint64());
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
            amount: isSet(object.amount) ? Number(object.amount) : 0
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = Math.round(message.amount));
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQuerySupplyResponse();
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : 0;
        return message;
    }
};
function createBaseQueryNFTsRequest() {
    return {
        classId: "",
        owner: "",
        pagination: undefined
    };
}
export var QueryNFTsRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNFTsRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryNFTsRequest();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryNFTsResponse() {
    return {
        nfts: [],
        pagination: undefined
    };
}
export var QueryNFTsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.nfts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                NFT.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseQueryNFTsResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nfts.push(NFT.decode(reader, reader.uint32()));
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
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map(function(e) {
                return NFT.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(function(e) {
                return e ? NFT.toJSON(e) : undefined;
            });
        } else {
            obj.nfts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_nfts;
        var message = createBaseQueryNFTsResponse();
        message.nfts = ((_object_nfts = object.nfts) === null || _object_nfts === void 0 ? void 0 : _object_nfts.map(function(e) {
            return NFT.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryNFTRequest() {
    return {
        classId: "",
        id: ""
    };
}
export var QueryNFTRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNFTRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryNFTRequest();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        var _object_id;
        message.id = (_object_id = object.id) !== null && _object_id !== void 0 ? _object_id : "";
        return message;
    }
};
function createBaseQueryNFTResponse() {
    return {
        nft: undefined
    };
}
export var QueryNFTResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.nft !== undefined) {
            NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNFTResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nft = NFT.decode(reader, reader.uint32());
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
            nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryNFTResponse();
        message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
        return message;
    }
};
function createBaseQueryClassRequest() {
    return {
        classId: ""
    };
}
export var QueryClassRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClassRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classId = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClassRequest();
        var _object_classId;
        message.classId = (_object_classId = object.classId) !== null && _object_classId !== void 0 ? _object_classId : "";
        return message;
    }
};
function createBaseQueryClassResponse() {
    return {
        class: undefined
    };
}
export var QueryClassResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.class !== undefined) {
            Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClassResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.class = Class.decode(reader, reader.uint32());
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
            class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryClassResponse();
        message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
        return message;
    }
};
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
export var QueryClassesRequest = {
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
        var message = createBaseQueryClassesRequest();
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
        var message = createBaseQueryClassesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryClassesResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
export var QueryClassesResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                Class.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseQueryClassesResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.classes.push(Class.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map(function(e) {
                return Class.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(function(e) {
                return e ? Class.toJSON(e) : undefined;
            });
        } else {
            obj.classes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_classes;
        var message = createBaseQueryClassesResponse();
        message.classes = ((_object_classes = object.classes) === null || _object_classes === void 0 ? void 0 : _object_classes.map(function(e) {
            return Class.fromPartial(e);
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
        this.Balance = this.Balance.bind(this);
        this.Owner = this.Owner.bind(this);
        this.Supply = this.Supply.bind(this);
        this.NFTs = this.NFTs.bind(this);
        this.NFT = this.NFT.bind(this);
        this.Class = this.Class.bind(this);
        this.Classes = this.Classes.bind(this);
    }
    var _proto = QueryClientImpl.prototype;
    _proto.Balance = function Balance(request) {
        var data = QueryBalanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
        return promise.then(function(data) {
            return QueryBalanceResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Owner = function Owner(request) {
        var data = QueryOwnerRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
        return promise.then(function(data) {
            return QueryOwnerResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Supply = function Supply(request) {
        var data = QuerySupplyRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
        return promise.then(function(data) {
            return QuerySupplyResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.NFTs = function NFTs(request) {
        var data = QueryNFTsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
        return promise.then(function(data) {
            return QueryNFTsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.NFT = function NFT(request) {
        var data = QueryNFTRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
        return promise.then(function(data) {
            return QueryNFTResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Class = function Class(request) {
        var data = QueryClassRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
        return promise.then(function(data) {
            return QueryClassResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Classes = function Classes(request) {
        var data = QueryClassesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
        return promise.then(function(data) {
            return QueryClassesResponse.decode(new _m0.Reader(data));
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
function isSet(value) {
    return value !== null && value !== undefined;
}
