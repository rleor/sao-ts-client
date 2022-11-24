// Generated by Ignite ignite.com/cli
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from "./registry";
import { Api } from "./rest";
import { MsgAddBinding } from "./types/sao/did/tx";
import { MsgUpdateAccountAuths } from "./types/sao/did/tx";
import { MsgUnbinding } from "./types/sao/did/tx";
import { MsgAddAccountAuth } from "./types/sao/did/tx";
import { MsgUpdateSidDocument } from "./types/sao/did/tx";
export { MsgAddBinding, MsgUpdateAccountAuths, MsgUnbinding, MsgAddAccountAuth, MsgUpdateSidDocument };
export var registry = new Registry(msgTypes);
var defaultFee = {
    amount: [],
    gas: "200000"
};
export var txClient = function() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        addr: "http://localhost:26657",
        prefix: "cosmos"
    }, signer = _ref.signer, prefix = _ref.prefix, addr = _ref.addr;
    return {
        sendMsgAddBinding: function sendMsgAddBinding(param) {
            var value = param.value, fee = param.fee, memo = param.memo;
            return _asyncToGenerator(function() {
                var address, signingClient, msg, e;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!signer) {
                                throw new Error("TxClient:sendMsgAddBinding: Unable to sign Tx. Signer is not present.");
                            }
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                signer.getAccounts()
                            ];
                        case 2:
                            address = _state.sent()[0].address;
                            return [
                                4,
                                SigningStargateClient.connectWithSigner(addr, signer, {
                                    registry: registry,
                                    prefix: prefix
                                })
                            ];
                        case 3:
                            signingClient = _state.sent();
                            msg = this.msgAddBinding({
                                value: MsgAddBinding.fromPartial(value)
                            });
                            return [
                                4,
                                signingClient.signAndBroadcast(address, [
                                    msg
                                ], fee ? fee : defaultFee, memo)
                            ];
                        case 4:
                            return [
                                2,
                                _state.sent()
                            ];
                        case 5:
                            e = _state.sent();
                            throw new Error("TxClient:sendMsgAddBinding: Could not broadcast Tx: " + e.message);
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            }).apply(this);
        },
        sendMsgUpdateAccountAuths: function sendMsgUpdateAccountAuths(param) {
            var value = param.value, fee = param.fee, memo = param.memo;
            return _asyncToGenerator(function() {
                var address, signingClient, msg, e;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!signer) {
                                throw new Error("TxClient:sendMsgUpdateAccountAuths: Unable to sign Tx. Signer is not present.");
                            }
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                signer.getAccounts()
                            ];
                        case 2:
                            address = _state.sent()[0].address;
                            return [
                                4,
                                SigningStargateClient.connectWithSigner(addr, signer, {
                                    registry: registry,
                                    prefix: prefix
                                })
                            ];
                        case 3:
                            signingClient = _state.sent();
                            msg = this.msgUpdateAccountAuths({
                                value: MsgUpdateAccountAuths.fromPartial(value)
                            });
                            return [
                                4,
                                signingClient.signAndBroadcast(address, [
                                    msg
                                ], fee ? fee : defaultFee, memo)
                            ];
                        case 4:
                            return [
                                2,
                                _state.sent()
                            ];
                        case 5:
                            e = _state.sent();
                            throw new Error("TxClient:sendMsgUpdateAccountAuths: Could not broadcast Tx: " + e.message);
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            }).apply(this);
        },
        sendMsgUnbinding: function sendMsgUnbinding(param) {
            var value = param.value, fee = param.fee, memo = param.memo;
            return _asyncToGenerator(function() {
                var address, signingClient, msg, e;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!signer) {
                                throw new Error("TxClient:sendMsgUnbinding: Unable to sign Tx. Signer is not present.");
                            }
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                signer.getAccounts()
                            ];
                        case 2:
                            address = _state.sent()[0].address;
                            return [
                                4,
                                SigningStargateClient.connectWithSigner(addr, signer, {
                                    registry: registry,
                                    prefix: prefix
                                })
                            ];
                        case 3:
                            signingClient = _state.sent();
                            msg = this.msgUnbinding({
                                value: MsgUnbinding.fromPartial(value)
                            });
                            return [
                                4,
                                signingClient.signAndBroadcast(address, [
                                    msg
                                ], fee ? fee : defaultFee, memo)
                            ];
                        case 4:
                            return [
                                2,
                                _state.sent()
                            ];
                        case 5:
                            e = _state.sent();
                            throw new Error("TxClient:sendMsgUnbinding: Could not broadcast Tx: " + e.message);
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            }).apply(this);
        },
        sendMsgAddAccountAuth: function sendMsgAddAccountAuth(param) {
            var value = param.value, fee = param.fee, memo = param.memo;
            return _asyncToGenerator(function() {
                var address, signingClient, msg, e;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!signer) {
                                throw new Error("TxClient:sendMsgAddAccountAuth: Unable to sign Tx. Signer is not present.");
                            }
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                signer.getAccounts()
                            ];
                        case 2:
                            address = _state.sent()[0].address;
                            return [
                                4,
                                SigningStargateClient.connectWithSigner(addr, signer, {
                                    registry: registry,
                                    prefix: prefix
                                })
                            ];
                        case 3:
                            signingClient = _state.sent();
                            msg = this.msgAddAccountAuth({
                                value: MsgAddAccountAuth.fromPartial(value)
                            });
                            return [
                                4,
                                signingClient.signAndBroadcast(address, [
                                    msg
                                ], fee ? fee : defaultFee, memo)
                            ];
                        case 4:
                            return [
                                2,
                                _state.sent()
                            ];
                        case 5:
                            e = _state.sent();
                            throw new Error("TxClient:sendMsgAddAccountAuth: Could not broadcast Tx: " + e.message);
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            }).apply(this);
        },
        sendMsgUpdateSidDocument: function sendMsgUpdateSidDocument(param) {
            var value = param.value, fee = param.fee, memo = param.memo;
            return _asyncToGenerator(function() {
                var address, signingClient, msg, e;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!signer) {
                                throw new Error("TxClient:sendMsgUpdateSidDocument: Unable to sign Tx. Signer is not present.");
                            }
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                signer.getAccounts()
                            ];
                        case 2:
                            address = _state.sent()[0].address;
                            return [
                                4,
                                SigningStargateClient.connectWithSigner(addr, signer, {
                                    registry: registry,
                                    prefix: prefix
                                })
                            ];
                        case 3:
                            signingClient = _state.sent();
                            msg = this.msgUpdateSidDocument({
                                value: MsgUpdateSidDocument.fromPartial(value)
                            });
                            return [
                                4,
                                signingClient.signAndBroadcast(address, [
                                    msg
                                ], fee ? fee : defaultFee, memo)
                            ];
                        case 4:
                            return [
                                2,
                                _state.sent()
                            ];
                        case 5:
                            e = _state.sent();
                            throw new Error("TxClient:sendMsgUpdateSidDocument: Could not broadcast Tx: " + e.message);
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            }).apply(this);
        },
        msgAddBinding: function msgAddBinding(param) {
            var value = param.value;
            try {
                return {
                    typeUrl: "/saonetwork.sao.did.MsgAddBinding",
                    value: MsgAddBinding.fromPartial(value)
                };
            } catch (e) {
                throw new Error("TxClient:MsgAddBinding: Could not create message: " + e.message);
            }
        },
        msgUpdateAccountAuths: function msgUpdateAccountAuths(param) {
            var value = param.value;
            try {
                return {
                    typeUrl: "/saonetwork.sao.did.MsgUpdateAccountAuths",
                    value: MsgUpdateAccountAuths.fromPartial(value)
                };
            } catch (e) {
                throw new Error("TxClient:MsgUpdateAccountAuths: Could not create message: " + e.message);
            }
        },
        msgUnbinding: function msgUnbinding(param) {
            var value = param.value;
            try {
                return {
                    typeUrl: "/saonetwork.sao.did.MsgUnbinding",
                    value: MsgUnbinding.fromPartial(value)
                };
            } catch (e) {
                throw new Error("TxClient:MsgUnbinding: Could not create message: " + e.message);
            }
        },
        msgAddAccountAuth: function msgAddAccountAuth(param) {
            var value = param.value;
            try {
                return {
                    typeUrl: "/saonetwork.sao.did.MsgAddAccountAuth",
                    value: MsgAddAccountAuth.fromPartial(value)
                };
            } catch (e) {
                throw new Error("TxClient:MsgAddAccountAuth: Could not create message: " + e.message);
            }
        },
        msgUpdateSidDocument: function msgUpdateSidDocument(param) {
            var value = param.value;
            try {
                return {
                    typeUrl: "/saonetwork.sao.did.MsgUpdateSidDocument",
                    value: MsgUpdateSidDocument.fromPartial(value)
                };
            } catch (e) {
                throw new Error("TxClient:MsgUpdateSidDocument: Could not create message: " + e.message);
            }
        }
    };
};
export var queryClient = function() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        addr: "http://localhost:1317"
    }, addr = _ref.addr;
    return new Api({
        baseURL: addr
    });
};
var SDKModule = /*#__PURE__*/ function() {
    "use strict";
    function SDKModule(client) {
        var _this = this;
        _classCallCheck(this, SDKModule);
        this.registry = [];
        this.query = queryClient({
            addr: client.env.apiURL
        });
        this.updateTX(client);
        client.on("signer-changed", function(signer) {
            _this.updateTX(client);
        });
    }
    var _proto = SDKModule.prototype;
    _proto.updateTX = function updateTX(client) {
        var _client_env_prefix;
        var methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: (_client_env_prefix = client.env.prefix) !== null && _client_env_prefix !== void 0 ? _client_env_prefix : "cosmos"
        });
        this.tx = methods;
        for(var m in methods){
            this.tx[m] = methods[m].bind(this.tx);
        }
    };
    return SDKModule;
}();
var Module = function(test) {
    return {
        module: {
            SaonetworkSaoDid: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default Module;
