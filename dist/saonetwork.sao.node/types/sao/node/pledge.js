/* eslint-disable */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export var protobufPackage = "saonetwork.sao.node";
function createBasePledge() {
    return {
        creator: "",
        pledged: undefined,
        reward: undefined,
        rewardDebt: undefined
    };
}
export var Pledge = {
    encode: function encode(message) {
        var writer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _m0.Writer.create();
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.pledged !== undefined) {
            Coin.encode(message.pledged, writer.uint32(18).fork()).ldelim();
        }
        if (message.reward !== undefined) {
            Coin.encode(message.reward, writer.uint32(26).fork()).ldelim();
        }
        if (message.rewardDebt !== undefined) {
            Coin.encode(message.rewardDebt, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function decode(input, length) {
        var reader = _instanceof(input, _m0.Reader) ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePledge();
        while(reader.pos < end){
            var tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pledged = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reward = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.rewardDebt = Coin.decode(reader, reader.uint32());
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
            pledged: isSet(object.pledged) ? Coin.fromJSON(object.pledged) : undefined,
            reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined,
            rewardDebt: isSet(object.rewardDebt) ? Coin.fromJSON(object.rewardDebt) : undefined
        };
    },
    toJSON: function toJSON(message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pledged !== undefined && (obj.pledged = message.pledged ? Coin.toJSON(message.pledged) : undefined);
        message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
        message.rewardDebt !== undefined && (obj.rewardDebt = message.rewardDebt ? Coin.toJSON(message.rewardDebt) : undefined);
        return obj;
    },
    fromPartial: function fromPartial(object) {
        var message = createBasePledge();
        var _object_creator;
        message.creator = (_object_creator = object.creator) !== null && _object_creator !== void 0 ? _object_creator : "";
        message.pledged = object.pledged !== undefined && object.pledged !== null ? Coin.fromPartial(object.pledged) : undefined;
        message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
        message.rewardDebt = object.rewardDebt !== undefined && object.rewardDebt !== null ? Coin.fromPartial(object.rewardDebt) : undefined;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
