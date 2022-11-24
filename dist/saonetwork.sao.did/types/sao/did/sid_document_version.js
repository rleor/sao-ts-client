/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.did";
function createBaseSidDocumentVersion() {
    return {
        docId: "",
        versionList: []
    };
}
export var SidDocumentVersion = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.docId !== "") {
            writer.uint32(10).string(message.docId);
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = message.versionList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var v = _step.value;
                writer.uint32(18).string(v);
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
        var message = createBaseSidDocumentVersion();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.docId = reader.string();
                    break;
                case 2:
                    message.versionList.push(reader.string());
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
            docId: isSet(object.docId) ? String(object.docId) : "",
            versionList: Array.isArray(object === null || object === void 0 ? void 0 : object.versionList) ? object.versionList.map(function(e) {
                return String(e);
            }) : []
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.docId !== undefined && (obj.docId = message.docId);
        if (message.versionList) {
            obj.versionList = message.versionList.map(function(e) {
                return e;
            });
        } else {
            obj.versionList = [];
        }
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var _object_versionList;
        var message = createBaseSidDocumentVersion();
        var _object_docId;
        message.docId = (_object_docId = object.docId) !== null && _object_docId !== void 0 ? _object_docId : "";
        message.versionList = ((_object_versionList = object.versionList) === null || _object_versionList === void 0 ? void 0 : _object_versionList.map(function(e) {
            return e;
        })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
