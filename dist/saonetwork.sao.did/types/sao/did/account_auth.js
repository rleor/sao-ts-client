/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
export var protobufPackage = "saonetwork.sao.did";
function createBaseAccountAuth() {
    return {
        accountDid: "",
        accountEncryptedSeed: "",
        sidEncryptedAccount: ""
    };
}
export var AccountAuth = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.accountDid !== "") {
            writer.uint32(10).string(message.accountDid);
        }
        if (message.accountEncryptedSeed !== "") {
            writer.uint32(18).string(message.accountEncryptedSeed);
        }
        if (message.sidEncryptedAccount !== "") {
            writer.uint32(26).string(message.sidEncryptedAccount);
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAccountAuth();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountDid = reader.string();
                    break;
                case 2:
                    message.accountEncryptedSeed = reader.string();
                    break;
                case 3:
                    message.sidEncryptedAccount = reader.string();
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
            accountDid: isSet(object.accountDid) ? String(object.accountDid) : "",
            accountEncryptedSeed: isSet(object.accountEncryptedSeed) ? String(object.accountEncryptedSeed) : "",
            sidEncryptedAccount: isSet(object.sidEncryptedAccount) ? String(object.sidEncryptedAccount) : ""
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.accountDid !== undefined && (obj.accountDid = message.accountDid);
        message.accountEncryptedSeed !== undefined && (obj.accountEncryptedSeed = message.accountEncryptedSeed);
        message.sidEncryptedAccount !== undefined && (obj.sidEncryptedAccount = message.sidEncryptedAccount);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseAccountAuth();
        var _object_accountDid;
        message.accountDid = (_object_accountDid = object.accountDid) !== null && _object_accountDid !== void 0 ? _object_accountDid : "";
        var _object_accountEncryptedSeed;
        message.accountEncryptedSeed = (_object_accountEncryptedSeed = object.accountEncryptedSeed) !== null && _object_accountEncryptedSeed !== void 0 ? _object_accountEncryptedSeed : "";
        var _object_sidEncryptedAccount;
        message.sidEncryptedAccount = (_object_sidEncryptedAccount = object.sidEncryptedAccount) !== null && _object_sidEncryptedAccount !== void 0 ? _object_sidEncryptedAccount : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
