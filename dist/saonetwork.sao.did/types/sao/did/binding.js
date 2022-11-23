/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { BindingProof } from "./binding_proof";
export var protobufPackage = "saonetwork.sao.did";
function createBaseBinding() {
    return {
        accountId: "",
        proof: undefined
    };
}
export var Binding = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.proof !== undefined) {
            BindingProof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBinding();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
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
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            proof: isSet(object.proof) ? BindingProof.fromJSON(object.proof) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.proof !== undefined && (obj.proof = message.proof ? BindingProof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBaseBinding();
        var _object_accountId;
        message.accountId = (_object_accountId = object.accountId) !== null && _object_accountId !== void 0 ? _object_accountId : "";
        message.proof = object.proof !== undefined && object.proof !== null ? BindingProof.fromPartial(object.proof) : undefined;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
