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
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AccountAuth } from "./account_auth";
import { AccountList } from "./account_list";
import { DidBindingProofs } from "./did_binding_proofs";
import { Params } from "./params";
export var protobufPackage = "saonetwork.sao.did";
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
function createBaseQueryGetDidBindingProofsRequest() {
    return {
        accountId: ""
    };
}
export var QueryGetDidBindingProofsRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetDidBindingProofsRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountId = reader.string();
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
            accountId: isSet(object.accountId) ? String(object.accountId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetDidBindingProofsRequest();
        var _object_accountId;
        message.accountId = (_object_accountId = object.accountId) !== null && _object_accountId !== void 0 ? _object_accountId : "";
        return message;
    }
};
function createBaseQueryGetDidBindingProofsResponse() {
    return {
        didBindingProofs: undefined
    };
}
export var QueryGetDidBindingProofsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.didBindingProofs !== undefined) {
            DidBindingProofs.encode(message.didBindingProofs, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetDidBindingProofsResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.didBindingProofs = DidBindingProofs.decode(reader, reader.uint32());
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
            didBindingProofs: isSet(object.didBindingProofs) ? DidBindingProofs.fromJSON(object.didBindingProofs) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.didBindingProofs !== undefined && (obj.didBindingProofs = message.didBindingProofs ? DidBindingProofs.toJSON(message.didBindingProofs) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetDidBindingProofsResponse();
        message.didBindingProofs = object.didBindingProofs !== undefined && object.didBindingProofs !== null ? DidBindingProofs.fromPartial(object.didBindingProofs) : undefined;
        return message;
    }
};
function createBaseQueryAllDidBindingProofsRequest() {
    return {
        pagination: undefined
    };
}
export var QueryAllDidBindingProofsRequest = {
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
        var message = createBaseQueryAllDidBindingProofsRequest();
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
        var message = createBaseQueryAllDidBindingProofsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllDidBindingProofsResponse() {
    return {
        didBindingProofs: [],
        pagination: undefined
    };
}
export var QueryAllDidBindingProofsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.didBindingProofs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DidBindingProofs.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseQueryAllDidBindingProofsResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.didBindingProofs.push(DidBindingProofs.decode(reader, reader.uint32()));
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
            didBindingProofs: Array.isArray(object === null || object === void 0 ? void 0 : object.didBindingProofs) ? object.didBindingProofs.map(function(e) {
                return DidBindingProofs.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.didBindingProofs) {
            obj.didBindingProofs = message.didBindingProofs.map(function(e) {
                return e ? DidBindingProofs.toJSON(e) : undefined;
            });
        } else {
            obj.didBindingProofs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_didBindingProofs;
        var message = createBaseQueryAllDidBindingProofsResponse();
        message.didBindingProofs = ((_object_didBindingProofs = object.didBindingProofs) === null || _object_didBindingProofs === void 0 ? void 0 : _object_didBindingProofs.map(function(e) {
            return DidBindingProofs.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetAccountListRequest() {
    return {
        did: ""
    };
}
export var QueryGetAccountListRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetAccountListRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.did = reader.string();
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
            did: isSet(object.did) ? String(object.did) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetAccountListRequest();
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        return message;
    }
};
function createBaseQueryGetAccountListResponse() {
    return {
        accountList: undefined
    };
}
export var QueryGetAccountListResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.accountList !== undefined) {
            AccountList.encode(message.accountList, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetAccountListResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountList = AccountList.decode(reader, reader.uint32());
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
            accountList: isSet(object.accountList) ? AccountList.fromJSON(object.accountList) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.accountList !== undefined && (obj.accountList = message.accountList ? AccountList.toJSON(message.accountList) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetAccountListResponse();
        message.accountList = object.accountList !== undefined && object.accountList !== null ? AccountList.fromPartial(object.accountList) : undefined;
        return message;
    }
};
function createBaseQueryAllAccountListRequest() {
    return {
        pagination: undefined
    };
}
export var QueryAllAccountListRequest = {
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
        var message = createBaseQueryAllAccountListRequest();
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
        var message = createBaseQueryAllAccountListRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllAccountListResponse() {
    return {
        accountList: [],
        pagination: undefined
    };
}
export var QueryAllAccountListResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.accountList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                AccountList.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseQueryAllAccountListResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountList.push(AccountList.decode(reader, reader.uint32()));
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
            accountList: Array.isArray(object === null || object === void 0 ? void 0 : object.accountList) ? object.accountList.map(function(e) {
                return AccountList.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.accountList) {
            obj.accountList = message.accountList.map(function(e) {
                return e ? AccountList.toJSON(e) : undefined;
            });
        } else {
            obj.accountList = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_accountList;
        var message = createBaseQueryAllAccountListResponse();
        message.accountList = ((_object_accountList = object.accountList) === null || _object_accountList === void 0 ? void 0 : _object_accountList.map(function(e) {
            return AccountList.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetAccountAuthRequest() {
    return {
        accountDid: ""
    };
}
export var QueryGetAccountAuthRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.accountDid !== "") {
            writer.uint32(10).string(message.accountDid);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetAccountAuthRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountDid = reader.string();
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
            accountDid: isSet(object.accountDid) ? String(object.accountDid) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.accountDid !== undefined && (obj.accountDid = message.accountDid);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetAccountAuthRequest();
        var _object_accountDid;
        message.accountDid = (_object_accountDid = object.accountDid) !== null && _object_accountDid !== void 0 ? _object_accountDid : "";
        return message;
    }
};
function createBaseQueryGetAccountAuthResponse() {
    return {
        accountAuth: undefined
    };
}
export var QueryGetAccountAuthResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.accountAuth !== undefined) {
            AccountAuth.encode(message.accountAuth, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetAccountAuthResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountAuth = AccountAuth.decode(reader, reader.uint32());
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
            accountAuth: isSet(object.accountAuth) ? AccountAuth.fromJSON(object.accountAuth) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.accountAuth !== undefined && (obj.accountAuth = message.accountAuth ? AccountAuth.toJSON(message.accountAuth) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetAccountAuthResponse();
        message.accountAuth = object.accountAuth !== undefined && object.accountAuth !== null ? AccountAuth.fromPartial(object.accountAuth) : undefined;
        return message;
    }
};
function createBaseQueryAllAccountAuthRequest() {
    return {
        pagination: undefined
    };
}
export var QueryAllAccountAuthRequest = {
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
        var message = createBaseQueryAllAccountAuthRequest();
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
        var message = createBaseQueryAllAccountAuthRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllAccountAuthResponse() {
    return {
        accountAuth: [],
        pagination: undefined
    };
}
export var QueryAllAccountAuthResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.accountAuth[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                AccountAuth.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseQueryAllAccountAuthResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountAuth.push(AccountAuth.decode(reader, reader.uint32()));
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
            accountAuth: Array.isArray(object === null || object === void 0 ? void 0 : object.accountAuth) ? object.accountAuth.map(function(e) {
                return AccountAuth.fromJSON(e);
            }) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.accountAuth) {
            obj.accountAuth = message.accountAuth.map(function(e) {
                return e ? AccountAuth.toJSON(e) : undefined;
            });
        } else {
            obj.accountAuth = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_accountAuth;
        var message = createBaseQueryAllAccountAuthResponse();
        message.accountAuth = ((_object_accountAuth = object.accountAuth) === null || _object_accountAuth === void 0 ? void 0 : _object_accountAuth.map(function(e) {
            return AccountAuth.fromPartial(e);
        })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetAllAccountAuthsRequest() {
    return {
        did: ""
    };
}
export var QueryGetAllAccountAuthsRequest = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetAllAccountAuthsRequest();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.did = reader.string();
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
            did: isSet(object.did) ? String(object.did) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseQueryGetAllAccountAuthsRequest();
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        return message;
    }
};
function createBaseQueryGetAllAccountAuthsResponse() {
    return {
        accountAuths: []
    };
}
export var QueryGetAllAccountAuthsResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.accountAuths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                AccountAuth.encode(v, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseQueryGetAllAccountAuthsResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountAuths.push(AccountAuth.decode(reader, reader.uint32()));
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
            accountAuths: Array.isArray(object === null || object === void 0 ? void 0 : object.accountAuths) ? object.accountAuths.map(function(e) {
                return AccountAuth.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        if (message.accountAuths) {
            obj.accountAuths = message.accountAuths.map(function(e) {
                return e ? AccountAuth.toJSON(e) : undefined;
            });
        } else {
            obj.accountAuths = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_accountAuths;
        var message = createBaseQueryGetAllAccountAuthsResponse();
        message.accountAuths = ((_object_accountAuths = object.accountAuths) === null || _object_accountAuths === void 0 ? void 0 : _object_accountAuths.map(function(e) {
            return AccountAuth.fromPartial(e);
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
        this.DidBindingProofs = this.DidBindingProofs.bind(this);
        this.DidBindingProofsAll = this.DidBindingProofsAll.bind(this);
        this.AccountList = this.AccountList.bind(this);
        this.AccountListAll = this.AccountListAll.bind(this);
        this.AccountAuth = this.AccountAuth.bind(this);
        this.AccountAuthAll = this.AccountAuthAll.bind(this);
        this.GetAllAccountAuths = this.GetAllAccountAuths.bind(this);
    }
    var _proto = QueryClientImpl.prototype;
    _proto.Params = function Params(request) {
        var data = QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "Params", data);
        return promise.then(function(data) {
            return QueryParamsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.DidBindingProofs = function DidBindingProofs(request) {
        var data = QueryGetDidBindingProofsRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "DidBindingProofs", data);
        return promise.then(function(data) {
            return QueryGetDidBindingProofsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.DidBindingProofsAll = function DidBindingProofsAll(request) {
        var data = QueryAllDidBindingProofsRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "DidBindingProofsAll", data);
        return promise.then(function(data) {
            return QueryAllDidBindingProofsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.AccountList = function AccountList(request) {
        var data = QueryGetAccountListRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "AccountList", data);
        return promise.then(function(data) {
            return QueryGetAccountListResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.AccountListAll = function AccountListAll(request) {
        var data = QueryAllAccountListRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "AccountListAll", data);
        return promise.then(function(data) {
            return QueryAllAccountListResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.AccountAuth = function AccountAuth(request) {
        var data = QueryGetAccountAuthRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "AccountAuth", data);
        return promise.then(function(data) {
            return QueryGetAccountAuthResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.AccountAuthAll = function AccountAuthAll(request) {
        var data = QueryAllAccountAuthRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "AccountAuthAll", data);
        return promise.then(function(data) {
            return QueryAllAccountAuthResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.GetAllAccountAuths = function GetAllAccountAuths(request) {
        var data = QueryGetAllAccountAuthsRequest.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Query", "GetAllAccountAuths", data);
        return promise.then(function(data) {
            return QueryGetAllAccountAuthsResponse.decode(new _m0.Reader(data));
        });
    };
    return QueryClientImpl;
}();
function isSet(value) {
    return value !== null && value !== undefined;
}
