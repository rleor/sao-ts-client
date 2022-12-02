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
import { PastSeeds } from "./past_seeds";
import { PaymentAddress } from "./payment_address";
import { SidDocument } from "./sid_document";
import { SidDocumentVersion } from "./sid_document_version";
export var protobufPackage = "saonetwork.sao.did";
function createBaseGenesisState() {
    return {
        params: undefined,
        didBindingProofsList: [],
        accountListList: [],
        accountAuthList: [],
        sidDocumentList: [],
        sidDocumentVersionList: [],
        pastSeedsList: [],
        paymentAddressList: []
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
        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
        try {
            for(var _iterator3 = message.sidDocumentList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                var v3 = _step3.value;
                SidDocument.encode(v3, writer.uint32(42).fork()).ldelim();
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
            for(var _iterator4 = message.sidDocumentVersionList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var v4 = _step4.value;
                SidDocumentVersion.encode(v4, writer.uint32(50).fork()).ldelim();
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
            for(var _iterator5 = message.pastSeedsList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                var v5 = _step5.value;
                PastSeeds.encode(v5, writer.uint32(58).fork()).ldelim();
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
            for(var _iterator6 = message.paymentAddressList[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                var v6 = _step6.value;
                PaymentAddress.encode(v6, writer.uint32(66).fork()).ldelim();
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
                case 5:
                    message.sidDocumentList.push(SidDocument.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.sidDocumentVersionList.push(SidDocumentVersion.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.pastSeedsList.push(PastSeeds.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.paymentAddressList.push(PaymentAddress.decode(reader, reader.uint32()));
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
            }) : [],
            sidDocumentList: Array.isArray(object === null || object === void 0 ? void 0 : object.sidDocumentList) ? object.sidDocumentList.map(function(e) {
                return SidDocument.fromJSON(e);
            }) : [],
            sidDocumentVersionList: Array.isArray(object === null || object === void 0 ? void 0 : object.sidDocumentVersionList) ? object.sidDocumentVersionList.map(function(e) {
                return SidDocumentVersion.fromJSON(e);
            }) : [],
            pastSeedsList: Array.isArray(object === null || object === void 0 ? void 0 : object.pastSeedsList) ? object.pastSeedsList.map(function(e) {
                return PastSeeds.fromJSON(e);
            }) : [],
            paymentAddressList: Array.isArray(object === null || object === void 0 ? void 0 : object.paymentAddressList) ? object.paymentAddressList.map(function(e) {
                return PaymentAddress.fromJSON(e);
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
        if (message.sidDocumentList) {
            obj.sidDocumentList = message.sidDocumentList.map(function(e) {
                return e ? SidDocument.toJSON(e) : undefined;
            });
        } else {
            obj.sidDocumentList = [];
        }
        if (message.sidDocumentVersionList) {
            obj.sidDocumentVersionList = message.sidDocumentVersionList.map(function(e) {
                return e ? SidDocumentVersion.toJSON(e) : undefined;
            });
        } else {
            obj.sidDocumentVersionList = [];
        }
        if (message.pastSeedsList) {
            obj.pastSeedsList = message.pastSeedsList.map(function(e) {
                return e ? PastSeeds.toJSON(e) : undefined;
            });
        } else {
            obj.pastSeedsList = [];
        }
        if (message.paymentAddressList) {
            obj.paymentAddressList = message.paymentAddressList.map(function(e) {
                return e ? PaymentAddress.toJSON(e) : undefined;
            });
        } else {
            obj.paymentAddressList = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_didBindingProofsList, _object_accountListList, _object_accountAuthList, _object_sidDocumentList, _object_sidDocumentVersionList, _object_pastSeedsList, _object_paymentAddressList;
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
        message.sidDocumentList = ((_object_sidDocumentList = object.sidDocumentList) === null || _object_sidDocumentList === void 0 ? void 0 : _object_sidDocumentList.map(function(e) {
            return SidDocument.fromPartial(e);
        })) || [];
        message.sidDocumentVersionList = ((_object_sidDocumentVersionList = object.sidDocumentVersionList) === null || _object_sidDocumentVersionList === void 0 ? void 0 : _object_sidDocumentVersionList.map(function(e) {
            return SidDocumentVersion.fromPartial(e);
        })) || [];
        message.pastSeedsList = ((_object_pastSeedsList = object.pastSeedsList) === null || _object_pastSeedsList === void 0 ? void 0 : _object_pastSeedsList.map(function(e) {
            return PastSeeds.fromPartial(e);
        })) || [];
        message.paymentAddressList = ((_object_paymentAddressList = object.paymentAddressList) === null || _object_paymentAddressList === void 0 ? void 0 : _object_paymentAddressList.map(function(e) {
            return PaymentAddress.fromPartial(e);
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
