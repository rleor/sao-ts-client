/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { AccountAuth } from "./account_auth";
import { AccountList } from "./account_list";
import { DidBindingProofs } from "./did_binding_proofs";
import { Params } from "./params";
export var protobufPackage = "saonetwork.sao.did";
function createBaseGenesisState() {
    return {
        params: undefined,
        didBindingProofsList: [],
        accountListList: [],
        accountAuthList: []
    };
}
export var GenesisState = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.didBindingProofsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                DidBindingProofs.encode(v, writer.uint32(18).fork()).ldelim();
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
            for(var _iterator1 = message.accountListList[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var v1 = _step1.value;
                AccountList.encode(v1, writer.uint32(26).fork()).ldelim();
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
            for(var _iterator2 = message.accountAuthList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var v2 = _step2.value;
                AccountAuth.encode(v2, writer.uint32(34).fork()).ldelim();
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
        var message = createBaseGenesisState();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.didBindingProofsList.push(DidBindingProofs.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.accountListList.push(AccountList.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.accountAuthList.push(AccountAuth.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            didBindingProofsList: Array.isArray(object === null || object === void 0 ? void 0 : object.didBindingProofsList) ? object.didBindingProofsList.map(function(e) {
                return DidBindingProofs.fromJSON(e);
            }) : [],
            accountListList: Array.isArray(object === null || object === void 0 ? void 0 : object.accountListList) ? object.accountListList.map(function(e) {
                return AccountList.fromJSON(e);
            }) : [],
            accountAuthList: Array.isArray(object === null || object === void 0 ? void 0 : object.accountAuthList) ? object.accountAuthList.map(function(e) {
                return AccountAuth.fromJSON(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.didBindingProofsList) {
            obj.didBindingProofsList = message.didBindingProofsList.map(function(e) {
                return e ? DidBindingProofs.toJSON(e) : undefined;
            });
        } else {
            obj.didBindingProofsList = [];
        }
        if (message.accountListList) {
            obj.accountListList = message.accountListList.map(function(e) {
                return e ? AccountList.toJSON(e) : undefined;
            });
        } else {
            obj.accountListList = [];
        }
        if (message.accountAuthList) {
            obj.accountAuthList = message.accountAuthList.map(function(e) {
                return e ? AccountAuth.toJSON(e) : undefined;
            });
        } else {
            obj.accountAuthList = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_didBindingProofsList, _object_accountListList, _object_accountAuthList;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.didBindingProofsList = ((_object_didBindingProofsList = object.didBindingProofsList) === null || _object_didBindingProofsList === void 0 ? void 0 : _object_didBindingProofsList.map(function(e) {
            return DidBindingProofs.fromPartial(e);
        })) || [];
        message.accountListList = ((_object_accountListList = object.accountListList) === null || _object_accountListList === void 0 ? void 0 : _object_accountListList.map(function(e) {
            return AccountList.fromPartial(e);
        })) || [];
        message.accountAuthList = ((_object_accountAuthList = object.accountAuthList) === null || _object_accountAuthList === void 0 ? void 0 : _object_accountAuthList.map(function(e) {
            return AccountAuth.fromPartial(e);
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
