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
import { AccountAuth } from "./account_auth";
import { BindingProof } from "./binding_proof";
import { PubKey } from "./pub_key";
export var protobufPackage = "saonetwork.sao.did";
function createBaseMsgAddBinding() {
    return {
        creator: "",
        accountId: "",
        proof: undefined
    };
}
export var MsgAddBinding = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.accountId !== "") {
            writer.uint32(18).string(message.accountId);
        }
        if (message.proof !== undefined) {
            BindingProof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddBinding();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.accountId = reader.string();
                    break;
                case 3:
                    message.proof = BindingProof.decode(reader, reader.uint32());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            proof: isSet(object.proof) ? BindingProof.fromJSON(object.proof) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.proof !== undefined && (obj.proof = message.proof ? BindingProof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgAddBinding();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_accountId;
        message.accountId = (_object_accountId = object.accountId) !== null && _object_accountId !== void 0 ? _object_accountId : "";
        message.proof = object.proof !== undefined && object.proof !== null ? BindingProof.fromPartial(object.proof) : undefined;
        return message;
    }
};
function createBaseMsgAddBindingResponse() {
    return {};
}
export var MsgAddBindingResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddBindingResponse();
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
        var message = createBaseMsgAddBindingResponse();
        return message;
    }
};
function createBaseMsgUnbinding() {
    return {
        creator: "",
        accountId: ""
    };
}
export var MsgUnbinding = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.accountId !== "") {
            writer.uint32(18).string(message.accountId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnbinding();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            accountId: isSet(object.accountId) ? String(object.accountId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUnbinding();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_accountId;
        message.accountId = (_object_accountId = object.accountId) !== null && _object_accountId !== void 0 ? _object_accountId : "";
        return message;
    }
};
function createBaseMsgUnbindingResponse() {
    return {};
}
export var MsgUnbindingResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnbindingResponse();
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
        var message = createBaseMsgUnbindingResponse();
        return message;
    }
};
function createBaseMsgAddAccountAuth() {
    return {
        creator: "",
        did: "",
        accountAuth: undefined
    };
}
export var MsgAddAccountAuth = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== "") {
            writer.uint32(18).string(message.did);
        }
        if (message.accountAuth !== undefined) {
            AccountAuth.encode(message.accountAuth, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddAccountAuth();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            did: isSet(object.did) ? String(object.did) : "",
            accountAuth: isSet(object.accountAuth) ? AccountAuth.fromJSON(object.accountAuth) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        message.accountAuth !== undefined && (obj.accountAuth = message.accountAuth ? AccountAuth.toJSON(message.accountAuth) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgAddAccountAuth();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        message.accountAuth = object.accountAuth !== undefined && object.accountAuth !== null ? AccountAuth.fromPartial(object.accountAuth) : undefined;
        return message;
    }
};
function createBaseMsgAddAccountAuthResponse() {
    return {};
}
export var MsgAddAccountAuthResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddAccountAuthResponse();
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
        var message = createBaseMsgAddAccountAuthResponse();
        return message;
    }
};
function createBaseMsgUpdateAccountAuths() {
    return {
        creator: "",
        did: "",
        update: [],
        remove: []
    };
}
export var MsgUpdateAccountAuths = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== "") {
            writer.uint32(18).string(message.did);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.update[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                AccountAuth.encode(v, writer.uint32(26).fork()).ldelim();
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
            for(var _iterator1 = message.remove[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                writer.uint32(34).string(v1);
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
        var message = createBaseMsgUpdateAccountAuths();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.update.push(AccountAuth.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.remove.push(reader.string());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            did: isSet(object.did) ? String(object.did) : "",
            update: Array.isArray(object === null || object === void 0 ? void 0 : object.update) ? object.update.map(function(e) {
                return AccountAuth.fromJSON(e);
            }) : [],
            remove: Array.isArray(object === null || object === void 0 ? void 0 : object.remove) ? object.remove.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        if (message.update) {
            obj.update = message.update.map(function(e) {
                return e ? AccountAuth.toJSON(e) : undefined;
            });
        } else {
            obj.update = [];
        }
        if (message.remove) {
            obj.remove = message.remove.map(function(e) {
                return e;
            });
        } else {
            obj.remove = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_update, _object_remove;
        var message = createBaseMsgUpdateAccountAuths();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        message.update = ((_object_update = object.update) === null || _object_update === void 0 ? void 0 : _object_update.map(function(e) {
            return AccountAuth.fromPartial(e);
        })) || [];
        message.remove = ((_object_remove = object.remove) === null || _object_remove === void 0 ? void 0 : _object_remove.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function createBaseMsgUpdateAccountAuthsResponse() {
    return {};
}
export var MsgUpdateAccountAuthsResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateAccountAuthsResponse();
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
        var message = createBaseMsgUpdateAccountAuthsResponse();
        return message;
    }
};
function createBaseMsgUpdateSidDocument() {
    return {
        creator: "",
        keys: [],
        rootDocId: ""
    };
}
export var MsgUpdateSidDocument = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                PubKey.encode(v, writer.uint32(18).fork()).ldelim();
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
        if (message.rootDocId !== "") {
            writer.uint32(26).string(message.rootDocId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateSidDocument();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.keys.push(PubKey.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.rootDocId = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function(e) {
                return PubKey.fromJSON(e);
            }) : [],
            rootDocId: isSet(object.rootDocId) ? String(object.rootDocId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.keys) {
            obj.keys = message.keys.map(function(e) {
                return e ? PubKey.toJSON(e) : undefined;
            });
        } else {
            obj.keys = [];
        }
        message.rootDocId !== undefined && (obj.rootDocId = message.rootDocId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_keys;
        var message = createBaseMsgUpdateSidDocument();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        message.keys = ((_object_keys = object.keys) === null || _object_keys === void 0 ? void 0 : _object_keys.map(function(e) {
            return PubKey.fromPartial(e);
        })) || [];
        var _object_rootDocId;
        message.rootDocId = (_object_rootDocId = object.rootDocId) !== null && _object_rootDocId !== void 0 ? _object_rootDocId : "";
        return message;
    }
};
function createBaseMsgUpdateSidDocumentResponse() {
    return {
        docId: ""
    };
}
export var MsgUpdateSidDocumentResponse = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.docId !== "") {
            writer.uint32(10).string(message.docId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateSidDocumentResponse();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.docId = reader.string();
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
            docId: isSet(object.docId) ? String(object.docId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.docId !== undefined && (obj.docId = message.docId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgUpdateSidDocumentResponse();
        var _object_docId;
        message.docId = (_object_docId = object.docId) !== null && _object_docId !== void 0 ? _object_docId : "";
        return message;
    }
};
function createBaseMsgAddPastSeed() {
    return {
        creator: "",
        did: "",
        pastSeed: ""
    };
}
export var MsgAddPastSeed = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== "") {
            writer.uint32(18).string(message.did);
        }
        if (message.pastSeed !== "") {
            writer.uint32(26).string(message.pastSeed);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddPastSeed();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.pastSeed = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            did: isSet(object.did) ? String(object.did) : "",
            pastSeed: isSet(object.pastSeed) ? String(object.pastSeed) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        message.pastSeed !== undefined && (obj.pastSeed = message.pastSeed);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgAddPastSeed();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        var _object_pastSeed;
        message.pastSeed = (_object_pastSeed = object.pastSeed) !== null && _object_pastSeed !== void 0 ? _object_pastSeed : "";
        return message;
    }
};
function createBaseMsgAddPastSeedResponse() {
    return {};
}
export var MsgAddPastSeedResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddPastSeedResponse();
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
        var message = createBaseMsgAddPastSeedResponse();
        return message;
    }
};
function createBaseMsgCleanupSidDocuments() {
    return {
        creator: "",
        rootDocId: ""
    };
}
export var MsgCleanupSidDocuments = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.rootDocId !== "") {
            writer.uint32(18).string(message.rootDocId);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCleanupSidDocuments();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.rootDocId = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            rootDocId: isSet(object.rootDocId) ? String(object.rootDocId) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.rootDocId !== undefined && (obj.rootDocId = message.rootDocId);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgCleanupSidDocuments();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_rootDocId;
        message.rootDocId = (_object_rootDocId = object.rootDocId) !== null && _object_rootDocId !== void 0 ? _object_rootDocId : "";
        return message;
    }
};
function createBaseMsgCleanupSidDocumentsResponse() {
    return {};
}
export var MsgCleanupSidDocumentsResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCleanupSidDocumentsResponse();
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
        var message = createBaseMsgCleanupSidDocumentsResponse();
        return message;
    }
};
function createBaseMsgCleanupPastSeeds() {
    return {
        creator: "",
        did: ""
    };
}
export var MsgCleanupPastSeeds = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== "") {
            writer.uint32(18).string(message.did);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCleanupPastSeeds();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            did: isSet(object.did) ? String(object.did) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgCleanupPastSeeds();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        var _object_did;
        message.did = (_object_did = object.did) !== null && _object_did !== void 0 ? _object_did : "";
        return message;
    }
};
function createBaseMsgCleanupPastSeedsResponse() {
    return {};
}
export var MsgCleanupPastSeedsResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCleanupPastSeedsResponse();
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
        var message = createBaseMsgCleanupPastSeedsResponse();
        return message;
    }
};
function createBaseMsgResetStore() {
    return {
        creator: ""
    };
}
export var MsgResetStore = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgResetStore();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseMsgResetStore();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        return message;
    }
};
function createBaseMsgResetStoreResponse() {
    return {};
}
export var MsgResetStoreResponse = {
    encode: function encode(_) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgResetStoreResponse();
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
        var message = createBaseMsgResetStoreResponse();
        return message;
    }
};
export var MsgClientImpl = /*#__PURE__*/ function() {
    "use strict";
    function MsgClientImpl(rpc) {
        _classCallCheck(this, MsgClientImpl);
        this.rpc = rpc;
        this.AddBinding = this.AddBinding.bind(this);
        this.Unbinding = this.Unbinding.bind(this);
        this.AddAccountAuth = this.AddAccountAuth.bind(this);
        this.UpdateAccountAuths = this.UpdateAccountAuths.bind(this);
        this.UpdateSidDocument = this.UpdateSidDocument.bind(this);
        this.AddPastSeed = this.AddPastSeed.bind(this);
        this.CleanupSidDocuments = this.CleanupSidDocuments.bind(this);
        this.CleanupPastSeeds = this.CleanupPastSeeds.bind(this);
        this.ResetStore = this.ResetStore.bind(this);
    }
    var _proto = MsgClientImpl.prototype;
    _proto.AddBinding = function AddBinding(request) {
        var data = MsgAddBinding.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "AddBinding", data);
        return promise.then(function(data) {
            return MsgAddBindingResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.Unbinding = function Unbinding(request) {
        var data = MsgUnbinding.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "Unbinding", data);
        return promise.then(function(data) {
            return MsgUnbindingResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.AddAccountAuth = function AddAccountAuth(request) {
        var data = MsgAddAccountAuth.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "AddAccountAuth", data);
        return promise.then(function(data) {
            return MsgAddAccountAuthResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateAccountAuths = function UpdateAccountAuths(request) {
        var data = MsgUpdateAccountAuths.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "UpdateAccountAuths", data);
        return promise.then(function(data) {
            return MsgUpdateAccountAuthsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.UpdateSidDocument = function UpdateSidDocument(request) {
        var data = MsgUpdateSidDocument.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "UpdateSidDocument", data);
        return promise.then(function(data) {
            return MsgUpdateSidDocumentResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.AddPastSeed = function AddPastSeed(request) {
        var data = MsgAddPastSeed.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "AddPastSeed", data);
        return promise.then(function(data) {
            return MsgAddPastSeedResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.CleanupSidDocuments = function CleanupSidDocuments(request) {
        var data = MsgCleanupSidDocuments.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "CleanupSidDocuments", data);
        return promise.then(function(data) {
            return MsgCleanupSidDocumentsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.CleanupPastSeeds = function CleanupPastSeeds(request) {
        var data = MsgCleanupPastSeeds.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "CleanupPastSeeds", data);
        return promise.then(function(data) {
            return MsgCleanupPastSeedsResponse.decode(new _m0.Reader(data));
        });
    };
    _proto.ResetStore = function ResetStore(request) {
        var data = MsgResetStore.encode(request).finish();
        var promise = this.rpc.request("saonetwork.sao.did.Msg", "ResetStore", data);
        return promise.then(function(data) {
            return MsgResetStoreResponse.decode(new _m0.Reader(data));
        });
    };
    return MsgClientImpl;
}();
function isSet(value) {
    return value !== null && value !== undefined;
}
